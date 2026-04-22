"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import RepositoriesSection from "@/components/RepositoriesSection";
import ContributionGraph from "@/components/ContributionGraph";
import ContactModal from "@/components/ContactModal";
import { VscGithubInverted } from "react-icons/vsc";
import { FiLinkedin, FiMail } from "react-icons/fi";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      {/* Top nav bar */}
      <header className="top-nav">
        <div className="top-nav-inner">
          <VscGithubInverted className="nav-logo" />
        </div>
      </header>

      {/* Main layout */}
      <main className="portfolio-layout">
        <Sidebar onContactClick={() => setContactOpen(true)} />
        <div className="portfolio-main">
          <RepositoriesSection />
          <ContributionGraph />
        </div>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <p className="footer-copy">© 2026 Yashkumar Nimje. All rights reserved.</p>
        <nav className="footer-links">
          <a
            href="https://www.linkedin.com/in/yashkumar-nimje-75a824323/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FiLinkedin />
            LinkedIn
          </a>
          <a
            href="https://github.com/WizardCarp85"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <VscGithubInverted />
            GitHub
          </a>
          <button
            className="footer-link footer-link--btn"
            onClick={() => setContactOpen(true)}
          >
            <FiMail />
            Contact
          </button>
        </nav>
      </footer>

      {/* Contact modal */}
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
