
type JContent = {
  company: string,
  title: string,
  time: string,
  description: string
}

const wolterDescription = "For my first Co-op (Cooperative education positions), I work as a member of the Cloud SRE team to " +
  "maintain and provision critical components in the cloud infrastructure. " +
  "The goal of our team is to automate the build/release process, " +
  "deploy domain application with scalability, reliability, and availability. " +
  "I worked with various cloud provision, orchestration, and automation tools like Terraform, Kubernetes, and Jenkins. " +
  "It is fascinating how all these different technology integrates with each other " +
  "to standardize and automate the development process. " +
  "I enjoyed devOp's unique culture of collaboration, and its deep connection with the open source community. " +
  "There's so much more to learn, and I'm exited to see what the rest of this " +
  "experience will bring me!"

const taDescription = "I was a TA for Object-Oriented Design in fall 2021, Fundamental of Computer Science in spring 2022, " +
  "and then Objected-Oriented Design again in summer 2022. Being a teaching assistant gave me a unique perspective to " +
  "view the course from an instructor point of view. I frequently hold office hours and review sessions to help students " +
  " clear up important conceptual misunderstanding, and provide one-on-one help. Objected Oriented Design, as the name " +
  "suggests, focuses on design principles and a test-driven development approach. Being a TA is not only a way for me to" +
  "give back to the community, but it also improved my reading comprehension for foreign code, and my ability to articulate " +
  "abstract design pattern and design ideas. It is a valuable experience that will help me in the professional world. "

const awsDescription = "I was an intern on the Amazon Connect Onboarding team. I designed and implemented a customer requested UI feature in reactJS. " +
  "Working on this project taught me a lot about collborating with teamates in a corporate environement. " +
  "It also made me a much more effective frontend engineer, and " +
  "I look forward to exploring more about frontend technology in the future!"

const journeyContent: JContent[] = [
  {
    company: "Wolterskluwer",
    title: "DevOp Engineering Intern",
    time: "July 2022 - now",
    description: wolterDescription,
  },
  {
    company: "Northeastern University",
    title: "Teaching Assistant",
    time: "Sept 2021 - June 2022",
    description: taDescription,
  },
  {
    company: "AWS",
    title: "Software engineering Intern",
    time: "May 2023 - August 2023",
    description: awsDescription,
  }
]




export default journeyContent;
