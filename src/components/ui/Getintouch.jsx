import { useState, useEffect, useRef } from "react";

const PARTICLES = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 0.5,
  speed: Math.random() * 0.3 + 0.1,
  opacity: Math.random() * 0.4 + 0.1,
}));

function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `floatUp ${8 / p.speed}s linear infinite`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}

function GridLines() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, #000 100%)",
        }}
      />
    </div>
  );
}

function GlowOrb({ className }) {
  return (
    <div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{ filter: "blur(80px)" }}
    />
  );
}

const fields = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "John Doe",
    icon: "✦",
    validate: (v) => (!v.trim() ? "Name is required" : v.trim().length < 2 ? "At least 2 characters" : ""),
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "john@example.com",
    icon: "◈",
    validate: (v) =>
      !v.trim()
        ? "Email is required"
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
        ? "Enter a valid email"
        : "",
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "+1 (555) 000-0000",
    icon: "◎",
    validate: (v) =>
      !v.trim()
        ? "Phone is required"
        : !/^[\+\d\s\-\(\)]{7,}$/.test(v)
        ? "Enter a valid phone number"
        : "",
  },
];

export default function GetInTouch({ onBack }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", description: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const validate = (name, value) => {
    const field = fields.find((f) => f.name === name);
    if (field) return field.validate(value);
    if (name === "description")
      return !value.trim() ? "Description is required" : value.trim().length < 10 ? "At least 10 characters" : "";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (touched[name]) setErrors((p) => ({ ...p, [name]: validate(name, value) }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((p) => ({ ...p, [name]: true }));
    setErrors((p) => ({ ...p, [name]: validate(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, phone: true, description: true };
    setTouched(allTouched);
    const newErrors = {};
    Object.keys(allTouched).forEach((k) => {
      newErrors[k] = validate(k, form[k]);
    });
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 2000));
    setSubmitting(false);
    setSubmitted(true);
  };

  const hasError = (name) => touched[name] && errors[name];
  const isValid = (name) => touched[name] && !errors[name] && form[name];

  if (submitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4 overflow-hidden relative">
    
        <GridLines />
        <GlowOrb className="w-96 h-96 bg-emerald-500/10 top-1/4 left-1/4" />
        <div className="relative z-10 text-center" style={{ animation: "scaleIn 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards" }}>
          <div className="w-24 h-24 mx-auto mb-8 relative">
            <div className="absolute inset-0 rounded-full border-2 border-emerald-400/30" style={{ animation: "ping 2s cubic-bezier(0,0,0.2,1) infinite" }} />
            <div className="absolute inset-2 rounded-full border border-emerald-400/50" style={{ animation: "ping 2s cubic-bezier(0,0,0.2,1) infinite", animationDelay: "0.3s" }} />
            <div className="w-24 h-24 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M8 20L16 28L32 12" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ strokeDasharray: 40, strokeDashoffset: 0, animation: "drawCheck 0.5s 0.3s ease forwards" }} />
              </svg>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Georgia', serif" }}>Message Sent</h2>
          <p className="text-zinc-400 text-lg mb-8">We'll get back to you within 24 hours.</p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", description: "" }); setTouched({}); setErrors({}); }}
            className="px-8 py-3 border border-white/20 text-white/70 rounded-full text-sm hover:border-white/40 hover:text-white transition-all duration-300"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden relative" style={{ fontFamily: "'Georgia', serif" }}>
    
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: inherit; }
          50% { opacity: 0.6; }
          100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
        }
        @keyframes slideDown { from { opacity:0; transform: translateY(-20px); } to { opacity:1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity:0; transform: translateY(40px); } to { opacity:1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes scaleIn { from { opacity:0; transform: scale(0.8); } to { opacity:1; transform: scale(1); } }
        @keyframes ping { 75%,100% { transform: scale(2); opacity: 0; } }
        @keyframes drawCheck { to { stroke-dashoffset: 0; } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes borderGlow { 0%,100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); } 50% { box-shadow: 0 0 20px 2px rgba(255,255,255,0.05); } }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.5; } }
        .stagger-1 { animation: slideUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s both; }
        .stagger-2 { animation: slideUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both; }
        .stagger-3 { animation: slideUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.3s both; }
        .stagger-4 { animation: slideUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.4s both; }
        .stagger-5 { animation: slideUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.5s both; }
        .stagger-6 { animation: slideUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.6s both; }
        .header-anim { animation: slideDown 0.8s cubic-bezier(0.22,1,0.36,1) both; }
        .input-field {
          width: 100%; background: transparent; outline: none; color: #fff;
          font-size: 1rem; font-family: 'Georgia', serif;
          padding: 0; border: none;
        }
        .input-field::placeholder { color: #444; }
        .input-field:-webkit-autofill { -webkit-text-fill-color: #fff; -webkit-box-shadow: 0 0 0px 1000px #000 inset; }
        .field-wrap {
          position: relative; border-bottom: 1px solid;
          padding: 20px 0 12px; transition: border-color 0.3s ease;
        }
        .field-wrap.idle { border-color: #222; }
        .field-wrap.focused { border-color: #555; }
        .field-wrap.valid { border-color: #22c55e44; }
        .field-wrap.error { border-color: #ef444444; }
        .field-line {
          position: absolute; bottom: -1px; left: 0; height: 1px;
          background: linear-gradient(90deg, transparent, #fff, transparent);
          transition: width 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .submit-btn {
          position: relative; overflow: hidden;
          background: #fff; color: #000;
          border: none; cursor: pointer;
          font-family: 'Georgia', serif;
          font-size: 1rem; font-weight: 600;
          padding: 18px 48px; border-radius: 2px;
          transition: transform 0.2s ease, box-shadow 0.3s ease;
          letter-spacing: 0.05em;
        }
        .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(255,255,255,0.15); }
        .submit-btn:active { transform: translateY(0); }
        .submit-btn::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.1) 50%, transparent 100%);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        .back-btn {
          display: inline-flex; align-items: center; gap: 8px;
          color: #555; font-size: 0.8rem; letter-spacing: 0.15em;
          text-transform: uppercase; text-decoration: none;
          cursor: pointer; transition: color 0.3s ease;
          background: none; border: none; font-family: 'Georgia', serif;
        }
        .back-btn:hover { color: #fff; }
        .back-btn:hover .arrow { transform: translateX(-4px); }
        .arrow { transition: transform 0.3s ease; display: inline-block; }
        .label-float {
          position: absolute; top: 20px; left: 0;
          font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase;
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
          pointer-events: none;
        }
        .label-float.up { top: 0; font-size: 0.65rem; color: #555; }
        .label-float.up.focused-lbl { color: #888; }
        .label-float.up.valid-lbl { color: #22c55e88; }
        .label-float.up.error-lbl { color: #ef444488; }
        .label-float.down { color: #333; }
        .error-msg { font-size: 0.7rem; letter-spacing: 0.1em; color: #ef4444aa; margin-top: 6px; animation: slideDown 0.2s ease; }
        .valid-icon { color: #22c55e88; font-size: 0.8rem; }
        .char-count { font-size: 0.65rem; letter-spacing: 0.1em; color: #333; text-align: right; margin-top: 4px; transition: color 0.3s; }
        .char-count.warn { color: #f59e0b88; }
        textarea.input-field { resize: none; min-height: 100px; line-height: 1.6; }
      `}</style>

      <FloatingParticles />
      <GridLines />

      {/* Ambient orbs */}
      <GlowOrb className="w-[500px] h-[500px] bg-indigo-500/5 -top-32 -right-32" />
      <GlowOrb className="w-[400px] h-[400px] bg-violet-500/5 bottom-0 -left-32" />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Nav */}
        <nav className="px-8 py-8 header-anim">
          <button className="back-btn" onClick={onBack || (() => window.history.back())}>
            <span className="arrow">←</span>
            <span>Back</span>
          </button>
        </nav>

        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-lg">

            {/* Header */}
            <div className="mb-16">
              <div className="stagger-1 flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-white/20" />
                <span className="text-xs text-white/30 tracking-[0.3em] uppercase">Contact</span>
              </div>
              <h1 className="stagger-2 text-5xl md:text-6xl font-bold text-white leading-none mb-4"
                style={{ letterSpacing: "-0.02em" }}>
                Get in<br />
                <span style={{
                  background: "linear-gradient(135deg, #fff 0%, #666 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>Touch.</span>
              </h1>
              <p className="stagger-3 text-zinc-500 text-sm leading-relaxed max-w-xs" style={{ fontFamily: "sans-serif" }}>
                Have an idea? Let's build something extraordinary together.
              </p>
            </div>

            {/* Form */}
            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              {/* Name */}
              <div className="stagger-3 mb-2">
                <div className={`field-wrap ${focusedField === "name" ? "focused" : hasError("name") ? "error" : isValid("name") ? "valid" : "idle"}`}>
                  <div className={`label-float ${form.name || focusedField === "name" ? "up" : "down"} ${focusedField === "name" ? "focused-lbl" : hasError("name") ? "error-lbl" : isValid("name") ? "valid-lbl" : ""}`}>
                    Full Name
                  </div>
                  <div className="flex items-center gap-3 pt-4">
                    <input
                      className="input-field"
                      type="text" name="name" value={form.name}
                      placeholder={focusedField === "name" ? "John Doe" : ""}
                      onChange={handleChange} onBlur={handleBlur}
                      onFocus={() => setFocusedField("name")}
                      onBlurCapture={() => setFocusedField(null)}
                    />
                    {isValid("name") && <span className="valid-icon flex-shrink-0">✓</span>}
                  </div>
                  <div className="field-line" style={{ width: focusedField === "name" ? "100%" : "0%" }} />
                </div>
                {hasError("name") && <div className="error-msg">↑ {errors.name}</div>}
              </div>

              {/* Email */}
              <div className="stagger-4 mb-2 mt-6">
                <div className={`field-wrap ${focusedField === "email" ? "focused" : hasError("email") ? "error" : isValid("email") ? "valid" : "idle"}`}>
                  <div className={`label-float ${form.email || focusedField === "email" ? "up" : "down"} ${focusedField === "email" ? "focused-lbl" : hasError("email") ? "error-lbl" : isValid("email") ? "valid-lbl" : ""}`}>
                    Email Address
                  </div>
                  <div className="flex items-center gap-3 pt-4">
                    <input
                      className="input-field"
                      type="email" name="email" value={form.email}
                      placeholder={focusedField === "email" ? "john@example.com" : ""}
                      onChange={handleChange} onBlur={handleBlur}
                      onFocus={() => setFocusedField("email")}
                      onBlurCapture={() => setFocusedField(null)}
                    />
                    {isValid("email") && <span className="valid-icon flex-shrink-0">✓</span>}
                  </div>
                  <div className="field-line" style={{ width: focusedField === "email" ? "100%" : "0%" }} />
                </div>
                {hasError("email") && <div className="error-msg">↑ {errors.email}</div>}
              </div>

              {/* Phone */}
              <div className="stagger-4 mb-2 mt-6">
                <div className={`field-wrap ${focusedField === "phone" ? "focused" : hasError("phone") ? "error" : isValid("phone") ? "valid" : "idle"}`}>
                  <div className={`label-float ${form.phone || focusedField === "phone" ? "up" : "down"} ${focusedField === "phone" ? "focused-lbl" : hasError("phone") ? "error-lbl" : isValid("phone") ? "valid-lbl" : ""}`}>
                    Phone Number
                  </div>
                  <div className="flex items-center gap-3 pt-4">
                    <input
                      className="input-field"
                      type="tel" name="phone" value={form.phone}
                      placeholder={focusedField === "phone" ? "+1 (555) 000-0000" : ""}
                      onChange={handleChange} onBlur={handleBlur}
                      onFocus={() => setFocusedField("phone")}
                      onBlurCapture={() => setFocusedField(null)}
                    />
                    {isValid("phone") && <span className="valid-icon flex-shrink-0">✓</span>}
                  </div>
                  <div className="field-line" style={{ width: focusedField === "phone" ? "100%" : "0%" }} />
                </div>
                {hasError("phone") && <div className="error-msg">↑ {errors.phone}</div>}
              </div>

              {/* Description */}
              <div className="stagger-5 mb-2 mt-6">
                <div className={`field-wrap ${focusedField === "description" ? "focused" : hasError("description") ? "error" : isValid("description") ? "valid" : "idle"}`}>
                  <div className={`label-float ${form.description || focusedField === "description" ? "up" : "down"} ${focusedField === "description" ? "focused-lbl" : hasError("description") ? "error-lbl" : isValid("description") ? "valid-lbl" : ""}`}>
                    Message
                  </div>
                  <div className="pt-4">
                    <textarea
                      className="input-field"
                      name="description" value={form.description}
                      placeholder={focusedField === "description" ? "Tell us about your project..." : ""}
                      maxLength={500}
                      onChange={handleChange} onBlur={handleBlur}
                      onFocus={() => setFocusedField("description")}
                      onBlurCapture={() => setFocusedField(null)}
                      rows={3}
                    />
                  </div>
                  <div className="field-line" style={{ width: focusedField === "description" ? "100%" : "0%" }} />
                </div>
                <div className="flex justify-between items-center">
                  {hasError("description") ? <div className="error-msg">↑ {errors.description}</div> : <div />}
                  <div className={`char-count ${form.description.length > 400 ? "warn" : ""}`}>
                    {form.description.length}/500
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="stagger-6 mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <button type="submit" className="submit-btn" disabled={submitting}>
                  {submitting ? (
                    <span className="flex items-center gap-3">
                      <span style={{ display:"inline-block", width:14, height:14, border:"2px solid #000", borderTopColor:"#888", borderRadius:"50%", animation:"spin 0.7s linear infinite" }} />
                      Sending...
                    </span>
                  ) : (
                    "Send Message →"
                  )}
                </button>
                <span className="text-zinc-600 text-xs tracking-widest uppercase" style={{ fontFamily:"sans-serif" }}>
                  We reply within 24h
                </span>
              </div>
            </form>

            {/* Footer line */}
            <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between stagger-6">
              <span className="text-zinc-700 text-xs tracking-widest" style={{ fontFamily:"sans-serif" }}>© 2026</span>
              <div className="flex gap-1">
                {[0,1,2].map(i => (
                  <div key={i} className="w-1 h-1 rounded-full bg-white/20" style={{ animation:`pulse 2s ease infinite`, animationDelay:`${i*0.3}s` }} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}