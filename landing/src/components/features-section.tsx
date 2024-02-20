import { Button } from "./ui/button";

interface FeaturesSectionProps {}

export default function FeaturesSection({}: FeaturesSectionProps) {
  return (
    <div className="border-foreground m-8 flex flex-col border p-8">
      <h1 className="text-foreground/70 w-full text-6xl font-medium">
        Features
      </h1>
    </div>
  );
}
