import React, { useEffect } from 'react';
import BaseCard from "../../../../component/projectcards/BaseCard";
import projectContent from "./projectContent";
import './projectSection.css';
import Fade from "react-reveal/Fade";
import { useInView } from "react-intersection-observer";
import RepoCard from "react-repo-card";

const Appear = ({ override }: any) => {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0,
  });
  useEffect(() => {
    //do something here when inView is true
  }, [inView])

  const ele = projectContent.map(({ title, description, children }, index) => (
    <Fade bottom delay={0} key={index}>
      <div className="projectCard " key={title}>
        <BaseCard
          description={description}
          // imageAlt={alt}
          // image={image}
          title={title}
          minHeight={0}>
          {children}
        </BaseCard>
      </div>
    </Fade>)
  );
  return (
    <div style={{ display: "flex", flexDirection: "column" }} ref={ref}>
      {inView ? ele : null}
    </div>);
}

const repos = {
  name: "richardwzp",
  repos: [
    "teleute",
    "sandman-demo",
    "dotfiles",
    "python-database-project",
    "warbler-discord-bot",
    "racket-practice",
  ]
}
const style = { width: "300px", display: "flex", padding: 5 };
type createRepoProp = { name: string, repo: string, index: number };
const CreateRepo: React.FC<createRepoProp> = ({ name, repo, index }) => {
  return (
    <div style={style}>
      <Fade bottom delay={index * 60}>
        <RepoCard dark username={name} repository={repo} />
      </Fade>
    </div>
  );
}
const GithubRepo = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0,
  });
  return <div ref={ref}>
    {inView ? (
      <div className="projectSection"
        style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
        {repos.repos.map((na, index) =>
          <CreateRepo key={index} name={repos.name} repo={na} index={index} />)}
      </div>) : null}

  </div>;
}


const ProjectSection = () => {
  return (

    <div style={{ display: "flex", flexDirection: "column" }}>
      <Appear override={repos.repos.length} />
      <div style={{ marginTop: "90px" }}></div>
      <GithubRepo />
    </div>
  );
}

export default ProjectSection;
