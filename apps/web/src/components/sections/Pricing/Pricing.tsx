import Balancer from "react-wrap-balancer";
import { Text } from "@/components/base";
import Scribble from "./Scribble";
import PricingCard from "./PricingCard";
import * as styles from "./Pricing.css";

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "$9",
    description:
      "Good for anyone who is self-employed and just getting started.",
    features: [
      {
        name: "Send 10 quotes and invoices",
      },
      {
        name: "Connect up to 2 bank accounts",
      },
      {
        name: "Track up to 15 expenses per month",
      },
      {
        name: "Manual payroll support",
      },
      {
        name: "Export up to 3 reports",
      },
    ],
  },
  {
    id: "business",
    name: "Small business",
    price: "$15",
    highlighted: true,
    description: "Perfect for small / medium sized businesses.",
    features: [
      {
        name: "Send 25 quotes and invoices",
      },
      {
        name: "Connect up to 5 bank accounts",
      },
      {
        name: "Track up to 50 expenses per month",
      },
      {
        name: "Automated payroll support",
      },
      {
        name: "Export up to 12 reports",
      },
      {
        name: "Bulk reconcile transactions",
      },
      {
        name: "Track in multiple currencies",
      },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "$39",
    description: "For even the biggest enterprise companies.",
    features: [
      {
        name: "Send unlimited quotes and invoices",
      },
      {
        name: "Connect up to 15 bank accounts",
      },
      {
        name: "Track up to 200 expenses per month",
      },
      {
        name: "Automated payroll support",
      },
      {
        name: "Export up to 25 reports, including TPS",
      },
    ],
  },
];

export type Plan = (typeof plans)[0];

export default function Pricing({ id }: { id?: string }) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.wrapper}>
        <Text
          as="h2"
          align="center"
          variant="headingL"
          className={styles.heading}
        >
          <Balancer>
            <em className={styles.emphasize}>
              <Scribble className={styles.scribble} />
              <span className={styles.emphasizeText}>Simple pricing</span>,
            </em>{" "}
            for everyone.
          </Balancer>
        </Text>
        <Text as="p" align="center" className={styles.text}>
          <Balancer>
            It doesn’t matter what size your business is, our software won’t
            work well for you.
          </Balancer>
        </Text>
        <ul className={styles.cardsList}>
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </ul>
      </div>
    </section>
  );
}
