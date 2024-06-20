import React from "react";
import "./SkillsCard.css";

interface SkillsCardProps {
  title: string;
  iconUrl: string;
  isActive: boolean;
  onClick: () => void;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div
      className={`skills-card ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="skills-icon">
        <img src={iconUrl} alt={title} />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default SkillsCard;
