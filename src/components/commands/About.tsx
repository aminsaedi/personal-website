import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Amin Saedi</HighlightSpan>!
      </p>
      <p>
        I'm a <HighlightAlt>Site Reliability Engineer</HighlightAlt>@<HighlightAlt>Behavox</HighlightAlt> currently based in Toronto.
{/*         I'm intersted about Web development, WASM (WebAssembly), and exploring innovative technologies to enhance user experiences. */}
      </p>
      <p>
        I am passionate about <HighlightAlt>Kernel Dev</HighlightAlt>,{" "}
        <HighlightAlt>Automation</HighlightAlt>,{" "}
        <HighlightAlt>Networking</HighlightAlt>,{" "}
        <HighlightAlt>SecOps</HighlightAlt>,{" "}
        <HighlightAlt>and more</HighlightAlt>.
      </p>
    </AboutWrapper>
  );
};

export default About;
