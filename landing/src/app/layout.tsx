import type { Metadata } from "next";
import { Inter as Nunito_Sans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import NavigationBar from "@/components/navigation-bar";
import { ThemeProvider } from "@/components/theme-provider";
import { navigationConfig } from "@/config/navigation";
import { ModeToggle } from "@/components/ui/mode-toggle";

const fontSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header>
            <NavigationBar items={navigationConfig.items} />
          </header>
          <main>{children}</main>
          <footer>
            <ModeToggle />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
