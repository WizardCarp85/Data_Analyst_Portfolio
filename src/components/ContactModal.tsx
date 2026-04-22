"use client";

import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FiSend, FiUser, FiMail, FiMessageSquare, FiCheckCircle } from "react-icons/fi";
import { VscLoading } from "react-icons/vsc";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

type FormState = "idle" | "sending" | "sent";

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<typeof fields>>({});

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
      setTimeout(() => firstInputRef.current?.focus(), 80);
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function handleClose() {
    onClose();
    // Reset after animation ends
    setTimeout(() => {
      setFormState("idle");
      setFields({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    }, 300);
  }

  function validate() {
    const errs: Partial<typeof fields> = {};
    if (!fields.name.trim()) errs.name = "Name is required.";
    if (!fields.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      errs.email = "Enter a valid email.";
    }
    if (!fields.message.trim()) errs.message = "Message cannot be empty.";
    return errs;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof typeof fields]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setFormState("sending");

    // Simulate network delay — replace with your API call
    await new Promise((r) => setTimeout(r, 1800));

    // Opens the user's default email client as a reliable fallback
    const mailto = `mailto:yashkumar.nimje2024@nst.rishihood.edu.in`
      + `?subject=${encodeURIComponent(fields.subject || "Portfolio Contact")}`
      + `&body=${encodeURIComponent(`Hi Yashkumar,\n\n${fields.message}\n\n— ${fields.name} (${fields.email})`)}`;
    window.location.href = mailto;

    setFormState("sent");
  }

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className="modal-overlay"
      onClick={(e) => { if (e.target === overlayRef.current) handleClose(); }}
    >
      <div className="contact-card">
        {/* ─── Header ─── */}
        <div className="modal-header">
          <div className="modal-title-row">
            <FiMail className="modal-repo-icon" />
            <h2 className="modal-project-name">Get In Touch</h2>
          </div>
          <button className="modal-close-btn" onClick={handleClose} aria-label="Close">
            <IoClose />
          </button>
        </div>

        {/* ─── Body ─── */}
        <div className="modal-body">
          {formState === "sent" ? (
            <div className="contact-success">
              <FiCheckCircle className="contact-success-icon" />
              <h3 className="contact-success-title">Message sent!</h3>
              <p className="contact-success-sub">
                Your email client has opened with the message pre-filled. Thanks for reaching out!
              </p>
              <button className="contact-send-btn" onClick={handleClose}>
                Close
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              {/* Name + Email row */}
              <div className="contact-row">
                <div className="contact-field">
                  <label className="contact-label" htmlFor="cf-name">
                    <FiUser className="contact-label-icon" /> Name
                  </label>
                  <input
                    ref={firstInputRef}
                    id="cf-name"
                    name="name"
                    type="text"
                    className={`contact-input ${errors.name ? "contact-input--error" : ""}`}
                    placeholder="Your name"
                    value={fields.name}
                    onChange={handleChange}
                    disabled={formState === "sending"}
                  />
                  {errors.name && <span className="contact-error">{errors.name}</span>}
                </div>

                <div className="contact-field">
                  <label className="contact-label" htmlFor="cf-email">
                    <FiMail className="contact-label-icon" /> Email
                  </label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    className={`contact-input ${errors.email ? "contact-input--error" : ""}`}
                    placeholder="you@example.com"
                    value={fields.email}
                    onChange={handleChange}
                    disabled={formState === "sending"}
                  />
                  {errors.email && <span className="contact-error">{errors.email}</span>}
                </div>
              </div>

              {/* Subject */}
              <div className="contact-field">
                <label className="contact-label" htmlFor="cf-subject">
                  <FiMessageSquare className="contact-label-icon" /> Subject
                  <span className="contact-optional">(optional)</span>
                </label>
                <input
                  id="cf-subject"
                  name="subject"
                  type="text"
                  className="contact-input"
                  placeholder="What's this about?"
                  value={fields.subject}
                  onChange={handleChange}
                  disabled={formState === "sending"}
                />
              </div>

              {/* Message */}
              <div className="contact-field">
                <label className="contact-label" htmlFor="cf-message">
                  Message
                </label>
                <textarea
                  id="cf-message"
                  name="message"
                  className={`contact-textarea ${errors.message ? "contact-input--error" : ""}`}
                  placeholder="Write your message here..."
                  rows={5}
                  value={fields.message}
                  onChange={handleChange}
                  disabled={formState === "sending"}
                />
                {errors.message && <span className="contact-error">{errors.message}</span>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="contact-send-btn"
                disabled={formState === "sending"}
              >
                {formState === "sending" ? (
                  <>
                    <VscLoading className="contact-spinner" />
                    Sending…
                  </>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
