import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface PricingSectionProps {}

export default function PricingSection({}: PricingSectionProps) {
  const prices = [
    {
      title: "Free",
      content:
        "Limited to 15 directory entries, comes with our branding. Not exportable.",
      price: "$0.00",
    },
    {
      title: "One Time Payment",
      content: "Get up to 1000 directory entries. Exportable & Self-hostable.",
      price: "$100.00",
    },
    {
      title: "Partner",
      content: "Need something more specific?",
      price: "",
    },
    {
      title: "PREMIUM",
      content: "Need something more specific?",
      price: "",
    },
  ];

  return (
    <section className="w flex flex-col items-center p-2">
      <h1 className="text-center text-2xl font-light md:text-4xl">Pricing</h1>
      <p className="text-foreground/50 text-md max-w-2xl p-2 text-center md:text-xl">
        Straightforward and transparent.
      </p>
      <div className="bg m-4 flex w-screen flex-col items-center gap-4 md:flex-row md:justify-center">
        {prices.map((value, index) => (
          <Card
            key={index}
            className="bg-foreground text-background aspect-video w-72"
          >
            <CardHeader>
              <CardTitle>{value.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-background/60">{value.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
