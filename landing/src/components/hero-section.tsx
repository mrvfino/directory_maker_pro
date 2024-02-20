import { Button } from "./ui/button";

interface HeroSectionProps {}

export default function HeroSection({}: HeroSectionProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="pt-2 text-4xl font-bold md:pt-32 md:text-5xl">
        Instantly create a directory website
      </h1>
      <p className="text-foreground/50 text-md max-w-2xl p-2 md:text-xl">
        Directory Maker Pro quickly gets the hard parts done, so you can launch
        your idea right away (before others do!) — see the short{" "}
        <span className="underline">demo</span>
      </p>
      <div className="mt-4 flex flex-col justify-center gap-3">
        <Button variant="outline">Get started for free 🌱</Button>
        <Button>
          <p>
            Get <span className="font-bold text-orange-500">FREE PREMIUM</span>{" "}
            now! (148 slots left!) 🔥
          </p>
        </Button>
      </div>
    </div>
  );
}
