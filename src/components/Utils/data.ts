interface Skill {
  name: string;
  percentage: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

import frontendIcon from '../../assets/images/frontend-icon.png';
import backendIcon from '../../assets/images/backend-icon.png';
import toolsIcon from '../../assets/images/tool-icon.png';
import softskillsIcon from '../../assets/images/softskills-icon.png';

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    icon: frontendIcon,
    skills: [
      { name: "HTML", percentage: "90%" },
      { name: "CSS3", percentage: "90%" },
      { name: "JavaScript", percentage: "75%" },
      { name: "React.js", percentage: "80%" },
    ],
  },
  {
    title: "Backend",
    icon: backendIcon,
    skills: [
      { name: "Python", percentage: "80%" },
      { name: "Node.js", percentage: "70%" },
    ],
  },
  {
    title: "Tools",
    icon: toolsIcon,
    skills: [
      { name: "Git & GitHub", percentage: "85%" },
      { name: "Visual Studio Code", percentage: "90%" },
      { name: "PostMan", percentage: "75%" },
      { name: "Responsive Design", percentage: "80%" },
      { name: "BootStrap", percentage: "75%" },
      { name: "Material UI", percentage: "70%"},
    ],
  },
  {
    title: "Soft Skills",
    icon: softskillsIcon,
    skills: [
      { name: "Problem-solving", percentage: "90%" },
      { name: "Collaboration", percentage: "90%" },
      { name: "Proactivity", percentage: "85%" },
      { name: "Good Communication", percentage: "80%" },
    ],
  },
];
