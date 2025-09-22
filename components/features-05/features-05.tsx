import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Zap, FolderSync, Users, Goal, BookCheck, ChartPie } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

const features = [
  {
    icon: Goal,
    title: "Strategie & Konzept",
    description: "Wir entwickeln klare Strategien und durchdachte Konzepte, die als Fundament für Ihren digitalen Erfolg dienen.",
    badges: ["Strategie", "Konzeptentwicklung", "Digitale Transformation"],
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

const Features05Page = ({ className }: { className?: string }) => {
  return (
    <div className={cn(" w-full mx-auto", className)}>
      <h2 className="text-4xl md:text-[2.5rem] md:leading-[1.2] font-semibold tracking-[-0.03em] sm:max-w-xl text-pretty">Unsere Leistungen</h2>
      <p className="mt-2 text-muted-foreground text-lg sm:text-xl">
        Vom Konzept bis zur Markteinführung bieten wir umfassende digitale Lösungen, die Ihrem Unternehmen helfen, in der digitalen Landschaft erfolgreich zu sein.
      </p>
      <div className="mt-10 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {features.map((feature) => (
          <Card key={feature.title} className="flex flex-col border-none border rounded-xl overflow-hidden shadow-none  min-h-96">
            <CardHeader>
              <feature.icon className="size-12" />
            </CardHeader>
            <CardContent className="mt-auto">
              <h4 className=" text-3xl font-semibold tracking-tight mb-2">{feature.title}</h4>
              <p className="mt-1 text-muted-foreground text-[17px]">{feature.description}</p>
              <div className="flex flex-wrap mt-2 gap-2">
                {feature.badges.map((badge) => (
                  <Badge variant="outline" className="px-4 py-2 rounded-2xl text-md bg-background border-white/30  shadow-none " key={badge}>
                    {badge}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features05Page;
