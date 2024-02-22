import {
  AlertCircle,
  CheckCircle2,
  CircleDot,
  CircleOff,
  XCircleIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface PricingSectionProps {}

export default function PricingSection({}: PricingSectionProps) {
  const prices = [
    {
      header: "Free",
      subheader: "No Credit Card Required",
      positives: ["Basic Templates", "Free hosting", "AI Enabled"],
      negatives: [
        "Under a subdomain",
        "1 website limit",
        "100 directory item limit",
        "Not Exportable",
        "Contains Ads",
      ],
      price: "$0.00",
    },
    {
      header: "Plus",
      subheader: "No subscription needed, just pay once per generation.",
      positives: [
        "All Expert Templates",
        "Free hosting",
        "Set A Custom Domain",
        "No Ads",
        "AI-Enabled",
        "Affiliate Program",
        "Removed Branding",
        "Self-Hostable",
        "Exportable",
        "Support Channel Access",
      ],
      negatives: [],
      price: "$200.00",
    },
  ];

  return (
    <section className="w flex flex-col items-center p-2">
      <h1 className="text-center text-2xl font-light md:text-4xl">Pricing</h1>
      <p className="text-foreground/50 text-md max-w-2xl p-2 text-center md:text-xl">
        Straightforward and transparent.
      </p>
      <div className="bg m-4 flex w-screen flex-col items-center gap-4 md:flex-row md:items-start md:justify-center">
        {prices.map((value, index) => (
          <Card
            key={index}
            className="bg-foreground text-background aspect-video w-72"
          >
            <CardHeader>
              <CardTitle>{value.header}</CardTitle>
              <CardDescription>{value.subheader}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm">
                {value.positives.map((value, index) => (
                  <li key={index}>
                    <div className="flex flex-row items-center gap-2 font-medium">
                      <CheckCircle2
                        className="font-bold text-green-500"
                        size={18}
                      />
                      {value}
                    </div>
                  </li>
                ))}
                {value.negatives.map((value, index) => (
                  <li key={index}>
                    <div className="flex flex-row items-center gap-2 font-light">
                      <AlertCircle
                        className="font-bold text-yellow-500"
                        size={18}
                      />
                      {value}
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <div className="w-full">
                <p className="text-center text-2xl">{value.price}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
