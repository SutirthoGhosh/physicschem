import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import {
  AlertCircle,
  Atom,
  Award,
  BookOpen,
  Calculator,
  CheckCircle,
  ClipboardCheck,
  FlaskConical,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Star,
  Target,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// ─── Subtle SVG formula pattern for hero background ───────────────────────────

function FormulaPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none select-none"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="formulas"
          x="0"
          y="0"
          width="280"
          height="200"
          patternUnits="userSpaceOnUse"
        >
          <text x="10" y="40" fontSize="18" fill="white" fontFamily="serif">
            E = mc²
          </text>
          <text x="150" y="30" fontSize="14" fill="white" fontFamily="serif">
            H₂O
          </text>
          <text x="60" y="90" fontSize="16" fill="white" fontFamily="serif">
            ∫f(x)dx
          </text>
          <text x="180" y="80" fontSize="14" fill="white" fontFamily="serif">
            λ = h/p
          </text>
          <text x="10" y="150" fontSize="14" fill="white" fontFamily="serif">
            NaOH
          </text>
          <text x="130" y="155" fontSize="16" fill="white" fontFamily="serif">
            F = ma
          </text>
          <text x="220" y="140" fontSize="14" fill="white" fontFamily="serif">
            ∑
          </text>
          <circle
            cx="90"
            cy="120"
            r="12"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
          <circle cx="90" cy="120" r="5" fill="white" opacity="0.5" />
          <circle
            cx="108"
            cy="112"
            r="3"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
          <circle
            cx="72"
            cy="128"
            r="3"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#formulas)" />
    </svg>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Methodology", id: "methodology" },
  { label: "Results", id: "results" },
  { label: "Contact", id: "contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2 font-bold text-xl text-navy-deep hover:opacity-80 transition-opacity"
            data-ocid="nav.link"
          >
            <Atom className="h-6 w-6 text-orange-accent" />
            <span>Your Institute</span>
          </button>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-medium text-muted-foreground hover:text-navy-deep transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              onClick={() => scrollTo("contact")}
              className="hidden md:flex rounded-full bg-orange-accent hover:bg-orange-hover text-white font-semibold text-sm px-5"
              data-ocid="nav.primary_button"
            >
              Enroll Now
            </Button>
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              data-ocid="nav.toggle"
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden border-t border-border py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => {
                  scrollTo(link.id);
                  setMenuOpen(false);
                }}
                className="text-sm font-medium text-left px-2 py-2 rounded hover:bg-muted text-foreground"
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => {
                scrollTo("contact");
                setMenuOpen(false);
              }}
              className="mt-2 rounded-full bg-orange-accent hover:bg-orange-hover text-white font-semibold"
              data-ocid="nav.primary_button"
            >
              Enroll Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0F3C5C 0%, #123F63 60%, #1A4E78 100%)",
      }}
    >
      <FormulaPattern />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-24 md:py-36 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block bg-white/10 text-white/90 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-white/20">
            Physics &amp; Chemistry · Classes 9–12
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Master Concepts.
            <br />
            <span style={{ color: "#F2A23A" }}>Score Higher.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Expert Physics &amp; Chemistry tuition for Classes 9–12. Board exam
            preparation with a concept-first approach — because strong
            fundamentals build great scores.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => scrollTo("contact")}
              className="rounded-full px-8 py-3 text-base font-bold bg-orange-accent hover:bg-orange-hover text-white shadow-lg transition-transform hover:scale-105"
              data-ocid="hero.primary_button"
            >
              Enroll Now
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollTo("contact")}
              className="rounded-full px-8 py-3 text-base font-semibold border-2 border-white text-white bg-transparent hover:bg-white hover:text-navy-deep transition-all"
              data-ocid="hero.secondary_button"
            >
              Book a Demo Class
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section wrapper ──────────────────────────────────────────────────────────

