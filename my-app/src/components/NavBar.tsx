import React from "react";
import { FaGithubSquare, FaGithubAlt, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const NavBar = () => {
  return (
    <div>
      <FaGithub />
      <CiLinkedin className="w-4 h-4 ml-1" />
      <MdOutlineMarkEmailUnread />
    </div>
  );
};

export default NavBar;
