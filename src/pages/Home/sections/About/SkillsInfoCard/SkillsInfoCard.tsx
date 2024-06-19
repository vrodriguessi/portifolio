import React from "react";
import './SkillsInfoCard.css';

interface Skill {
  name: string;
  percentage: string;
}

interface SkillsInfoCardProps {
  heading: string;
  skills: Skill[];
}

const SkillsInfoCard: React.FC<SkillsInfoCardProps> = ({ heading, skills }) => {
    return (
        <div className="skills-info-card">
            <h6>{heading}</h6>
            <div className="skills-info-content">
                {skills.map((item, index) => (
                    <div key={index} className="skill-info">
                        <p>{item.name}</p>
                        <div className="skill-progress">
                            <div className="skill-progress-bar" style={{ width: item.percentage }}></div>
                        </div>
                        <p className="percentage">{item.percentage}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillsInfoCard;
