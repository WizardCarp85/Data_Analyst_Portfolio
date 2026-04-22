"use client";

import { useCallback, useMemo, useState } from "react";
import { projects, ToolName } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { VscSearch, VscRepo } from "react-icons/vsc";
import type { Project } from "@/data/projects";

// Derive unique tools from project list
const FILTERS: ("All" | ToolName)[] = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.tool))),
];

export default function RepositoriesSection() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<"All" | ToolName>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchFilter = activeFilter === "All" || p.tool === activeFilter;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchFilter && matchSearch;
    });
  }, [search, activeFilter]);

  const handleClose = useCallback(() => setSelectedProject(null), []);

  return (
    <section className="repos-section">
      {/* Tab + count */}
      <div className="repos-tab-bar">
        <div className="repos-tab active">
          <VscRepo className="tab-icon" />
          <span>Repositories</span>
          <span className="tab-count">{projects.length}</span>
        </div>
      </div>

      {/* Search + filters */}
      <div className="repos-controls">
        <div className="search-wrapper">
          <VscSearch className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Find a repository..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="filter-pills">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-pill ${activeFilter === f ? "filter-pill--active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Cards grid */}
      <div className="repos-grid">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} onClick={setSelectedProject} />
        ))}
        {filtered.length === 0 && (
          <p className="no-results">No repositories match your search.</p>
        )}
      </div>

      {/* Modal */}
      <ProjectModal project={selectedProject} onClose={handleClose} />
    </section>
  );
}
