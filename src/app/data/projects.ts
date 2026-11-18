export interface Project {
  title: string;
  category: string;
  emoji: string;
  description: string;
  impact: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    title: "Unity Health Systems",
    category: "Full-Stack Web Architecture",
    emoji: "🏥",
    description: "Enterprise clinic management platform engineered with distinct role-based access control (RBAC) dashboards for Administrators, Doctors, and Patients.",
    impact: "Secured multi-role clinical routing & optimized database query response times.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    demoUrl: "https://unityhealth-demo.vercel.app",
    githubUrl: "https://github.com/your-username/unity-health"
  },
  {
    title: "Library Management System",
    category: "Cross-Platform Mobile App",
    emoji: "📚",
    description: "Production mobile system managing real-time book cataloging, circulation lifecycle, and patron record tracking with reactive state synchronization.",
    impact: "Engineered offline-first local caching paired with cloud sync.",
    tech: ["Flutter", "Dart", "Firebase", "Provider State Management"],
    demoUrl: "https://github.com/your-username/library-management",
    githubUrl: "https://github.com/your-username/library-management"
  },
  {
    title: "Smart Attendance System",
    category: "System Automation & Verification",
    emoji: "⚡",
    description: "Rapid authentication and engagement platform utilizing dynamic QR code verification to prevent attendance fraud and log records instantaneously.",
    impact: "Decreased verification bottlenecks by 80% during peak check-in windows.",
    tech: ["Python", "Flask", "QR Verification", "REST APIs"],
    demoUrl: "https://github.com/your-username/smart-attendance",
    githubUrl: "https://github.com/your-username/smart-attendance"
  }
];