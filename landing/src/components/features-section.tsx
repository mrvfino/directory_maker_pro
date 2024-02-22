import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface FeaturesSectionProps {}

export default function FeaturesSection({}: FeaturesSectionProps) {
  const features = [
    {
      title: "Easy to Use",
      content:
        "Complex workflows only bog you down, so keeping it simple is at our core.",
    },
    {
      title: "Templates by experts",
      content:
        "Our templates are already designed with best practices in mind.",
    },
    {
      title: "CMS-free",
      content:
        "Skip the CMS, just upload a spreadsheet of your data and you're 90% done.",
    },
    {
      title: "Freedom",
      content:
        "No vendor locking. No subscriptions. Self-host anytime, we're here to help!",
    },
  ];

  return (
    <section className="w flex flex-col items-center p-2">
      <h1 className="text-center text-5xl font-light md:text-6xl">
        Main Features
      </h1>
      <p className="text-foreground/50 text-md max-w-2xl p-2 text-center md:text-xl">
        The combined output of an agency in just a single click, at a fraction
        of the cost. These features focused on giving you the first mover
        advantage.
      </p>
      <div className="bg m-4 flex w-screen flex-col items-center gap-4 md:flex-row md:justify-center">
        {features.map((value, index) => (
          <Card key={index} className="aspect-video w-72">
            <CardHeader>
              <CardTitle>{value.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/60">{value.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
