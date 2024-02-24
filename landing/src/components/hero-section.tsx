import { Button } from "./ui/button";
import NavigationBar from "./navigation-bar";

interface HeroSectionProps {}

export default function HeroSection({}: HeroSectionProps) {
  return (
    <section className="flex min-h-screen flex-col gap-2 p-4 text-center md:items-center md:justify-center">
      <h1 className="text-6xl font-bold">
        Make a Directory Website in Minutes
      </h1>
      <p className="text-xl font-thin">
        Directory Maker Pro uses AI to turn your data into a directory website
        in just a few clicks. —{" "}
        <span className="underline">watch 10 second demo</span>
      </p>
      <Button className="mt-4 p-8  text-2xl">Get Started for Free</Button>
    </section>
  );
}

// <div className="">
//   <div className="md:flex md:flex-col md:items-start md:text-left">
//     <h1 className="text-6xl font-extrabold md:max-w-3xl">
//       Create a Directory Website in Minutes
//     </h1>
//     <p className="max-w-2xl text-xl font-light md:text-2xl">
//       A tool that analyzes your spreadsheet data and turns it into a
//       website in just a few clicks. -{" "}
//       <span className="underline">see quick demo</span>
//     </p>
//     <Button className="mt-4 p-8  text-2xl">Get Started for Free</Button>
//   </div>
//   {/* <Image
//     className="max-w-88 hidden aspect-video p-2 md:block"
//     src={HeroImage}
//     alt="hero_image"
//     width={"960"}
//   /> */}
// </div>
