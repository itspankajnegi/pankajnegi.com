<div align="center">

  # ⚡ Pankaj Negi — Senior Software Engineer
  ### React Native (iOS & Android) · Frontend Architecture (React.js) · Real-Time Systems

  <p align="center">
    <a href="https://pankajnegi.com"><img src="https://img.shields.io/badge/Live_Portfolio-pankajnegi.com-00f2fe?style=for-the-badge&logo=google-chrome&logoColor=black" alt="Live Portfolio" /></a>
    <a href="https://www.linkedin.com/in/itspankajnegi"><img src="https://img.shields.io/badge/LinkedIn-itspankajnegi-0077b5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
    <a href="mailto:itspankajnegi@gmail.com"><img src="https://img.shields.io/badge/Email-itspankajnegi@gmail.com-ea4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
    <img src="https://img.shields.io/badge/Vite_5-646CFF?style=flat-square&logo=vite&logoColor=white" />
    <img src="https://img.shields.io/badge/Socket.io-010101?style=flat-square&logo=socket.io&logoColor=white" />
    <img src="https://img.shields.io/badge/AWS_Chime_SDK-FF9900?style=flat-square&logo=amazon-aws&logoColor=white" />
    <img src="https://img.shields.io/badge/Vercel_Edge-000000?style=flat-square&logo=vercel&logoColor=white" />
  </p>

  <p align="center">
    A high-performance, cyber-themed interactive engineering portfolio showcasing <b>4+ years</b> of production mobile and web application architecture, featuring real-time simulator sandboxes, live architecture diagrams, and synthesis audio.
  </p>

</div>

---

## 🌟 Engineering Highlights & Metrics

- 📱 **1.5M+ Production Downloads:** Core contributor & mobile architect for cross-platform app suites powering high-concurrency user bases across iOS and Android.
- ⚡ **Real-Time Audio/Video Communication:** Engineered voice sessions and live video calling using **Amazon Chime SDK**, with ultra-low latency (`<50ms`) and resilient reconnection workflows.
- 💬 **Live Chat & Messaging Engines:** Built persistent socket-based messaging pipelines utilizing **Socket.IO**, binary audio voice notes, and real-time typing signals.
- 🛡️ **99.8% Crash-Free Rate:** Maintained high production stability via rigorous error boundaries, Sentry telemetry, native bridge exception handling, and automated CI/CD deployments.
- 🚀 **App Store & Play Store Releases:** Managed end-to-end production build pipelines with Fastlane, CodePush, TestFlight, and Google Play Console zero-downtime releases.

---

## 💻 Tech Stack & Architecture

### **Core Frontend & Mobile Stack**
| Category | Technologies |
| :--- | :--- |
| **Mobile Engineering** | React Native, React Navigation, iOS (Objective-C/Swift bridges), Android (Java/Kotlin bridges), Permissions, Biometrics (FaceID/Fingerprint) |
| **Web & UI Architecture** | React.js (React 19), JavaScript (ES6+), Modern Vanilla CSS3, Glassmorphism, Responsive Grid Systems |
| **State & Networking** | Redux, Redux Toolkit, MobX, Context API, REST APIs, Axios Interceptors, Asynchronous Thunks |
| **Real-Time & Media** | Amazon Chime SDK (WebRTC Audio/Video), Socket.IO, Web Audio API, Voice Notes Audio Recording |
| **Integrations & SDKs** | Razorpay Payment Gateway, Firebase Cloud Messaging (FCM), Apple Push Notification service (APNs), AppsFlyer, Mixpanel, Sentry |
| **Build & Tooling** | Vite 5, Git, GitHub Actions, Vercel Edge Network |

---

## 🚀 Key Interactive Portfolio Features

1. **📱 Interactive Mobile App Simulators:**
   - Test-drive interactive simulations of real production applications (**AstroKarma**, **SVCL Mobile Suite**, and **Finncub Fintech**).
   - Experience active screen navigation, simulated voice call sessions, native notification alerts, and biometric security locks right inside an interactive phone frame.

