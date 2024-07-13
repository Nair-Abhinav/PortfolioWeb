import React from 'react'
import Title from '../layouts/Title'
import { projectTwo, projectOne , projectThree} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Image Processing Web"
          des=" Developed a tool for seamless design integration onto surfaces from captured photos."
          src={projectOne}
          link = "https://github.com/Nair-Abhinav/ContextVectors_ACE.git"
        />
        <ProjectsCard
          title="Chatting App"
          des=" Developed an anonymous chat application allowing users to chat without
revealing their identity."
          src={projectTwo}
          link = "https://github.com/Aryan-webp/AnonChat.git"
        />
        <ProjectsCard
          title="Blog Website"
          des=" Explore my blog website project featuring a sleek, modern design and rich, engaging content powered by HTML,CSS and JS."
          src={projectThree}
          link = "https://github.com/Nair-Abhinav/init_task_web.git"
        />
      </div>
    </section>
  );
}

export default Projects