import { BorderBeam } from "@/components/ui/border-beam";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FeatureEntity } from "@/shared/ui/types/features.entity";

interface FeatureCardProps {
  feature: FeatureEntity;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <Card className="max-w-96 max-h-72 p-4 relative">
      <BorderBeam colorFrom="#fbbf24" colorTo="#4f46e5" />
      <CardHeader className=" w-fit rounded-full flex items-center gap-4">
        {feature.icon !== undefined && <feature.icon className="size-6" />}
        <h1 className="text-sm font-semibold">{feature.name}</h1>
      </CardHeader>
      <CardContent className="px-5 py-3 text-justify text-sm">
        <p className="text-black/50 dark:text-white/30">
          {feature.description}
        </p>
      </CardContent>
    </Card>
  );
}
