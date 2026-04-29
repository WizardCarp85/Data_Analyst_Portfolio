"use client";

import Image from "next/image";
import {
  VscLocation,
  VscMail,
  VscDeviceMobile,
  VscLink,
} from "react-icons/vsc";
import { FiDownload } from "react-icons/fi";

const skills = ["Excel", "Looker Studio", "Tableau", "Python", "SQL", "Pandas"];

interface SidebarProps {
  onContactClick: () => void;
}

export default function Sidebar({ onContactClick }: SidebarProps) {
  return (
    <aside className="sidebar">
      {/* Avatar */}
      <div className="avatar-wrapper">
        <Image
          src="/profi.jpg"
          alt="Profile picture"
          width={260}
          height={260}
          className="avatar-img"
          preload
        />
      </div>

      {/* Identity */}
      <h1 className="sidebar-name">Yashkumar Nimje</h1>
      <p className="sidebar-username">yashkumar-data</p>
      <p className="sidebar-bio">
        Data Analyst transforming complex data into actionable insights. Skilled in building scalable models, dashboards, and data-driven solutions.
      </p>

      {/* CTA */}
      <div className="sidebar-cta-group">
        <button className="follow-btn" onClick={onContactClick}>Follow / Contact</button>
        <a
          href="https://drive.google.com/file/d/1Gy874rkDhLWFW9zLQdZWSYQXmpauasN1/view?usp=drive_link"
          download="Yashkumar_Nimje_Resume.pdf"
          className="resume-btn"
        >
          <FiDownload className="resume-btn-icon" />
          Download Resume
        </a>
      </div>

      {/* Meta */}
      <ul className="sidebar-meta">
        <li>
          <VscLocation className="meta-icon" />
          <span>New Delhi, India</span>
        </li>
        <li>
          <VscMail className="meta-icon" />
          <a href="mailto:yashkumar.nimje2024@nst.rishihood.edu.in" className="meta-link">
            yashkumar.nimje2024@nst.rishihood.edu.in
          </a>
        </li>
        <li>
          <VscLink className="meta-icon" />
          <a
            href="https://www.linkedin.com/in/yashkumar-nimje-75a824323/"
            target="_blank"
            rel="noopener noreferrer"
            className="meta-link"
          >
            linkedin.com/in/yashkumar-nimje/
          </a>
        </li>
      </ul>

      {/* Skills / Orgs */}
      <div className="sidebar-section">
        <h3 className="sidebar-section-title">Organizations</h3>
        <div className="skill-chips">
          {skills.map((s) => (
            <span key={s} className="skill-chip">{s}</span>
          ))}
        </div>
      </div>
    </aside>
  );
}