2. **⚡ Dynamic Role Lens Switcher:**
   - Visitors and recruiters can toggle the portfolio viewpoint between:
     - **Mobile Focus:** Emphasizes React Native architecture, native bridges, and app store metrics.
     - **Frontend Focus:** Highlights modern React.js web architecture, component design systems, and micro-frontend performance.
     - **Cross-Platform Lead:** Comprehensive full-stack mobile + web perspective.

3. **🔊 Cybernetic Audio Feedback (Web Audio API):**
   - Built-in lightweight procedural audio synthesizer creating subtle futuristic clicks and confirmation chimes using pure browser audio oscillator nodes (no heavy external audio files).

4. **📄 Verified Curriculum Vitae Dialog:**
   - In-app printable and exportable CV modal with one-click email copying, categorized competency grids, and career milestones.

5. **📬 Terminal Message Dispatch:**
   - Cyberpunk interactive contact dispatch console with live delivery status responses, integrated with Web3Forms API and confetti particle celebrations.

---

## 🛠️ Local Development & Quick Start

### Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

### 1. Clone the repository
```bash
git clone https://github.com/itspankajnegi/pankajnegi.com.git
cd pankajnegi.com
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory:
```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```
*(A `.env.example` file is included in the project for reference).*

### 4. Start the development server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser to view the portfolio.

### 5. Build for production
```bash
npm run build
```
The optimized production bundle will be created inside the `dist/` directory.

---

## 📂 Project Directory Structure

```text
my-portfolio/
├── public/
│   ├── pn_logo.jpg               # Official brand avatar
│   └── screenshots/              # Production app simulator assets (AstroKarma, SVCL, Finncub)
├── src/
│   ├── components/
│   │   ├── ArchitectureVisualizer.jsx   # Microservice & real-time connection maps
│   │   ├── BackgroundCanvas.jsx         # Ambient cybernetic particle canvas
│   │   ├── BrandLogo.jsx                # Interactive glowing monogram logo
│   │   ├── ContactSection.jsx           # Terminal message dispatch & direct contact
│   │   ├── EngineeringHighlights.jsx    # Real-world impact & engineering milestones
│   │   ├── ExperienceTimeline.jsx       # Career trajectory & role responsibilities
│   │   ├── Footer.jsx                   # Bottom navigation & scroll-to-top
│   │   ├── Hero.jsx                     # Dynamic hero section with live metrics
│   │   ├── InteractiveAppSimulator.jsx  # Multi-app interactive phone sandbox
│   │   ├── Navbar.jsx                   # Sticky glassmorphic nav & role switcher
│   │   ├── ResumeModal.jsx              # Verified printable CV document modal
│   │   ├── ScrollProgressBar.jsx        # Cyber progress telemetry indicator
│   │   └── TechnicalSkills.jsx          # Interactive skill matrix & proficiency tags
│   ├── utils/
│   │   └── soundEffects.js              # Web Audio API synthetic sounds
│   ├── App.jsx                          # Main application layout & state
│   ├── index.css                        # Cyberpunk design system & CSS variables
│   └── main.jsx                         # React 19 root bootstrap
├── .env.example                         # Environment configuration template
├── .gitignore                           # Protected file rules
├── index.html                           # SEO meta tags & viewport config
├── package.json                         # Project dependencies & scripts
└── vite.config.js                       # Vite bundler configuration
```

---

## 🌐 Deployment

This application is deployed and hosted on the **Vercel Edge Network** with continuous integration from GitHub:

* **Production URL:** [https://pankajnegi.com](https://pankajnegi.com)
* **Automatic Deployments:** Every push to `main` triggers an automatic build and zero-downtime deployment.

---

## 📬 Contact & Connect

- **Name:** Pankaj Negi
- **Role:** Senior React Native Developer & Frontend Engineer
- **Official Email:** [itspankajnegi@gmail.com](mailto:itspankajnegi@gmail.com)
- **LinkedIn:** [linkedin.com/in/itspankajnegi](https://www.linkedin.com/in/itspankajnegi)
- **Website:** [pankajnegi.com](https://pankajnegi.com)

---

<div align="center">
  <sub>Designed & engineered with modern React.js, Vite, and custom cyber aesthetics by <b>Pankaj Negi</b>.</sub>
</div>
