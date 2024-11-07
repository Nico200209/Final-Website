import { icons } from "lucide-react";
import Link from "next/link";

import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

import {
  FaXTwitter,
} from "react-icons/fa6";

const socials = [
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/nicolas-garcia-0a5719201/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/n.garciapaetz/" },
  { icon: <FaXTwitter />, path: "https://x.com/NGarciaPaetz" },
  { icon: <FaGithub />, path: "https://github.com/Nico200209" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@NicolasGarcia-bm1fy" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link target="_blank" key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
