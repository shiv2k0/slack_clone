import styled from "styled-components";

const Message = ({ message, timestamp, user, userImage }) => {
  // console.log(timestamp)
  return (
    <MessageContainer>
      <MessageLeft>
        <div>
          <img src={userImage} alt="profile pic" />
        </div>
      </MessageLeft>
      <MessageRight>
        <MessageDetails>
          <UserDetails>{user}</UserDetails>
          <TimeStamp>{timestamp}</TimeStamp>
        </MessageDetails>
        <MessageInfo>{message}</MessageInfo>
      </MessageRight>
    </MessageContainer>
  );
};

export default Message;

const MessageContainer = styled.div`
  display: flex;
  margin: 20px;
`;

const MessageLeft = styled.div`
  > div {
    /* background-color: white; */
    /* border-radius: 20px; */
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
      width: 40px;
      height: 40px;
      border-radius: 10px;

      object-fit: cover;
    }
  }
`;
const MessageRight = styled.div`
  padding: 0 5px;
`;
const MessageDetails = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-end;
`;
const MessageInfo = styled.div`
  font-size: 15px;
`;
const UserDetails = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: #d4d4d4;
`;
const TimeStamp = styled.div`
  font-size: 13px;
`;
