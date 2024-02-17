import Link from "next/link";
import { NavItem } from "@/types";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface NavigationBarProps {
  items?: NavItem[];
}

export default function NavigationBar({ items }: NavigationBarProps) {
  return (
    <div className="fixed left-0 right-0 top-0 m-8 flex flex-col gap-4 md:flex-row md:justify-between">
      <div className="flex flex-col gap-4 md:flex-row md:gap-12">
        <h1 className="text-foreground text-center text-3xl font-bold md:text-4xl">
          Directory Maker Pro
        </h1>
        <nav className="bg-background flex flex-row justify-center gap-6">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "hover:text-foreground/80 text-md flex items-center font-medium transition-colors sm:text-sm md:text-xl",
                item.disabled ? "text-foreground/60" : "text-foreground",
                item.disabled && "cursor-not-allowed opacity-80",
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
      <Button className="hidden md:block" size="lg">
        Try Now
      </Button>
    </div>
  );
}
