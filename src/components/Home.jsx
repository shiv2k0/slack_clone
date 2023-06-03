
import Chat from "./Chat";
import styled from "styled-components";
import SideBar from "./SideBar";
import MainHeader from "./MainHeader";

const Home = () => {
  return (
    <div>
      <MainHeader />
      <AppBody>
        <SideBar/>
        <Chat/>
      </AppBody>
    </div>
  );
};

export default Home;

const AppBody = styled.div`
display: flex;
height: 95.4vh
    
`