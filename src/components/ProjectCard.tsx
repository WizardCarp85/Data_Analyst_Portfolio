"use client";

import { Project, toolColors } from "@/data/projects";
import { VscRepo } from "react-icons/vsc";

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const dotColor = toolColors[project.tool] ?? "#888";

  return (
    <div
      className="project-card"
      onClick={() => onClick(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick(project)}
    >
      <div className="project-card-header">
        <div className="project-card-title-row">
          <VscRepo className="project-repo-icon" />
          <span className="project-name">{project.name}</span>
        </div>
        <span className="badge-visibility">{project.visibility}</span>
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      <div className="project-footer">
        <span className="tool-dot" style={{ backgroundColor: dotColor }} />
        <span className="tool-name">{project.tool}</span>
      </div>
    </div>
  );
}
