import React, { useState } from "react";
import "./home.css";

export default function Home() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    country: "Kazakhstan (+7)",
    phone: "",
    program: "",
    textingOk: "Yes",
  });

  const [sent, setSent] = useState(false);

  const instagramUrl = "https://www.instagram.com/JLSCHOOL2023";
  const whatsappUrl = "https://wa.me/77017504924";

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Request info:", form);
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  }

  return (
    <div className="home-root">
      <div className="hero-row">
        <div className="hero-left">

          {/* LOGO */}
          <div className="logo">JL<span>School</span></div>

          {/* LANGUAGES MENU */}
          <nav className="language-menu">
            <a href="/english" className="lang-item">English</a>
            <a href="/arabic" className="lang-item">Arabic</a>
            <a href="/japanese" className="lang-item">Japanese</a>
            <a href="/summer" className="lang-item highlight">Summer School USA</a>
          </nav>

          <h1 className="hero-title">Why JL School?</h1>
          <p className="hero-text">
            At JL School you’ll improve your English in a friendly, relaxed and
            effective way. Lessons for children and adults, real dialogues,
            vocabulary builders and fun interactive tasks — everything to help
            you speak confidently and enjoy learning.
          </p>

          <div className="features">
            <div className="feature">
              <h3>🎯 Real-life English</h3>
              <p>Practical phrases for travel, work and daily life.</p>
            </div>
            <div className="feature">
              <h3>🗣 Dialogues & Speaking</h3>
              <p>Speaking practice with dialogues and roleplays.</p>
            </div>
            <div className="feature">
              <h3>🌍 Friendly teachers</h3>
              <p>Supportive lessons — we make learning enjoyable.</p>
            </div>
          </div>

          <div className="cta-row">
            <a className="cta-primary" href="#request">Request info</a>
            <a className="cta-ghost" href="#contacts">Contacts</a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <aside className="hero-right" id="request">
          <h2>REQUEST INFORMATION</h2>

          {!sent ? (
            <form className="request-form" onSubmit={handleSubmit}>
              <div className="row">
                <input
                  name="firstName"
                  placeholder="First Name *"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  name="lastName"
                  placeholder="Last Name *"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <input
                name="email"
                type="email"
                placeholder="Email *"
                value={form.email}
                onChange={handleChange}
                required
              />

              <input
                name="confirmEmail"
                type="email"
                placeholder="Confirm Email"
                value={form.confirmEmail}
                onChange={handleChange}
              />

              <div className="row">
                <select name="country" value={form.country} onChange={handleChange}>
                  <option>Kazakhstan (+7)</option>
                  <option>USA (+1)</option>
                  <option>Other</option>
                </select>

                <input
                  name="phone"
                  placeholder="Phone Number *"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <select name="program" value={form.program} onChange={handleChange} required>
                <option value="">Program of interest *</option>
                <option>General English</option>
                <option>Speaking & Pronunciation</option>
                <option>Kids Course</option>
                <option>Exam preparation</option>
              </select>

              <div className="row small">
                <label>Is Texting OK?</label>
                <div className="radio-row">
                  <label>
                    <input
                      type="radio"
                      name="textingOk"
                      value="Yes"
                      checked={form.textingOk === "Yes"}
                      onChange={handleChange}
                    /> 
                    Yes
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="textingOk"
                      value="No"
                      checked={form.textingOk === "No"}
                      onChange={handleChange}
                    /> 
                    No
                  </label>
                </div>
              </div>

              <button className="submit-btn" type="submit">Submit</button>

              <div className="small-note">
                By sending you agree to be contacted. We will not share your data.
              </div>
            </form>
          ) : (
            <div className="sent-box">
              <h3>Thanks! 🎉</h3>
              <p>We received your request and will contact you soon.</p>
              <button onClick={() => setSent(false)} className="submit-btn">
                Send again
              </button>
            </div>
          )}

          <div className="social">
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="social-btn">
              Instagram
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="social-btn green">
              WhatsApp
            </a>
          </div>
        </aside>
      </div>

       {/* contacts/footer */}
      <footer className="site-footer" id="contacts">
        <div className="contacts-left">
          <h3>JL School</h3>
          <p><b>Kazakhstan</b><br/>Phone / WA: +7 701 750 49 24<br/></p>
          <p><b>USA</b><br/>+1 347 535 60 45<br/></p>
        </div>


        <div className="contacts-right">
          <h4>Connect with us</h4>
          <div className="icons">
            <a href="https://www.youtube.com/@JLSCHOOL2023" target="_blank" rel="noreferrer" className="icon">YouTube</a>
            <a href="mailto:Hadijaeducation@gmail.com" className="icon">Email</a>
            <a href="https://t.me/JL_School1102" target="_blank" rel="noreferrer" className="icon">Telegram</a>
            <a href="https://www.instagram.com/jl_school2023" target="_blank" rel="noreferrer" className="icon">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
