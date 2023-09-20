import {
  Cmd,
  HeroContainer,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <div>Heyyyy, Welcome to my website! My name is Amin Saedi</div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>` or `<Cmd>کمک</Cmd>`
        </div>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
