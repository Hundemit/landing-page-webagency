import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, BookCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const Features05Page = ({ className }: { className?: string }) => {
  const serviceData = {
    title: "Web Design and Development",
    description:
      "Your website is like your digital handshake it's the first thing people notice about you online. Our Web Design & Development services are all about making that handshake firm, friendly, and unforgettable.",
    badges: ["UX/UI Design", "Custom Website Design", "SEO Integration", "UX Optimization", "E-Commerce Development", "CMS- Content Management System"],
  };

  return (
    <div className={cn("w-full mx-auto", className)}>
      <h2 className="text-4xl md:text-[2.5rem] md:leading-[1.2] font-semibold tracking-[-0.03em] sm:max-w-xl text-pretty">Unsere Leistungen</h2>
      <p className="mt-2 text-muted-foreground text-lg sm:text-xl">
        Vom Konzept bis zur Markteinführung bieten wir umfassende digitale Lösungen, die Ihrem Unternehmen helfen, in der digitalen Landschaft erfolgreich zu sein.
      </p>

      <div className="mt-10 w-full max-w-4xl mx-auto">
        <Card className="bg-gradient-to-br from-green-600 to-green-700 border-none rounded-2xl overflow-hidden shadow-none p-8">
          <CardContent className="p-0">
            <div className="mb-6">
              <BookCheck className="size-12 text-white mb-4" />
              <h4 className="text-4xl font-bold text-white mb-4">{serviceData.title}</h4>
              <p className="text-white text-lg leading-relaxed">{serviceData.description}</p>
            </div>

            <div className="mb-8">
              <div className="flex flex-wrap gap-3 mb-3">
                {serviceData.badges.slice(0, 4).map((badge) => (
                  <Badge key={badge} variant="outline" className="px-4 py-2 rounded-xl text-white bg-green-800/50 border-green-500/30 hover:bg-green-800/70 transition-colors">
                    {badge}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {serviceData.badges.slice(4).map((badge) => (
                  <Badge key={badge} variant="outline" className="px-4 py-2 rounded-xl text-white bg-green-800/50 border-green-500/30 hover:bg-green-800/70 transition-colors">
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>

            <Button className="bg-white text-green-700 hover:bg-gray-100 rounded-xl px-6 py-3 font-medium flex items-center gap-2">
              More Details
              <ArrowUpRight className="size-5" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Features05Page;
