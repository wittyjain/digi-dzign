import { icons } from "lucide-react";

//Service Data
export interface ServiceCategory {
  name: string;
  icon?: string;
}

export const servicesList: ServiceCategory[] = [
  { name: "Landing Page" },
  { name: "E-Commerce" },
  { name: "Settings" },
  { name: "Marketplace" },
  {
    name: "CRM, CMS",
  },
  {
    name: "Shopify Design & Dev",
    icon: "/icons/shopify.svg",
  },
  {
    name: "Wordpress Development",
    icon: "/icons/wordpress.svg",
  },
  {
    name: "Webflow Development",
    icon: "/icons/webflow.svg",
  },
  {
    name: "Flutter Development",
    icon: "/icons/flutter.svg",
  },
  {
    name: "React Development",
    icon: "/icons/react.svg",
  },
  {
    name: "Front-end Development",
    icon: "/icons/frontend.svg",
  },
  {
    name: "Back-end Development",
    icon: "/icons/backend.svg",
  },
  {
    name: "Custom Web Development",
    icon: "/icons/custom-web.svg",
  },
  {
    name: "Dashboard",
  },
  {
    name: "Blockchain / Decentralized Platforms",
  },
  {
    name: "SaaS",
  },
  {
    name: "Web 3.0 Design",
  },
  {
    name: "Product Design",
  },
];

export const appServices: ServiceCategory[] = [
  { name: "Wireframes" },
  { name: "App Content Hierarchy" },
  { name: "App Visual Design" },
  { name: "User flows and journey" },
  {
    name: "iOS",
    icon: "/icons/ios.svg",
  },
  {
    name: "Android",
    icon: "/icons/android.svg",
  },
  {
    name: "Windows",
    icon: "/icons/windows.svg",
  },
  { name: "Watch OS" },
  { name: "Mac OS" },
  {
    name: "TV OS",
    icon: "/icons/tv.svg",
  },
  {
    name: "Mobile App",
    icon: "/icons/mobile.svg",
  },
  { name: "Web App" },
  { name: "Custom App" },
  { name: "AppStore & Playstore screens" },
  { name: "Prototyping" },
  { name: "Onboarding" },
  { name: "Conversion Mechanism" },
  {
    name: "User Experience",
    icon: "/icons/user-experience.svg",
  },
  {
    name: "Gamification & Retention",
    icon: "/icons/gamification.svg",
  },
];

export const brandingServices: ServiceCategory[] = [
  {
    name: "Logo Design",
    icon: "/icons/logo-design.svg",
  },
  { name: "Visual identity" },
  { name: "Brand identity" },
  { name: "Voice and tone" },
  {
    name: "Brand strategy",
    icon: "/icons/brand-strategy.svg",
  },
  { name: "Brandbook" },
  { name: "Brand style guides" },
  {
    name: "Market research & positioning",
    icon: "/icons/market-research.svg",
  },
  { name: "Investor Deck" },
  { name: "Social Media Assets" },
  {
    name: "Video Production",
    icon: "/icons/video-production.svg",
  },
  { name: "Product Demo Videos" },
  { name: "Litepapers" },
  { name: "Pitch Deck" },
  { name: "Email Marketing" },
];

export const consultingServices: ServiceCategory[] = [
  {
    name: "AI-Powered Analytics",
    icon: "/icons/ai-analytics.svg",
  },
  {
    name: "Business Growth Strategy",
    icon: "/icons/growth-strategy.svg",
  },
  {
    name: "Blockchain & Smart Contracts",
    icon: "/icons/blockchain.svg",
  },
  {
    name: "Data-Driven Insights",
    icon: "/icons/data-insights.svg",
  },
  {
    name: "Workflow Automation Consulting",
    icon: "/icons/workflow-automation.svg",
  },
];

// Insights Data

export interface Resource {
  label: string;
  href: string;
  icon: string;
}

export const resourcesList: Resource[] = [
  { label: "ALL", href: "#", icon: "/icons/all-icon.svg" },
  { label: "BLOG", href: "#", icon: "/icons/blog-icon.svg" },
  { label: "WEBINARS", href: "#", icon: "/icons/webinar-icon.svg" },
  { label: "GUIDES", href: "#", icon: "/icons/guides-icon.svg" },
  { label: "RESEARCH", href: "#", icon: "/icons/research-icon.svg" },
];

export interface Topic {
  label: string;
  count: number;
  featured?: boolean;
}

export const topicsList: Topic[] = [
  { label: "SEE ALL", count: 100, featured: true },
  { label: "SEARCH", count: 1200 },
  { label: "ARTIFICIAL INTELLIGENCE (AI)", count: 145 },
  { label: "BLOGGING", count: 120 },
  { label: "CRM", count: 86 },
  { label: "CASE STUDIES", count: 50 },
  { label: "E-COMMERCE", count: 325 },
];

export interface FeaturedContent {
  category: string;
  title: string;
  author: string;
  readTime: string;
  imageUrl: string;
  icon: string;
}

export const featuredContent: FeaturedContent = {
  category: "BLOGGING",
  title:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  author: "Digidziga",
  readTime: "8m read",
  imageUrl: "/images/insights/feature-image.jpg",
  icon: "/images/insights/digi-arrow.svg",
};

export interface LatestContentSection {
  imageUrl: string;
  author: string;
  readTime: string;
  title: string;
  icon: string;
}

export const latestContentList: LatestContentSection[] = Array(6).fill({
  imageUrl: "/images/insights/content-image.jpg",
  author: "Digidziga",
  readTime: "8m read",
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  icon: "/images/insights/digi-arrow.svg",
});
