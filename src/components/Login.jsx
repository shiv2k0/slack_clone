import { Button } from "@mui/material";
import styled from "styled-components";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
  const [user, loading] = useAuthState(auth);
  const signIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider).catch((error) => alert(error.message));
  };
  return (
    <LoginPage>
      <LoginContainer>
        {loading ? (
          <LoadingContainer>
            <img
              src="https://img.icons8.com/?size=512&id=kikR2jIn6485&format=png"
              alt=""
            />
            <h3>Loading....</h3>
          </LoadingContainer>
        ) : (
          <>
            <img
              src="https://img.icons8.com/?size=512&id=kikR2jIn6485&format=png"
              alt=""
            />
            <h1>Sign in to the Slack</h1>
            <p>slack.com</p>
            <Button onClick={signIn}>Sign in with Google</Button>
          </>
        )}
      </LoginContainer>
    </LoginPage>
  );
};
export default Login;

const LoginPage = styled.div`
  background-color: var(--slack-color);
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginContainer = styled.div`
  > img {
    object-fit: contain;
    height: 100px;
  }
  > button {
    background-color: gray;
    color: white;
    font-weight: 600;
    margin-top: 20px;
    padding: 5px 50px;
  }
  background-color: var(--slack-border);
  padding: 100px;
  text-align: center;
  border-radius: 10px;
  color: var(--slack-text);
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  > img {
    margin-bottom: 1rem;
    object-fit: contain;
    height: 100px;
  }
`;
