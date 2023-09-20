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
        I'm a full-time <HighlightAlt>system administrator</HighlightAlt> and a part-time <HighlightAlt>Web Developer</HighlightAlt> currently living
        in Montreal, Canada.,
      </p>
      <p>
        I am passionate about <HighlightAlt>Linux</HighlightAlt>,{" "}
        <HighlightAlt>Virtualization</HighlightAlt>,{" "}
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
