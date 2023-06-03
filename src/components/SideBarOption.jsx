import styled from "styled-components";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { enterRoom } from "../features/appSlice";


const SideBarOption = ({ Icon, title, addChannelOption,id }) => {
  const dispatch = useDispatch()
  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      try {
        // setDoc(doc(db,"rooms", uniqueId),{
        //   name: channelName
        // })
        addDoc(collection(db,"rooms"),{
          name: channelName
        })
      } catch (error) {
        console.log(error)
      }
    }
  };

  const selectChannel = () => {
    if(id){
      dispatch(enterRoom({
        roomId: id
      }))
    }
  };

  return (
    <SideBarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon  style={{ fontSize:40,padding: 10 }} />}
      {Icon ? (
        <h4>{title}</h4>
      ) : (
        <SideBarOptionChannel>
          <span style={{ padding: 5 }}>#</span>
          {title}
        </SideBarOptionChannel>
      )}
    </SideBarOptionContainer>
  );
};

export default SideBarOption;

const SideBarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: normal;
  :hover {
    opacity: 0.9;
    background-color: #2f2f2f;
    border-radius: 10px;
    cursor: pointer;
  }
  > h4 {
    font-weight: 500;
  }
  > h4 > span {
    padding: 15px;
  }
`;
const SideBarOptionChannel = styled.div`
  padding: 3px 30px;
`;
