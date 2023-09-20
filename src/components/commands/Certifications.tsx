import { useContext, useEffect } from "react";
import { ProjectsIntro } from "../styles/Projects.styled";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
import {
  checkRedirect,
  generateTabs,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Certifications: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command makes redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "certs")) {
      certifications.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2"]) ? <Usage cmd="certs" /> : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <HelpWrapper data-testid="projects">
      <ProjectsIntro>Here are my recent certifications</ProjectsIntro>
      {certifications.map(({ id, title, url, tab }) => (
        <CmdList key={title}>
          <Cmd>{`${id}. ${title}`}</Cmd>
          {generateTabs(tab)}
          <CmdDesc>- {url}</CmdDesc>
        </CmdList>
      ))}
      <Usage cmd="certs" marginY />
    </HelpWrapper>
  );
};

const certifications = [
  {
    id: 1,
    title: "LPIC-1 Linux Administrator",
    url: "https://cs.lpi.org/caf/Xamman/certification/verify/LPI000565598/2vtynrqvw4",
    tab: 5,
  },
  {
    id: 2,
    title: "LPIC-2 Linux Engineer",
    url: "https://cs.lpi.org/caf/Xamman/certification/verify/LPI000565598/2vtynrqvw4",
    tab: 1,
  },
];

export default Certifications;
