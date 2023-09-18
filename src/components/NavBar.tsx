import { css } from "@emotion/css";
import { FaGithubSquare, FaGithubAlt, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const containerStyle = css`
  padding: 20px;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const headingStyle = css`
  font-family: Silkscreen;
  font-size: 16px;
`;

const NavBar = () => {
  return (
    <div className={containerStyle}>
      <div>
        <h1 className={headingStyle}>
          Osneil Drakes <br /> Full Stack Developer{""}, Analogue Film
          Enthusiast
        </h1>
      </div>
      <div
        className={css`
          display: flex;
          gap: 10px;
        `}
      >
        <a
          className={css`
            color: black;
          `}
          href="https://github.com/Odrakes1992/Odrakes1992"
          rel="noreferrer"
          target="_blank"
        >
          <FaGithub size={"42px"} />
        </a>
        <a
          className={css`
            color: black;
          `}
          href="https://www.linkedin.com/in/osneil-drakes-cta-07909068/"
          rel="noreferrer"
          target="_blank"
        >
          <CiLinkedin size={"42px"} />
        </a>
        <a
          className={css`
            color: black;
          `}
          href="mailto:osneil-drakes@hotmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <MdOutlineMarkEmailUnread size={"42px"} />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
