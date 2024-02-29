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
        I'm a <HighlightAlt>Web Developer</HighlightAlt> currently based in Montreal/Toronto.
        I'm intersted about Web development, WASM (WebAssembly), and exploring innovative technologies to enhance user experiences.
      </p>
      <p>
        I am passionate about <HighlightAlt>Linux</HighlightAlt>,{" "}
        <HighlightAlt>Web Development</HighlightAlt>,{" "}
        <HighlightAlt>Open Source</HighlightAlt>,{" "}
        <HighlightAlt>Cloud Computing</HighlightAlt>,{" "}
        <HighlightAlt>DevOps</HighlightAlt>,{" "}
        <HighlightAlt>Automation</HighlightAlt>,{" "}
        <HighlightAlt>Networking</HighlightAlt>,{" "}
        <HighlightAlt>and more</HighlightAlt>.
      </p>
    </AboutWrapper>
  );
};

export default About;
