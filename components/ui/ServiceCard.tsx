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
  style?: React.CSSProperties;
}

const ServiceCard = ({ icon: Icon, title, description, badges, buttonText = "Mehr Infos", className, variant = "default", style }: ServiceCardProps) => {
  const variantStyles = {
    default: {
      card: "bg-[#073d25]",
      badge: "bg-primary-foreground border-white/10",
    },
  };

  const currentVariant = variantStyles[variant];

  return (
    <Card className={cn(" rounded-2xl border-green-900 overflow-hidden shadow-none sm:p-8 p-6  ", currentVariant.card, className)} style={style}>
      <CardContent className="p-0 flex flex-col h-full sm:gap-4 gap-2">
        <div className="mb-4">
          {/* <Icon className="size-12 text-white mb-4" /> */}
          <h4 className="text-3xl sm:text-4xl font-bold text-white sm:mb-4 mb-2">{title}</h4>
          <p className="text-white text-lg leading-relaxed">{description}</p>
        </div>

        <div className="">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {badges.map((badge) => (
              <Badge key={badge} variant="outline" className={cn(" text-sm rounded-full text-white transition-colors", currentVariant.badge)}>
                {badge}
              </Badge>
            ))}
          </div>
        </div>

        <LinkButton href="#" text={buttonText} variant="light" size="sm" className="mt-auto w-full" />
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
