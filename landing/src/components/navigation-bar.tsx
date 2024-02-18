import Link from "next/link";
import { NavItem } from "@/types";
import { cn } from "@/lib/utils";
import SignInButton from "./sign-in-button";

interface NavigationBarProps {
  items?: NavItem[];
}

export default function NavigationBar({ items }: NavigationBarProps) {
  return (
    <div className="fixed left-0 right-0 top-0 m-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <h1 className="text-foreground text-center text-3xl font-bold md:text-4xl">
          Directory Maker Pro
        </h1>
        <nav className="bg-background flex flex-row justify-center gap-6 px-8">
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
      <div className="">
        <SignInButton />
      </div>
    </div>
  );
}
