import { Button } from "./ui/button";
import HeroImage from "@/../public/hero-image.jpg";
import Image from "next/image";
import HeroArt from "./hero-art";

interface HeroSectionProps {}

export default function HeroSection({}: HeroSectionProps) {
  return (
    <section className="flex min-h-screen flex-col gap-8 p-4 md:mx-20 md:flex-row">
      <div className="flex flex-col gap-2 md:w-[50%] md:justify-center">
        <h1 className="text-6xl font-extrabold">
          Make a Directory Website in Minutes
        </h1>
        <p className="text-xl font-thin">
          Directory Maker Pro uses AI to turn your data into a directory website
          in just a few clicks. —{" "}
          <span className="underline underline-offset-4">
            watch 10 second demo
          </span>
        </p>
        <Button className="mt-6 p-8 text-2xl">Get Started for Free</Button>
      </div>
      <div className="border-border flex flex-col gap-2 border-2 md:w-[50%] md:justify-center">
        <div className="h-[70%] min-h-96 bg-red-500">hello</div>
      </div>
    </section>
  );
}