function SectionTitle({
  children,
  sub,
}: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-2xl md:text-3xl font-bold tracking-wide uppercase text-foreground mb-3">
        {children}
      </h2>
      {sub && (
        <p className="text-muted-foreground max-w-xl mx-auto text-base">
          {sub}
        </p>
      )}
      <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-orange-accent" />
    </div>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

const ABOUT_FEATURES = [
  {
    icon: BookOpen,
    title: "Concept-Based Teaching",
    desc: "Every topic is taught from first principles. We ensure you understand the 'why' before the 'how', building a strong conceptual foundation.",
  },
  {
    icon: Target,
    title: "Step-by-Step Explanation",
    desc: "Complex problems are broken down into clear, logical steps. No shortcuts — every derivation and solution is fully explained.",
  },
  {
    icon: MessageCircle,
    title: "Doubt-Solving Sessions",
    desc: "Dedicated doubt-clearing sessions ensure no question goes unanswered. Students are encouraged to ask freely without hesitation.",
  },
  {
    icon: TrendingUp,
    title: "Regular Tests & Tracking",
    desc: "Weekly tests followed by detailed performance analysis track your progress and identify areas needing more focus.",
  },
];

function About() {
  return (
    <section id="about" className="bg-background py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle sub="A teaching philosophy built on deep understanding and personal attention.">
          About the Institute
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {ABOUT_FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4 p-6 bg-card rounded-lg shadow-card border border-border"
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "#EAF1F8" }}
              >
                <f.icon className="h-5 w-5" style={{ color: "#1F5B84" }} />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-6 py-3 shadow-xs">
            <Users className="h-4 w-4" style={{ color: "#F2A23A" }} />
            <span className="text-sm font-semibold text-foreground">
              Small Batch Sizes — Maximum Attention Per Student
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services ────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: BookOpen,
    title: "Tuition Classes (9–12)",
    desc: "Structured curriculum-aligned classes for CBSE, ICSE, and State Board students covering the full Physics & Chemistry syllabus.",
  },
  {
    icon: Award,
    title: "Board Exam Preparation",
    desc: "Focused revision, past-paper practice, and exam strategies to maximize your board exam score with confidence.",
  },
  {
    icon: FlaskConical,
    title: "Physics Lab Concept Support",
    desc: "Deep understanding of practical concepts, lab procedures, and the theoretical basis behind every experiment.",
  },
  {
    icon: Calculator,
    title: "Numerical Problem Solving",
    desc: "Systematic approaches to solving complex numericals — from understanding the formula to arriving at the correct answer.",
  },
  {
    icon: ClipboardCheck,
    title: "Weekly Mock Tests",
    desc: "Regular timed tests simulating exam conditions to build speed, accuracy, and confidence under pressure.",
  },
  {
    icon: MessageCircle,
    title: "One-to-One Doubt Sessions",
    desc: "Personalised sessions where individual doubts are addressed with focused explanations and additional practice.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-card py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle sub="Comprehensive academic support designed to build mastery at every level.">
          Our Services
        </SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 bg-card border border-border rounded-lg shadow-card hover:shadow-card-hover transition-shadow group"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors"
                style={{ background: "#EAF1F8" }}
              >
                <s.icon className="h-6 w-6" style={{ color: "#1F5B84" }} />
              </div>
              <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Methodology ─────────────────────────────────────────────────────────────

const STEPS = [
  {
    n: 1,
    title: "Concept Explanation",
    desc: "Each topic begins with clear, first-principles explanations. No rote learning — only genuine understanding.",
  },
  {
    n: 2,
    title: "Application Practice",
    desc: "Concepts are immediately applied to a variety of problems, reinforcing understanding through structured practice.",
  },
  {
    n: 3,
    title: "Numerical Mastery",
    desc: "Intensive numerical practice with step-by-step solutions builds speed, accuracy, and problem-solving confidence.",
  },
  {
    n: 4,
    title: "Weekly Testing",
    desc: "Regular assessments in exam format identify knowledge gaps and measure progress objectively.",
  },
  {
    n: 5,
    title: "Performance Analysis",
    desc: "Detailed review of test results with personalised feedback and a targeted improvement plan for each student.",
  },
];

function Methodology() {
  return (
    <section id="methodology" className="bg-background py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle sub="A proven 5-step framework that transforms understanding into examination excellence.">
          Teaching Methodology
        </SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative p-5 bg-card border border-border rounded-lg shadow-card"
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm mb-4"
                style={{ background: "#1F5B84" }}
              >
                {step.n}
              </div>
              <h3 className="font-bold text-foreground text-sm mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Results & Testimonials ──────────────────────────────────────────────────

const STATS = [
  { icon: Award, value: "95%", label: "Board Pass Rate" },
  { icon: Users, value: "200+", label: "Students Coached" },
  { icon: TrendingUp, value: "Avg 25%", label: "Score Improvement" },
];

const TESTIMONIALS = [
  {
    quote:
      "My Physics score jumped from 58% to 87% after just 6 months. The concept-first approach really works.",
    name: "Rahul M.",
    cls: "Class 12",
    initials: "RM",
  },
  {
    quote:
      "I finally understood thermodynamics properly. The doubt sessions are invaluable — always patient and thorough.",
    name: "Priya S.",
    cls: "Class 11",
    initials: "PS",
  },
  {
    quote:
      "Numericals used to scare me. Now they're my strongest area. The systematic approach makes all the difference.",
    name: "Arjun K.",
    cls: "Class 10",
    initials: "AK",
  },
];

function Results() {
  return (
    <section id="results" className="bg-card py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle sub="Real results from real students — tracked, measured, and improved.">
          Results &amp; Testimonials
        </SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-8 rounded-lg border border-border shadow-card"
              style={{
                background: "linear-gradient(135deg, #0F3C5C 0%, #1A4E78 100%)",
              }}
            >
              <stat.icon
                className="h-7 w-7 mx-auto mb-3"
                style={{ color: "#F2A23A" }}
              />
              <div className="text-3xl font-extrabold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-white/70 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 bg-background border border-border rounded-lg shadow-card"
              data-ocid={`results.item.${i + 1}`}
            >
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="h-4 w-4 fill-current"
                    style={{ color: "#F5C14B" }}
                  />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-5 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ background: "#1F5B84" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.cls}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="bg-background py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle sub="Reach us directly by phone or visit us at our location.">
          Contact Us
        </SectionTitle>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Phone */}
          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-xl shadow-card px-8 py-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "#EAF1F8" }}
            >
              <Phone className="h-5 w-5" style={{ color: "#1F5B84" }} />
            </div>
            <div>
              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">
                Call Us
              </div>
              <a
                href="tel:+919876543210"
                className="text-lg font-bold text-foreground hover:text-navy-mid transition-colors"
              >
                +91 98765 43210
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-xl shadow-card px-8 py-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "#EAF1F8" }}
            >
              <MapPin className="h-5 w-5" style={{ color: "#1F5B84" }} />
            </div>
            <div>
              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">
                Address
              </div>
              <p className="text-base font-semibold text-foreground leading-snug">
                Near Lal Kuthi, Barrackpore
                <br />
                <span className="text-sm font-normal text-muted-foreground">
                  North 24 Parganas, West Bengal
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-bold text-lg text-navy-deep">
            <Atom className="h-5 w-5 text-orange-accent" />
            Your Institute
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="mt-6 pt-5 border-t border-border flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {year} Your Institute. All rights reserved.</span>
          <span>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen">
      <Toaster />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Methodology />
        <Results />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
