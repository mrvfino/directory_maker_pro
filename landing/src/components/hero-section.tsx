import { Button } from "./ui/button";
import Image from "next/image";
import HeroImage from "@/../public/hero-image.jpg";

interface HeroSectionProps {}

export default function HeroSection({}: HeroSectionProps) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-2 p-4 text-center">
      <div className="flex flex-col items-center md:flex-row md:justify-around">
        <div className="flex flex-col justify-start">
          <h1 className="text-6xl font-extrabold">
            Create a Directory Website in Minutes
          </h1>
          <p className="text-md max-w-xl font-light md:text-2xl">
            Directory Maker Pro uses AI to turn your data into a website in just
            a few clicks. - <span className="underline">see quick demo</span>
          </p>
          <Button className="m-4 p-8 text-2xl">Get Started for Free</Button>
        </div>
        <Image
          className="m-8 hidden aspect-video rounded-lg border-2 p-2 md:block"
          src={HeroImage}
          alt="hero_image"
          width={"960"}
        />
      </div>
    </section>
  );
}
