"use client";

import { useEffect, useRef } from "react";
import { Project, toolColors } from "@/data/projects";
import {
  VscRepo,
  VscGlobe,
  VscGithubInverted,
} from "react-icons/vsc";
import { IoClose } from "react-icons/io5";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  const dotColor = toolColors[project.tool] ?? "#888";

  return (
    <div
      ref={overlayRef}
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div className="modal-card">
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-row">
            <VscRepo className="modal-repo-icon" />
            <h2 className="modal-project-name">{project.name}</h2>
            <span className="badge-visibility">{project.visibility}</span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <IoClose />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          <p className="modal-description">{project.longDescription}</p>

          {/* Tags */}
          <div className="modal-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          {/* Tool */}
          <div className="modal-tool-row">
            <span
              className="tool-dot"
              style={{ backgroundColor: dotColor }}
            />
            <span className="tool-name">{project.tool}</span>
          </div>

          {/* Links */}
          <div className="modal-links">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link-btn"
              >
                <VscGithubInverted />
                View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link-btn modal-link-btn--secondary"
              >
                <VscGlobe />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
