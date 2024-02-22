import { AlertCircle, CheckCircle2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import NMasonry from "./layouts/n-masontry";
import { Button } from "./ui/button";

interface ReviewsSectionProps {}

export default function ReviewsSection({}: ReviewsSectionProps) {
  const reviews = [
    {
      avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      subheading: "A Happy Customer",
      comment: "Great product! I'm really satisfied with my purchase.",
      siteName: "AmazingProducts.com",
      siteUrl: "https://www.amazingproducts.com",
    },
    {
      avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Jane Smith",
      subheading: "Impressed!",
      comment:
        "This product is amazing! It exceeded all my expectations. Highly recommended!",
      siteName: "SuperStore",
      siteUrl: "https://www.superstore.com",
    },
    {
      avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Mike Johnson",
      subheading: "Highly Recommend!",
      comment:
        "Where do I even begin? This product has truly exceeded all of my expectations and then some. From the moment I started using it, I could immediately tell the difference it was making in my daily life. It's innovative, user-friendly, and incredibly effective. Not only that, but the customer service provided by the company was top-notch. They were friendly, helpful, and went above and beyond to ensure my satisfaction. Overall, I am thoroughly impressed and would highly recommend this product to anyone in the market for something similar.",
      siteName: "QualityGoods",
      siteUrl: "https://www.qualitygoods.com",
    },
    {
      avatarUrl: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Emily Brown",
      subheading: "Fantastic Experience",
      comment:
        "I can't say enough good things about this product. It has truly been a game-changer for me. Not only is it of the highest quality, but it's also incredibly versatile and easy to use. The customer service provided by the company was exceptional as well. They were responsive, knowledgeable, and genuinely cared about my satisfaction. Overall, I am extremely happy with my purchase and would recommend this product to anyone looking for a reliable solution.",
      siteName: "BestDeals",
      siteUrl: "https://www.bestdeals.com",
    },
    {
      avatarUrl: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "David Wilson",
      subheading: "Satisfied Customer",
      comment:
        "Let me just say, this product has exceeded my wildest expectations. I've tried similar products in the past, but none have come close to the quality and performance of this one. It's durable, reliable, and built to last. On top of that, the customer service provided by the company was exceptional. They were responsive, helpful, and truly went above and beyond to ensure my satisfaction. Overall, I am extremely satisfied with my purchase and would highly recommend this product to anyone in need of a reliable solution.",
      siteName: "QuickShip",
      siteUrl: "https://www.quickship.com",
    },
    {
      avatarUrl: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Jane McJaneface",
      subheading: "Satisfied Customer",
      comment: "Bruh.",
      siteName: "QuickShip",
      siteUrl: "https://www.quickship.com",
    },
    // Add more reviews as needed
  ];

  return (
    <section className="w flex flex-col items-center p-2">
      <h1 className="text-center text-5xl font-light md:text-6xl">Reviews</h1>
      <p className="text-foreground/50 text-md max-w-2xl p-2 text-center md:text-xl">
        {
          "See what our community has to say! (And the stuff they've built us!')"
        }
      </p>
      <div className="bg m-4 flex w-screen flex-col items-center gap-4 md:flex-row md:items-start md:justify-center">
        <NMasonry numberOfColumns={4}>
          {reviews.map((value, index) => (
            <Card key={index} className="bg-foreground text-background w-72">
              <CardHeader>
                <CardTitle>{value.name}</CardTitle>
                <CardDescription>{value.subheading}</CardDescription>
              </CardHeader>
              <CardContent>
                <div>{value.comment}</div>
              </CardContent>
              <CardFooter>
                <div className="w-full">
                  <p className="text-center text-2xl">{value.price}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </NMasonry>
      </div>
      <div className="pt-16">
        <Button>Join the happy community of our users!</Button>
      </div>
    </section>
  );
}
