import React from "react";
import { FaLinkedinIn , FaGithub ,  FaInstagram} from "react-icons/fa";
import { MdMail } from "react-icons/md";


const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black flex ">
      <div className="w-full h-full flex flex-col items-center justify-center gap-8">
        <h1 className="text-5xl font-bold text-white">
          <span className="text-designColor capitalize">AN</span>
        </h1>
        <div className="flex gap-4">
          <a href="https://github.com/Nair-Abhinav" className="bannerIcon">
            <FaGithub />
          </a>
          <a href="mailto:abhinavnair7404@gmail.com" className="bannerIcon">
            <MdMail />
          </a>
          <a href="https://www.linkedin.com/in/abhinav-nair-abc1234/" className="bannerIcon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
