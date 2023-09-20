import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>aminsaedi.bio</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
