import { InfoOutlined } from "@mui/icons-material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectRoomId } from "../features/appSlice";
import ChatInput from "./ChatInput";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { collection, doc, orderBy, query } from "firebase/firestore";
import Message from "./Message";
import { useEffect, useRef } from "react";

const Chat = () => {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(roomId && doc(db, "rooms", roomId));
  const [roomMessages, loading] = useCollection(
    roomId &&
      query(collection(db, "rooms", roomId, "messages"),orderBy("timestamp","asc"))
  );
  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading]);
  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                # {roomDetails?.data().name}
                <ExpandMoreOutlinedIcon />
              </h4>
            </HeaderLeft>
            <HeaderRight>
              <p>
                <InfoOutlined /> &nbsp; Details
              </p>
            </HeaderRight>
          </Header>
          <ChatMessages>
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data();
              console.log(timestamp);
              return (
                <Message
                  key={doc.id}
                  message={message}
                  // timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              );
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>
          <ChatInput
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            channelId={roomId}
          />
        </>
      )}
    </ChatContainer>
  );
};

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  background-color: #1a1d21;
  color: var(--slack-text);
`;

const Header = styled.div`
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: space-between;
  padding: 13px;
  align-items: center;
  border-bottom: 1px solid var(--slack-border);
  background-color: #1a1d21;
`;
const HeaderLeft = styled.div`
  > h4 {
    display: flex;
    align-items: center;
    text-transform: lowercase;
  }
`;
const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
  }
`;

const ChatMessages = styled.div`
  /* List out messages */
`;

const ChatBottom = styled.div`
  margin-bottom: 300px;
`;
