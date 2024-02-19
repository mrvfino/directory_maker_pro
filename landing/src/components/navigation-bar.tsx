import Link from "next/link";
import { NavItem } from "@/types";
import { cn } from "@/lib/utils";
import SignInButton from "./sign-in-button";

interface NavigationBarProps {
  items?: NavItem[];
}

export default function NavigationBar({ items }: NavigationBarProps) {
  return (
    <div className="bg-background m-8 flex flex-col items-center gap-4 md:flex-row md:items-end md:justify-between">
      <div className="flex flex-col justify-center gap-4 md:flex-row md:items-end">
        <h1 className="text-foreground text-center text-3xl font-extrabold md:text-4xl">
          Directory Maker Pro
        </h1>
        <nav className="bg-background flex flex-row justify-center gap-6 px-8">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "hover:text-foreground/80 text-md flex items-center font-medium transition-colors",
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
