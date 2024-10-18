import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am an efficient, creative, and detail-oriented full stack .NET developer with over 2 years of experience in building web applications. I specialize in both front-end and back-end development, utilizing technologies such as .NET Core, React and MS SQL. My passion is to develop scalable, high-performing applications that solve real-world problems for businesses.`;

export const ABOUT_TEXT = `I am a dedicated full stack .NET developer with a passion for delivering robust and scalable applications. Over the past 2 years, I have honed my skills in .NET Core, React, and database technologies like MS SQL. My projects include automating provider enrollment and optimizing web application performance. I thrive on collaborating with teams and solving complex problems with efficient solutions.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Software Engineer",
    company: "Coditas",
    description: `Worked as a full stack .NET developer, leading backend and frontend development on various projects. Implemented secure APIs, database integration, and improved system performance.`,
    technologies: ["C#", ".NET Core", "React", "MS SQL", "Docker", "AWS S3"],
  },
  {
    year: "2022",
    role: "Internship Trainee",
    company: "Wipro Technologies",
    description: `Led a team to successfully deliver a GRE simulation platform with features like registration and scoring.`,
    technologies: ["Java", "JSP", "MySQL", "HTML/CSS", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "ClamWatersAI",
    image: project1,
    description:
      "Integrated Unit APIs with CalmWaters website, improving data flow, reporting, and performance.",
    technologies: ["C#", "ASP.NET MVC", "MS SQL", "JavaScript", "AJAX"],
  },
  {
    title: "ProviderEnrollment Automation",
    image: project2,
    description:
      "Automated provider enrollment processes, saving $100K annually by reducing manual efforts.",
    technologies: ["C#", ".NET Core", "Docker", "WebAPI", "MS SQL"],
  },
  {
    title: "ConnectAndSell Optimization",
    image: project3,
    description:
      "Optimized list loading, reducing times from over 5 minutes to under 1 minute using stored procedures.",
    technologies: [".NET Core", "RabbitMQ", "Kafka", "MS SQL", "Factory Pattern"],
  },
  {
    title: "Online GRE Test Platform",
    image: project4,
    description:
      "Developed a GRE simulation platform with registration and scoring functionality.",
    technologies: ["Java", "JSP", "MySQL", "JavaScript", "HTML/CSS"],
  },
];

export const CONTACT = {
  address: "Pune, Maharashtra, India",
  phoneNo: "+91 9553107121",
  email: "vasapawan23@gmail.com",
};
