import { css } from "@emotion/css";
import { FaGithubSquare, FaCameraRetro, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const containerStyle = css`
  padding: 15px;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background: white;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const headingStyle = css`
  font-family: Optima, sans-serif;
  font-size: 16px;
`;

const NavBar = () => {
  return (
    <div className={containerStyle}>
      <div>
        <h1 className={headingStyle}>
          Osneil Drakes : Full Stack Developer{""}, Analogue Film Enthusiast
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
            transition: transform 0.2s ease-in-out;

            &:hover {
              transform: scale(1.1);
            }
          `}
          href="https://github.com/Odrakes1992"
          rel="noreferrer"
          target="_blank"
        >
          <FaGithubSquare size={"26px"} />
        </a>
        <a
          className={css`
            color: black;
            transition: transform 0.2s ease-in-out;

            &:hover {
              transform: scale(1.1);
            }
          `}
          href="https://www.linkedin.com/in/osneil-drakes-cta-07909068/"
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedin size={"26px"} />
        </a>
        <a
          className={css`
            color: black;
            transition: transform 0.2s ease-in-out;

            &:hover {
              transform: scale(1.1);
            }
          `}
          href="/photos"
          rel="noreferrer"
        >
          <FaCameraRetro size={"26px"} />
        </a>
        <a
          className={css`
            color: black;
            transition: transform 0.2s ease-in-out;

            &:hover {
              transform: scale(1.1);
            }
          `}
          href="mailto:osneil-drakes@hotmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <MdEmail size={"26px"} />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
