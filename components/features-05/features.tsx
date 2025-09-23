import { cn } from "@/lib/utils";
import { Goal, BookCheck, ChartPie, Users, FolderSync, Zap } from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";

const FeaturesPage = ({ className }: { className?: string }) => {
  const serviceData = [
    {
      icon: Goal,
      title: "Strategie & Konzept",
      description: "Wir entwickeln klare Strategien und durchdachte Konzepte, die als Fundament für Ihren digitalen Erfolg dienen.",
      badges: ["Strategie", "Konzeptentwicklung", "Digitale Transformation", "Strategie", "Konzeptentwicklung", "Digitale Transformation"],
    },
    {
      icon: BookCheck,
      title: "Webdesign",
      description: "Modernes, nutzerfreundliches Webdesign, das überzeugt und Ihre Marke professionell präsentiert.",
      badges: ["UX/UI Design", "Responsive Design", "Design System"],
    },
    {
      icon: ChartPie,
      title: "Online Shop",
      description: "Individuell gestaltete Onlineshops, die Verkäufe fördern und eine reibungslose Customer Journey bieten.",
      badges: ["E-Commerce", "Shop-Systeme", "Conversion Optimierung"],
    },
    {
      icon: Users,
      title: "Online Marketing",
      description: "Gezielte Marketingmaßnahmen, die Ihre Reichweite erhöhen und Ihre Zielgruppe direkt ansprechen.",
      badges: ["Content Marketing", "Social Media", "Kampagnenmanagement"],
    },
    {
      icon: FolderSync,
      title: "SEO",
      description: "Bessere Sichtbarkeit bei Google und Co. durch maßgeschneiderte SEO-Strategien.",
      badges: ["On-Page SEO", "Technisches SEO", "Rankingoptimierung"],
    },
    {
      icon: Zap,
      title: "Logo & Brand Design",
      description: "Ein starkes visuelles Erscheinungsbild, das Wiedererkennung schafft und Ihre Marke stärkt.",
      badges: ["Logo Design", "Brand Identity", "Visual Branding"],
    },
  ];

  return (
    <div className={cn("w-full bg-primary-foreground min-h-screen", className)}>
      <div className="max-w-7xl mx-auto my-24">
        <h2 className="text-5xl font-bold  text-pretty text-secondary ">We turn bold ideas into smart digital experiences.</h2>
        <div className="mt-24 w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          {serviceData.map((service) => (
            <ServiceCard key={service.title} icon={service.icon} title={service.title} description={service.description} badges={service.badges} variant="default" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
