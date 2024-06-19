import { SKILLS } from "../../../../components/Utils/data";
import SkillsCard from "./SkillsCard/SkillsCard";
import "./About.css";
import { useState } from "react";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";

interface Skill {
  name: string;
  percentage: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

function About() {
    const [selectedSkill, setSelectedSkill] = useState<SkillCategory>(SKILLS[0]);

    const handleSelectedSkill = (data: SkillCategory) => {
        setSelectedSkill(data);
    };

    return (
        <section className="about-container">
            <h5>Technical Proficiency</h5>
            <div className="skills-content">
                <div className="skills">
                    {SKILLS.map((item) => (
                        <SkillsCard
                            key={item.title}
                            iconUrl={item.icon}
                            title={item.title}
                            isActive={selectedSkill.title === item.title}
                            onClick={ () => {
                              handleSelectedSkill(item);
                            }}
                        />
                    ))}
                </div>
                <div className="skills-info">
                    <SkillsInfoCard
                        heading={selectedSkill.title}
                        skills={selectedSkill.skills}
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
