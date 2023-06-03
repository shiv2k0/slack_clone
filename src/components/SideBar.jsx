import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EditNoteIcon from "@mui/icons-material/EditNote";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SideBarOption from "./SideBarOption";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const SideBar = () => {
  const [user] = useAuthState(auth)
  const [channels,loading,error] = useCollection(collection(db,"rooms"))
  // console.log(channels?.docs[0].data())

  // const [channels, setChannels] = useState([]);

  // useEffect(() => {
  //   getChannels(setChannels);
  // }, []);

  return (
    <SideBarContainer>
      <SideBarHeader>
        <SideBarHeaderLeft>
          <h3>{user?.displayName}</h3>
          <ArrowDropDownIcon />
        </SideBarHeaderLeft>
        <SideBarHeaderRight>
          <EditNoteIcon />
        </SideBarHeaderRight>
      </SideBarHeader>
      <SideBarOption Icon={MoreVertIcon} title={"Browse Slack"} />
      <div style={{ borderBottom: "1px solid var(--slack-border)" }} />
      <SideBarOption Icon={ArrowDropDownIcon} title={"Channels"} />

      {channels?.docs.map((doc) => (
        <SideBarOption
        key={doc.id}
        id={doc.id}
        title={doc.data().name}
        />
      ))}

      {/* {channels.map(({ id, name }) => (
        <SideBarOption key={id} id={id} title={name} />
      ))} */}

      <SideBarOption
        Icon={AddBoxIcon}
        title={"Add Channels"}
        addChannelOption
      />
       
      <SideBarOption Icon={EditNoteIcon} title={"Direct messages"} />
      
      <UserDetails>
        <img src={user?.photoURL} alt="" />
        <span>{user?.displayName}</span>
      </UserDetails>
      {/* <SideBarOption Icon={A} title={"Add coworkers"} /> */}

    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.div`
  background-color: var(--slack-color);
  color: var(--slack-text);
  flex: 0.3;
`;
const SideBarHeader = styled.div`
  padding: 10px 1rem;
  border-bottom: 1px solid var(--slack-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SideBarHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  > h3 {
    color: #fff;
  }
`;
const SideBarHeaderRight = styled.div`
  background-color: white;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: var(--slack-color);
`;

const UserDetails = styled.div`
width: 100%;
display: flex;
align-items: center;
font-size: 15px;
margin: 5px 0;
padding: 0 15px;
gap: 0.6rem;
font-weight: 600;
cursor: pointer;

>img{
  height: 25px;
  border-radius: 5px;

}
  
`