import { Button } from "./ui/button";

interface HeroSectionProps {}

export default function HeroSection({}: HeroSectionProps) {
  return (
    <div className="flex min-h-screen flex-col items-center text-center">
      <h1 className="pt-2 text-4xl font-bold md:pt-32 md:text-5xl">
        Instantly create a directory website
      </h1>
      <p className="text-foreground/50 text-md max-w-2xl p-2 md:text-xl">
        Directory Maker Pro quickly eliminates the frustrating parts so you can
        start on your important goals right away — see the short{" "}
        <span className="underline">demo</span>
      </p>
      <div className="mt-4 flex flex-col justify-center gap-3">
        <Button variant="outline">Create a website now 🌱</Button>
        <Button>GET FREE PREMIUM! (only 139 slots left) 🔥</Button>
      </div>
    </div>
  );
}
