# Prince Kumar Jha — Cinematic 3D Developer Portfolio

A world-class, production-ready, cinematic 3D developer portfolio engineered for **Prince Kumar Jha** (Computer Science Engineering Student, AI Developer & Full Stack Developer at The Oxford College of Engineering, 2023–2027).

---

## 🌟 Highlights & Features

- **Cinematic 3D Hero Section**: Interactive 3D holographic digital planet built with Three.js, featuring orbital glowing rings, quantum satellites, real-time mouse tracking, and energetic particle constellations.
- **Flagship Project 3D Showcase (POPULATION•IQ)**: Interactive 3D Earth demographic visualizer with real-time rotational controls, pin clusters, and honest architectural descriptions.
- **Complete Project Gallery**:
  - `POPULATION•IQ` — Interactive Global Population Explorer (Next.js, Three.js, R3F, Recharts)
  - `ScamShield AI` — Intelligent Phishing & Online Scam Detection (FastAPI, Scikit-learn, Random Forest, MongoDB)
  - `DocuMind AI` — Intelligent Document Processing & RAG Assistant (FastAPI, RAG, Embeddings, Groq, PostgreSQL)
  - `AgriVision AI` — Intelligent Agricultural Assistance Platform (React 19, FastAPI, Groq, Qwen, MongoDB)
  - `EduVerse AI` — AI-Powered Academic Assistant (Node.js, Express, LLMs, PDF-Parse)
- **Technical Skills Universe**: Dynamic 3D interactive constellation with sector filtering across Artificial Intelligence, Machine Learning, Programming, Backend, Frontend, Databases, Tools & Core CS Concepts.
- **Verified Certifications Gallery & PDF Modal**: Includes all 7 verified certificates from Cisco Networking Academy, Google Cloud, EY & Microsoft, Forage, and TCS with integrated PDF viewer modal and download links.
- **Academic Timeline**: Clean trajectory of B.E. Computer Science & Engineering at The Oxford College of Engineering (CGPA: 7.07/10) and New S Public School (CBSE Class XII: 67%).
- **Interactive Resume Section**: Instant PDF browser preview modal and 1-click download of the candidate's verified resume.
- **Direct Contact System**: 1-click email copy with celebratory particle effect, mailto trigger, and verified social profiles (GitHub, LinkedIn, LeetCode).

---

## 🛠️ Technology Stack

- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **3D Graphics & Shaders**: Three.js, WebGL
- **Styling**: Tailwind CSS with custom glassmorphism & cosmic glowing primitives
- **Icons**: Lucide React
- **Micro-Interactions**: Canvas-Confetti, CSS Keyframe animations

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized, minified bundle will be in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Key File Configurations & Customization Guide

### 1. How to Add or Update Certificates
- Place your certificate PDF or image files inside:
  ```
  public/certificates/
  ```
- Open `src/data/portfolioData.ts` and update or add an item to the `CERTIFICATIONS` array:
  ```typescript
  {
    id: "your-cert-id",
    title: "Certificate Name",
    issuer: "Issuing Organization",
    issueDate: "Month Year",
    filePath: "/certificates/your-cert-file.pdf",
    skillsLearned: ["Skill 1", "Skill 2"]
  }
  ```

### 2. How to Update Your Resume PDF
- Replace the file:
  ```
  public/Prince_Kumar_Jha_Resume.pdf
  ```
- The download buttons and modal viewers across the website automatically reference this file path.

### 3. How to Update Social Links, Email or Headline
- Open `src/data/portfolioData.ts` and modify `PERSONAL_INFO`:
  ```typescript
  export const PERSONAL_INFO = {
    name: "Prince Kumar Jha",
    email: "princekumarjhacse2027@gmail.com",
    github: "https://github.com/princekumarjha83-oss",
    linkedin: "https://www.linkedin.com/in/princekumar-jha-5a3007425/",
    leetcode: "https://leetcode.com/u/jha_kumar_123/",
    ...
  };
  ```

---

## 🚢 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of 3D portfolio"
   git remote add origin https://github.com/princekumarjha83-oss/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Vercel automatically detects Vite:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy**.

### Deploy to Netlify
1. Connect repository on [netlify.com](https://netlify.com).
2. Set Build command to `npm run build` and Publish directory to `dist`.
3. Click **Deploy Site**.

