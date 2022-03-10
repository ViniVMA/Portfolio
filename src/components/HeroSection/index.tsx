import Image from "next/image";
import { Button } from "..";

function HeroSection() {
  return (
    <div className="hero  flex flex-col justify-around sm:h-[86.5vh]">
      <div className="hero-content sm:mt-72 mt-32 flex flex-col h-full justify-between ">
        <div>
          <span className="font-light  border-b-2 border-primary pb-1">
            Olá eu sou
          </span>
          <h1 className="sm:text-8xl text-6x font-[Roboto] text-transparent text-left text-6xl mt-8 mb-12 font-medium bg-clip-text bg-gradient-to-r from-purple-600  to-cyan-400 text-animate">
            Vinicius Vilela
          </h1>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="flex gap-4 w-full flex-wrap">
          <Button buttonText="Linkedin" />
          <Button buttonText="Github" />
          <Button buttonText="Contato" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
