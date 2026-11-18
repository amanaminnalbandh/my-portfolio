"use client";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [githubRepos, setGithubRepos] = useState<any[]>([]);

  // Fetch repositories from GitHub automatically on load
  useEffect(() => {
    fetch('https://api.github.com/users/amanaminnalbandh/repos?sort=updated&per_page=6')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Filter out forks or profile readme repos if desired
          const filtered = data.filter((repo) => !repo.fork && repo.name !== 'amanaminnalbandh');
          setGithubRepos(filtered);
        }
      })
      .catch((err) => console.error("Error fetching GitHub repos:", err));
  }, []);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('http://localhost:5000/api/contact/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 4000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#070709] text-white selection:bg-red-600 selection:text-white font-sans overflow-x-hidden">
      
      {/* ================= AMBIENT LIGHTING & GRID ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 right-10 w-[700px] h-[500px] bg-red-600/20 blur-[150px] rounded-full" />
        <div className="absolute top-[40%] -left-40 w-[500px] h-[500px] bg-red-900/15 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-[600px] h-[400px] bg-red-800/10 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* ================= 1. FLOATING NAVBAR ================= */}
      <header className="sticky top-6 z-50 max-w-6xl mx-auto px-6">
        <nav className="flex items-center justify-between px-6 py-3.5 rounded-2xl bg-[#111114]/80 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-600 shadow-[0_0_10px_#dc2626]" />
            <span className="font-mono font-bold tracking-wider text-sm text-white">AMAN.DEV</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
            <a href="#work" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Milestones</a>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/amanaminnalbandh" 
              target="_blank" 
              rel="noreferrer"
              className="hidden sm:inline-flex px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-300 transition-all"
            >
              GitHub ↗
            </a>
            <a 
              href="#contact" 
              className="px-4 py-2 rounded-lg bg-white text-black font-semibold text-xs hover:bg-gray-200 transition-all"
            >
              Let&apos;s Connect
            </a>
          </div>
        </nav>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-24">
        
        {/* ================= 2. SPLIT ENTERPRISE HERO ================= */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 md:py-20 border-b border-white/10">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              SEEKING SOFTWARE, CLOUD &amp; DATA SCIENCE INTERNSHIPS
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08] mb-6">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-red-400">scalable systems</span> across web, cloud &amp; data.
            </h1>

            <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-4 font-normal">
              Hello, I&apos;m <strong className="text-white font-semibold">Amanul Amin Nalbandh</strong> (most people call me <strong className="text-white font-semibold">Aman</strong>). I am currently pursuing an MCA specializing in <span className="text-red-400">Cloud Computing and Data Science</span> at Bhagwan Mahavir University.
            </p>

            <p className="text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed mb-8">
              With a foundation in full-stack web and mobile development, I have built and deployed production applications with a practical command of application architecture, RESTful API design, and deployment workflows—now expanding across containerized cloud infrastructure and data processing pipelines.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#work" 
                className="px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl text-sm transition-all shadow-[0_0_25px_rgba(220,38,38,0.35)]"
              >
                Explore Production Work
              </a>
              <a 
                href="https://github.com/amanaminnalbandh" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 bg-[#141418] hover:bg-[#1c1c22] text-gray-200 border border-white/10 rounded-xl text-sm font-medium transition-all"
              >
                github.com/amanaminnalbandh ↗
              </a>
            </div>
          </div>

          {/* Right Column: Crimson Architectural Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-br from-red-950/50 via-[#121216] to-[#0a0a0d] border border-red-500/30 p-6 shadow-[0_0_60px_rgba(220,38,38,0.18)] overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#dc262615_1px,transparent_1px),linear-gradient(to_bottom,#dc262615_1px,transparent_1px)] bg-[size:2rem_2rem]" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <span className="font-mono text-[11px] text-red-400 uppercase tracking-wider">aman.architecture.ts</span>
                </div>

                <div className="space-y-3.5 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-black/50 border border-white/5 flex items-center justify-between">
                    <span className="text-gray-400">Data &amp; Analytics</span>
                    <span className="text-white font-semibold">Python • SQL • Pandas</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/50 border border-white/5 flex items-center justify-between">
                    <span className="text-gray-400">Cloud &amp; Systems</span>
                    <span className="text-red-400 font-semibold">Docker • Linux • Cloud</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/50 border border-white/5 flex items-center justify-between">
                    <span className="text-gray-400">App Engineering</span>
                    <span className="text-white font-semibold">MERN • Next.js • Flutter</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/50 border border-white/5 flex items-center justify-between">
                    <span className="text-gray-400">Direct Contact</span>
                    <a href="mailto:amanbuilds37@gmail.com" className="text-red-300 hover:underline">amanbuilds37@gmail.com</a>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-mono uppercase text-gray-400">Engineering Motto</p>
                    <p className="text-xs text-gray-200 mt-0.5 italic">&ldquo;Professionally driven by innovation; personally driven by humanity.&rdquo;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 3. MONOCHROME TECH STRIP ================= */}
        <section className="py-10 border-b border-white/5 flex flex-wrap items-center justify-between gap-6 opacity-60 hover:opacity-100 transition-opacity">
          {['Python', 'SQL', 'Pandas', 'Docker', 'Linux', 'React.js', 'Node.js', 'Flutter', 'MongoDB'].map((item) => (
            <span key={item} className="text-sm md:text-base font-mono font-semibold tracking-wider uppercase text-gray-400 hover:text-red-500 transition-colors cursor-default">
              {item}
            </span>
          ))}
        </section>

        {/* ================= 4. CORE CAPABILITIES BENTO GRID ================= */}
        <section id="capabilities" className="py-24 border-b border-white/10">
          <div className="mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-red-500 mb-2">Core Focus &amp; Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Full-Spectrum Engineering Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-7 group relative rounded-2xl bg-[#111115] border border-white/10 hover:border-red-500/40 p-7 overflow-hidden transition-all">
              <div className="absolute -right-10 -top-10 w-52 h-52 bg-red-600/15 blur-3xl rounded-full group-hover:bg-red-600/25 transition-all" />
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 mb-4 font-mono font-bold">01</div>
              <h3 className="text-xl font-bold mb-2">Data &amp; Analytics Pipelines</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                Transforming raw datasets into structured insights through programmatic data cleaning, exploratory data analysis (EDA), and relational querying.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px] text-red-300">
                <span className="px-2.5 py-1 rounded bg-red-500/10 border border-red-500/20">Python</span>
                <span className="px-2.5 py-1 rounded bg-red-500/10 border border-red-500/20">SQL</span>
                <span className="px-2.5 py-1 rounded bg-red-500/10 border border-red-500/20">Pandas &amp; NumPy</span>
              </div>
            </div>

            <div className="md:col-span-5 group relative rounded-2xl bg-[#111115] border border-white/10 hover:border-red-500/40 p-7 overflow-hidden transition-all">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 mb-4 font-mono font-bold">02</div>
              <h3 className="text-xl font-bold mb-2">Cloud &amp; Distributed Systems</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Designing reproducible, containerized deployments and scalable backend infrastructure built for cloud-native environments.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px] text-gray-300">
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Docker</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Linux</span>
              </div>
            </div>

            <div className="md:col-span-5 group relative rounded-2xl bg-[#111115] border border-white/10 hover:border-red-500/40 p-7 overflow-hidden transition-all">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 mb-4 font-mono font-bold">03</div>
              <h3 className="text-xl font-bold mb-2">Full-Stack &amp; Mobile Engineering</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                End-to-end web and cross-platform mobile applications with responsive UIs, state management, and secure RESTful APIs.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px] text-gray-300">
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Node.js</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Next.js</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Flutter</span>
              </div>
            </div>

            <div className="md:col-span-7 group relative rounded-2xl bg-gradient-to-r from-[#111115] via-[#161114] to-red-950/30 border border-white/10 hover:border-red-500/40 p-7 overflow-hidden transition-all">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 mb-4 font-mono font-bold">04</div>
              <h3 className="text-xl font-bold mb-2">Core CS &amp; Database Management</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                Grounded in algorithmic problem-solving, version-controlled Git workflows, and hybrid SQL/NoSQL database modeling.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px] text-red-300">
                <span className="px-2.5 py-1 rounded bg-red-500/10 border border-red-500/20">Data Structures &amp; Algorithms</span>
                <span className="px-2.5 py-1 rounded bg-red-500/10 border border-red-500/20">MongoDB &amp; SQL</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 5. FEATURED PRODUCTION PROJECTS (MANUAL + AUTO-SYNCED GITHUB) ================= */}
        <section id="work" className="py-24 border-b border-white/10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-red-500 mb-2">Production Portfolio</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Solutions &amp; Systems</h2>
            </div>
            <a 
              href="https://github.com/amanaminnalbandh" 
              target="_blank" 
              rel="noreferrer" 
              className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-gray-300 hover:text-white border border-white/10 px-4 py-2 rounded-lg"
            >
              View All on GitHub ↗
            </a>
          </div>

          {/* Core Featured Flagship Projects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-[#111115] border border-white/10 hover:border-red-500/40 p-6 flex flex-col justify-between transition-all">
              <div>
                <span className="px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-[11px] font-mono">MERN Stack • RBAC</span>
                <h3 className="text-xl font-bold mt-4 mb-2">Unity Health Systems</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Full-stack clinic management platform featuring role-based access control for administrators, doctors, and patients, appointment workflows, and medical records.
                </p>
              </div>
              <p className="text-xs font-mono text-gray-500 pt-4 border-t border-white/10">React • Node.js • Express • MongoDB</p>
            </div>

            <div className="rounded-2xl bg-[#111115] border border-white/10 hover:border-red-500/40 p-6 flex flex-col justify-between transition-all">
              <div>
                <span className="px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-[11px] font-mono">Python • Computer Vision</span>
                <h3 className="text-xl font-bold mt-4 mb-2">Smart Attendance System</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Automated attendance verification engine built with Python, Flask, and OpenCV featuring dynamic QR validation and real-time analytics dashboards.
                </p>
              </div>
              <p className="text-xs font-mono text-gray-500 pt-4 border-t border-white/10">Python • Flask • OpenCV • Analytics</p>
            </div>

            <div className="rounded-2xl bg-[#111115] border border-white/10 hover:border-red-500/40 p-6 flex flex-col justify-between transition-all">
              <div>
                <span className="px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-[11px] font-mono">Flutter • Mobile</span>
                <h3 className="text-xl font-bold mt-4 mb-2">Library Management System</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Cross-platform mobile application engineered with Flutter, Dart, and Firebase utilizing Provider state management for real-time catalog and lending workflows.
                </p>
              </div>
              <p className="text-xs font-mono text-gray-500 pt-4 border-t border-white/10">Flutter • Dart • Firebase • Provider</p>
            </div>
          </div>

          {/* LIVE AUTO-SYNCED GITHUB REPOSITORIES */}
          {githubRepos.length > 0 && (
            <div className="mt-16">
              <div className="mb-8">
                <p className="text-xs font-mono uppercase tracking-widest text-red-400 mb-1">Live Feed</p>
                <h3 className="text-2xl font-bold">Latest Repositories (Auto-Synced from GitHub)</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {githubRepos.map((repo) => (
                  <div
                    key={repo.id}
                    className="group rounded-2xl bg-[#111115] border border-white/10 hover:border-red-500/40 p-6 flex flex-col justify-between transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] font-mono">
                          {repo.language || 'Code'}
                        </span>
                        
                        {/* ==================================================== */}
                        {/* DYNAMIC LINKS: LIVE DEMO + GITHUB */}
                        {/* ==================================================== */}
                        <div className="flex items-center gap-3">
                          {/* Only show "Live Demo" if the GitHub repo has a Website URL set */}
                          {repo.homepage && (
                            <a 
                              href={repo.homepage} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="text-xs font-mono font-bold text-white hover:text-red-400 transition-colors"
                            >
                              Live Demo ↗
                            </a>
                          )}
                          
                          <a 
                            href={repo.html_url} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="text-xs font-mono text-gray-500 hover:text-red-400 transition-colors"
                          >
                            GitHub ↗
                          </a>
                        </div>
                        {/* ==================================================== */}
                        
                      </div>
                      <h4 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors mb-2">
                        {repo.name.replace(/-/g, ' ')}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {repo.description || 'Production repository hosted on GitHub.'}
                      </p>
                    </div>
                    <p className="text-[11px] font-mono text-gray-500 pt-3 border-t border-white/10">
                      Updated {new Date(repo.updated_at).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* ================= 6. PROFESSIONAL MILESTONES & EDUCATION ================= */}
        <section id="experience" className="py-24 border-b border-white/10">
          <div className="mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-red-500 mb-2">Trajectory</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Education &amp; Industry Experience</h2>
          </div>
          <div className="divide-y divide-white/10">
            <div className="py-6">
              <p className="text-xs font-mono text-red-400 uppercase mb-1">Bhagwan Mahavir University • Surat</p>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h4 className="text-lg font-bold text-white">Master of Computer Applications (MCA) — Cloud Computing &amp; Data Science</h4>
                <span className="text-xs font-mono text-gray-400">2026 – 2028</span>
              </div>
              <p className="text-sm text-gray-400">Focusing on scalable cloud infrastructure, distributed systems, data processing pipelines, and exploratory analytics.</p>
            </div>
            <div className="py-6">
              <p className="text-xs font-mono text-red-400 uppercase mb-1">PureSkill InfoSolutions • Surat</p>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h4 className="text-lg font-bold text-white">MERN Stack Developer Intern</h4>
                <span className="text-xs font-mono text-gray-400">Jan 2026 – Feb 2026</span>
              </div>
              <p className="text-sm text-gray-400">Completed a 120-hour on-site full-stack internship under mentor Yash Rajesh Asti, translating system requirements into production React and Node.js modules.</p>
            </div>
            <div className="py-6">
              <p className="text-xs font-mono text-red-400 uppercase mb-1">Undergraduate Foundation &amp; Certifications</p>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h4 className="text-lg font-bold text-white">Bachelor of Computer Applications (BCA) &amp; Harvard CS50P</h4>
                <span className="text-xs font-mono text-gray-400">Completed 2026</span>
              </div>
              <p className="text-sm text-gray-400">Core computer science fundamentals, relational database management, and Python programming via Harvard&apos;s CS50P.</p>
            </div>
          </div>
        </section>

        {/* ================= 7. CONTACT SECTION ================= */}
        <section id="contact" className="py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-mono uppercase tracking-widest text-red-500 mb-2">Direct Channel</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Let&apos;s Connect &amp; Build Impactful Systems.
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Actively seeking software engineering, cloud, or data science internships and collaborative engineering opportunities.
              </p>
              <div className="space-y-4 font-mono text-xs text-gray-300">
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Email: <a href="mailto:amanbuilds37@gmail.com" className="text-white hover:text-red-400 underline">amanbuilds37@gmail.com</a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  GitHub: <a href="https://github.com/amanaminnalbandh" target="_blank" rel="noreferrer" className="text-white hover:text-red-400 underline">github.com/amanaminnalbandh</a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Location: Surat, Gujarat, India
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#111115] border border-white/10 rounded-2xl p-8">
              <form onSubmit={handleContactSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-400 font-mono uppercase">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g., Jane Doe"
                      className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-400 font-mono uppercase">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      placeholder="e.g., name@company.com"
                      className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-400 font-mono uppercase">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell me about an internship opportunity, project, or just say hi!"
                    className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3.5 rounded-xl text-sm transition-all shadow-[0_0_25px_rgba(220,38,38,0.35)] cursor-pointer"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'success' && <p className="text-green-400 text-xs font-mono text-center">Message sent directly to Aman!</p>}
                {status === 'error' && <p className="text-red-400 text-xs font-mono text-center">Backend offline — email amanbuilds37@gmail.com directly.</p>}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 px-6 text-xs font-mono text-gray-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Amanul Amin Nalbandh (Aman). All rights reserved.</p>
          <p className="text-gray-400">Professionally driven by innovation; personally driven by humanity.</p>
        </div>
      </footer>
    </div>
  );
}