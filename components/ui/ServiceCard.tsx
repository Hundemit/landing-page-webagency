import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { LinkButton } from "./LinkButton";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badges: string[];
  buttonText?: string;
  className?: string;
  variant?: "default";
}

const ServiceCard = ({ icon: Icon, title, description, badges, buttonText = "Mehr Infos", className, variant = "default" }: ServiceCardProps) => {
  const variantStyles = {
    default: {
      card: "bg-[#073d25]",
      badge: "bg-primary-foreground border-white/10",
    },
  };

  const currentVariant = variantStyles[variant];

  return (
    <Card className={cn("border-none rounded-2xl overflow-hidden shadow-none p-8", currentVariant.card, className)}>
      <CardContent className="p-0 flex flex-col h-full">
        <div className="mb-4">
          {/* <Icon className="size-12 text-white mb-4" /> */}
          <h4 className="text-4xl font-bold text-white mb-4">{title}</h4>
          <p className="text-white text-lg leading-relaxed">{description}</p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {badges.map((badge) => (
              <Badge key={badge} variant="outline" className={cn("px-4 py-2 text-sm rounded-full text-white transition-colors", currentVariant.badge)}>
                {badge}
              </Badge>
            ))}
          </div>
        </div>

        <LinkButton href="#" text={buttonText} variant="light" size="sm" className="mt-auto" />
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
