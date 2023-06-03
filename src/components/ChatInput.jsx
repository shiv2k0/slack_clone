import { Button } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const ChatInput = ({ channelName, channelId, chatRef }) => {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }
    // create a new collection in an existing collection's document
    try {
      const docRef = collection(db, "rooms", channelId, "messages");
      addDoc(docRef, {
        message: input,
        timestamp: serverTimestamp(),
        user: user?.displayName,
        userImage: user?.photoURL,
      });
    } catch (error) {
      console.log(error);
    }

    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });

    setInput("");
  };
  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  > form {
    display: flex;
    justify-content: center;

    > input {
      background-color: #565856;
      position: fixed;
      bottom: 30px;
      width: 60%;
      border-radius: 5px;
      border: 1px solid #565856;
      background-color: var(--slack-color);
      /* background-color: transparent; */
      padding: 20px;
      outline: none;
      color: var(--slack-text);
    }
    > button {
      display: none;
    }
  }
`;
// const Button = styled.button``
