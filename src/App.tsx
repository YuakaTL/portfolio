import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  demoLink?: string;
  githubLink?: string;
  imageSrc: string;
  tags: string[];
  descriptionItems: string[];
}

const projects: Project[] = [
  {
    id: "coding-home",
    title: "程式家教平台",
    demoLink: "https://morrison.tw/web-layout-training-2022-w6/",
    imageSrc:
      "https://img.cake.me/cdn-cgi/image/fit=scale-down,format=auto,w=1920/https://images.cakeresume.com/BOY0b/yu-sheng-hong/5540b79b-4c92-453c-b82e-c1a1bcc526f5.png",
    tags: ["Tailwind CSS", "JavaScript", "Responsive Design", "ejs"],
    descriptionItems: [
      "程式家教平台，完成<a href='https://morrison.tw/web-layout-training-2022-w6/index.html' target='_blank' rel='noopener noreferrer' class='text-[#d96c60] font-medium border-b border-[#d96c60]/30 pb-0.5 hover:text-[#c85a4f] transition-colors'>首頁</a>、<a href='https://morrison.tw/web-layout-training-2022-w6/class.html' target='_blank' rel='noopener noreferrer' class='text-[#d96c60] font-medium border-b border-[#d96c60]/30 pb-0.5 hover:text-[#c85a4f] transition-colors'>課程列表</a>、<a href='https://morrison.tw/web-layout-training-2022-w6/class-details.html' target='_blank' rel='noopener noreferrer' class='text-[#d96c60] font-medium border-b border-[#d96c60]/30 pb-0.5 hover:text-[#c85a4f] transition-colors'>課程介紹</a>與<a href='https://morrison.tw/web-layout-training-2022-w6/checkout.html' target='_blank' rel='noopener noreferrer' class='text-[#d96c60] font-medium border-b border-[#d96c60]/30 pb-0.5 hover:text-[#c85a4f] transition-colors'>付款</a>等頁面",
      "自定義 Swiper.js 以實現課程輪播功能，並使用 ejs 模板引擎動態渲染課程內容",
      "使用 Tailwind CSS 完成響應式設計，確保在各種裝置上都有良好的使用體驗",
    ],
  },
  {
    id: "yuntech-net",
    title: "雲科網管網頁",
    demoLink: "https://yunnet.yuntech.edu.tw/",
    imageSrc:
      "https://img.cake.me/cdn-cgi/image/fit=scale-down,format=auto,w=1920/https://images.cakeresume.com/BOY0b/yu-sheng-hong/9ed3c147-79e0-4c82-86ab-a0c16dd7adfc.png",
    tags: ["Nuxt.js", "Vuetify", "Adobe XD", "i18n"],
    descriptionItems: [
      "以 Nuxt.js 串接 i18n，搭配 Vuetify 設計整個前後台，主要實作 Nuxt plugins 的 api inject 與 <a href='https://xd.adobe.com/view/5195414a-00a2-4300-494e-a2fc05b40b14-27a4/grid' target='_blank' rel='noopener noreferrer' class='text-[#d96c60] font-medium border-b border-[#d96c60]/30 pb-0.5 hover:text-[#c85a4f] transition-colors'>Adobe XD 頁面設計</a>",
      "透過重新設計前端邏輯，使宿舍生使用上更加符合使用者體驗",
      "部署至校內主機，專案完成後網管小組的<span class='text-[#d96c60] font-medium'>報修單量降低至少 15%</span>",
    ],
  },
  {
    id: "d'Perfume",
    title: "d'Perfume",
    demoLink:
      "https://morrison.tw/HexSchool-Frontend-Class/week7/productInfo.html",
    imageSrc:
      "https://img.cake.me/cdn-cgi/image/fit=scale-down,format=auto,w=1920/https://images.cakeresume.com/BOY0b/yu-sheng-hong/8e773f06-9c90-4cad-b7c8-0f0765e69d51.png",
    tags: ["Bootstrap", "CSS Customization"],
    descriptionItems: [
      "香水品牌網站，完成<a href='https://morrison.tw/HexSchool-Frontend-Class/week7/index.html' target='_blank' rel='noopener noreferrer' class='text-[#d96c60] font-medium border-b border-[#d96c60]/30 pb-0.5 hover:text-[#c85a4f] transition-colors'>首頁</a>、<a href='https://morrison.tw/HexSchool-Frontend-Class/week7/login.html' target='_blank' rel='noopener noreferrer' class='text-[#d96c60] font-medium border-b border-[#d96c60]/30 pb-0.5 hover:text-[#c85a4f] transition-colors'>登入</a>、<a href='https://morrison.tw/HexSchool-Frontend-Class/week7/profile.html' target='_blank' rel='noopener noreferrer' class='text-[#d96c60] font-medium border-b border-[#d96c60]/30 pb-0.5 hover:text-[#c85a4f] transition-colors'>會員中心</a>與<a href='https://morrison.tw/HexSchool-Frontend-Class/week7/products.html' target='_blank' rel='noopener noreferrer' class='text-[#d96c60] font-medium border-b border-[#d96c60]/30 pb-0.5 hover:text-[#c85a4f] transition-colors'>產品列表</a>、<a href='https://morrison.tw/HexSchool-Frontend-Class/week7/productInfo.html' target='_blank' rel='noopener noreferrer' class='text-[#d96c60] font-medium border-b border-[#d96c60]/30 pb-0.5 hover:text-[#c85a4f] transition-colors'>產品詳細</a>等頁面",
      "使用 Bootstrap ，並修改 Bootstrap 原始碼，客製化頁面",
    ],
  },
  {
    id: "sweetaste",
    title: "Sweetaste",
    demoLink:
      "https://morrison.tw/HexSchool-Frontend-Class/week5/products.html",
    imageSrc:
      "https://img.cake.me/cdn-cgi/image/fit=scale-down,format=auto,w=1920/https://images.cakeresume.com/BOY0b/yu-sheng-hong/ef76b668-3146-401f-9084-3b51cf89f0f2.png",
    tags: ["Bootstrap", "CSS Customization"],
    descriptionItems: ["參考了 Sass 7-1 架構，完成甜點列表頁面與訂單完成頁面"],
  },
  {
    id: "yuntime-assistant",
    title: "雲科兼任助理自動填寫平台",
    imageSrc:
      "https://img.cake.me/cdn-cgi/image/fit=scale-down,format=auto,w=820/https://images.cakeresume.com/BOY0b/yu-sheng-hong/684b22cd-d135-4dff-a8df-c0160a88fb7a.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Golang", "Python", "Heroku"],
    descriptionItems: [
      "使用 Golang 做為後端， BootstrapMade 的模板作為前端參考， Python 處理多筆助理時數的批次作業",
      "目的為改善原雲科兼任助理填寫的不便性，將每個月排班的<span class='text-[#d96c60] font-medium'>時數自動化處理</span>，免去每日填寫的煩惱",
      "部署至 Heroku ，上線至今，已有<span class='text-[#d96c60] font-medium'>百位以上的使用者。</span>",
    ],
  },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
    >
      {/* Image Section */}
      <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <div className="relative group overflow-hidden rounded-2xl shadow-sm border border-zinc-200/60 bg-zinc-100 aspect-[16/10]">
          <img
            src={project.imageSrc}
            alt={project.title}
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
        </div>
      </div>

      {/* Content Section */}
      <div
        className={`lg:col-span-6 flex flex-col justify-center ${isEven ? "lg:order-2" : "lg:order-1"}`}
      >
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium tracking-wide text-[#3a6351] bg-[#3a6351]/10 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
          {project.title}
        </h3>

        <ul className="space-y-4 mb-8">
          {project.descriptionItems.map((item, i) => (
            <li
              key={i}
              className="flex items-start text-zinc-600 leading-relaxed"
            >
              <ArrowRight className="w-5 h-5 mr-3 text-[#428b65] shrink-0 mt-0.5 opacity-70" />
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 mt-auto">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-[#3a6351] hover:bg-[#2c4c3e] rounded-full transition-colors shadow-sm hover:shadow"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-zinc-700 bg-white border border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 rounded-full transition-colors shadow-sm"
            >
              <Github className="w-4 h-4 mr-2" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-[#3a6351]/20 selection:text-[#3a6351]">
      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-900 tracking-tight mb-6">
            Crafting digital <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3a6351] to-[#428b65]">
              experiences.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-2xl">
            Hi, I'm a Full Stack Developer passionate about building accessible,
            user-friendly, and performant web applications. Here are some of my
            recent works.
          </p>
        </motion.div>
      </header>

      {/* Projects Section */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-sm font-bold tracking-widest text-zinc-400 uppercase">
            Selected Works
          </h2>
          <div className="h-px bg-zinc-200 flex-1 max-w-xs"></div>
        </div>

        <div className="space-y-32 md:space-y-40">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Personal Portfolio. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/yuakatl/"
              className="text-zinc-400 hover:text-[#3a6351] transition-colors"
            >
              LinkedIn
            </a>
            <a
              target="_blank"
              href="https://github.com/yuakatl"
              className="text-zinc-400 hover:text-[#3a6351] transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:its.morrison.hong@gmail.com"
              className="text-zinc-400 hover:text-[#3a6351] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
