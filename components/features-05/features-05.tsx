import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Lightbulb, Monitor, ShoppingCart, Megaphone, Search, Palette, Zap, FolderSync, Users, Goal, BookCheck, ChartPie } from "lucide-react";

const features = [
  {
    icon: Goal,
    title: "Strategie & Konzept",
    description: "Wir entwickeln klare Strategien und durchdachte Konzepte, die als Fundament für Ihren digitalen Erfolg dienen.",
  },
  {
    icon: BookCheck,
    title: "Webdesign",
    description: "Modernes, nutzerfreundliches Webdesign, das überzeugt und Ihre Marke professionell präsentiert.",
  },
  {
    icon: ChartPie,
    title: "Online Shop",
    description: "Individuell gestaltete Onlineshops, die Verkäufe fördern und eine reibungslose Customer Journey bieten.",
  },
  {
    icon: Users,
    title: "Online Marketing",
    description: "Gezielte Marketingmaßnahmen, die Ihre Reichweite erhöhen und Ihre Zielgruppe direkt ansprechen.",
  },
  {
    icon: FolderSync,
    title: "SEO – Suchmaschinenoptimierung",
    description: "Bessere Sichtbarkeit bei Google und Co. durch maßgeschneiderte SEO-Strategien.",
  },
  {
    icon: Zap,
    title: "Logo & Brand Design",
    description: "Ein starkes visuelles Erscheinungsbild, das Wiedererkennung schafft und Ihre Marke stärkt.",
  },
];

const Features05Page = () => {
  return (
    <div className="max-w-(--breakpoint-lg) w-full px-6 mx-auto">
      <h2 className="text-4xl md:text-[2.5rem] md:leading-[1.2] font-semibold tracking-[-0.03em] sm:max-w-xl text-pretty">Unsere Leistungen</h2>
      <p className="mt-2 text-muted-foreground text-lg sm:text-xl">
        Vom Konzept bis zur Markteinführung bieten wir umfassende digitale Lösungen, die Ihrem Unternehmen helfen, in der digitalen Landschaft erfolgreich zu sein.
      </p>
      <div className="mt-10 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {features.map((feature) => (
          <Card key={feature.title} className="flex flex-col border rounded-xl overflow-hidden shadow-none sm:pb-0">
            <CardHeader>
              <feature.icon />
              <h4 className="mt-3! text-xl font-semibold tracking-tight">{feature.title}</h4>
              <p className="mt-1 text-muted-foreground text-[17px]">{feature.description}</p>
            </CardHeader>
            <CardContent className="mt-auto px-0 pb-0 h-40 hidden sm:block">
              <div className="bg-gray-100 h-48 rotate-0 mx-2 rounded-xl" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features05Page;
