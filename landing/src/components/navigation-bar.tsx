import Link from "next/link";
import { NavItem } from "@/types";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface NavigationBarProps {
  items?: NavItem[];
}

export default function NavigationBar({ items }: NavigationBarProps) {
  return (
    <div className="fixed left-0 right-0 top-0 m-4 flex flex-col gap-4">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-foreground text-blac text-center text-xl font-bold">
          Directory Maker Pro
        </h1>
        <Button>Try Now!</Button>
      </div>
      <nav className="bg-background flex flex-row justify-center gap-6">
        {items?.map((item, index) => (
          <Link
            key={index}
            href={item.disabled ? "#" : item.href}
            className={cn(
              "hover:text-foreground/80 text-md flex items-center font-medium transition-colors sm:text-sm",
              item.disabled ? "text-foreground/60" : "text-foreground",
              item.disabled && "cursor-not-allowed opacity-80",
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
