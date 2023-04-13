import clsx from "clsx";
import Balancer from "react-wrap-balancer";
import { Button, Inline, Stack, Text } from "@/components/base";
import { Plan } from "./Pricing";
import * as styles from "./PricingCard.css";
import FeatureIcon from "./FeatureIcon";

export default function PricingCard({ plan }: { plan: Plan }) {
  const itemClassNames = clsx(
    styles.card,
    plan?.highlighted && styles.highlighted
  );
  const buttonVariantProps = plan?.highlighted
    ? {
        secondary: true,
      }
    : {
        outline: true,
      };
  return (
    <li className={itemClassNames}>
      <Stack gap="xs">
        <Text as="h3" variant="bodyM" className={styles.name}>
          {plan.name}
        </Text>
        <Text as="p" variant="bodyM" className={styles.description}>
          <Balancer>{plan.description}</Balancer>
        </Text>
        <Text as="p" variant="headingL" className={styles.price}>
          {plan.price}
        </Text>
        <Button
          className={styles.button}
          url={`/register?plan=${plan.id}`}
          {...buttonVariantProps}
        >
          Get started
        </Button>
        <Stack as="ul" gap="2xs-xs" className={styles.featuresList}>
          {plan.features.map((feature) => (
            <li key={feature.name} className={styles.featureItem}>
              <Inline gap="2xs-xs" wrap={false}>
                <FeatureIcon className={styles.featureItemIcon} />
                <Text as="p" variant="bodyS">
                  {feature.name}
                </Text>
              </Inline>
            </li>
          ))}
        </Stack>
      </Stack>
    </li>
  );
}
