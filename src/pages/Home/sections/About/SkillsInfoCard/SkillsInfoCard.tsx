import React from "react";
import './SkillsInfoCard.css';

interface Skill {
  name: string;
}

interface SkillsInfoCardProps {
  heading: string;
  skills: Skill[];
}

const SkillsInfoCard: React.FC<SkillsInfoCardProps> = ({ heading, skills }) => {
    return (
        <div className="skills-info-card">
            <h6>{heading}</h6>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default SkillsInfoCard;
