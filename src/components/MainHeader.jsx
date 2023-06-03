import { Avatar } from "@mui/material";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CloseIcon from '@mui/icons-material/Close';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
const MainHeader = () => {
  const [user] = useAuthState(auth)
  return (
    <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <AccessTimeIcon />
      </HeaderLeft>

      {/* Header Search */}
      <HeaderSearch>
        <SearchIcon />
        <input type="text" placeholder="Search" />
        <CloseIcon/>
      </HeaderSearch>

      {/* Header Right */}
      <HeaderRight>
        <HelpOutlineIcon />
        <HeaderAvatar 
        onClick={()=> auth.signOut()}
        src={user?.photoURL}
        alt={user?.displayName}
        />
      </HeaderRight>
    </HeaderContainer>
  );
};
export default MainHeader;

const HeaderContainer = styled.div`
  position: static;
  top: 0;
  color: var(--slack-text);
  display: flex;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  background-color: var(--slack-color);
  
border: 1px solid var(--slack-border)
`
const HeaderLeft = styled.div`
flex: 0.3;
display: flex;
justify-content: end;

>.MuiSvgIcon-root{
  font-size: 20px;
  cursor: pointer;
}

`
const HeaderSearch = styled.div`
flex: 0.4;
opacity: 1;
border-radius: 6px;
/* text-align: center; */
display: flex;
align-items: center;
padding: 0 10px;
color: #AFB0B1;
border: 1px solid #5c5c5c;
background-color: #403F43;
margin-left: 1rem;

>input{
  background-color: #403F43;
  /* background-color: #fff; */
  width: 100%;
  border: none;
  text-align: center;
  outline: none;
  min-width: 30vw;
  padding: 4px 0;
  font-size: 13px;
  margin: 0 10px;
  color: #AFB0B1;
  font-weight: 500;
}

>.MuiSvgIcon-root{
  font-size: 19px;
  cursor: pointer;
}

`
const HeaderRight = styled.div`
flex: 0.3;
display: flex;
justify-content: end;
align-items: center;
gap: 1rem;
margin-right: 10px;

>.MuiSvgIcon-root{
  font-size: 20px;
  cursor: pointer;
}
`

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  margin: 2px;
`
