import { Button } from "./ui/button";

interface FeaturesSectionProps {}

export default function FeaturesSection({}: FeaturesSectionProps) {
  return (
    <div className="border-foreground m-8 flex flex-col border-2 p-8">
      <h1 className="w-full bg-red-500 text-5xl">Features</h1>
    </div>
  );
}
