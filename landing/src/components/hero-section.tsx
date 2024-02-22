import { Button } from "./ui/button";
import Image from "next/image";
import HeroImage from "@/../public/hero-image.jpg";

interface HeroSectionProps {}

export default function HeroSection({}: HeroSectionProps) {
  return (
    <section className="flex flex-col items-center gap-2 p-4 text-center">
      <h1 className="text-4xl font-extrabold md:pt-8 md:text-6xl">
        Instantly create a directory website
      </h1>
      <p className="text-foreground/50 text-md max-w-3xl p-2 md:text-xl">
        A tool that gets rid of the frustrating parts fast, so you can engage
        and provide value to your target audience right away (before others do!)
        — see the short <span className="underline">demo</span>
      </p>
      <div className="flex flex-col justify-center gap-3">
        <Button variant="outline">Get started for free 🌱</Button>
        <Button>
          <p>
            Get <span className="font-bold text-orange-500">FREE PREMIUM</span>{" "}
            now! (148 slots left!) 🔥
          </p>
        </Button>
      </div>
      <Image
        className="m-4 aspect-video rounded-lg"
        src={HeroImage}
        alt="hero_image"
        width={"960"}
      />
    </section>
  );
}
