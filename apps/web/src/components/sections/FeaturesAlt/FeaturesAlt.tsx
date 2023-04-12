import { useMemo, useState } from "react";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import clsx from "clsx";
import { Bleed, Button, Columns, Stack, Text } from "@/components/base";
import useMatchScreenSize from "@/hooks/match-screen-size";
import BaseSection from "../Base/BaseSection";
import Icon from "./Icon";
import Slider from "./Slider";
import * as styles from "./FeaturesAlt.css";

const features = [
  {
    icon: "/assets/feature-icon-reporting.svg",
    name: "Reporting",
    title: "Stay on top of things with always up-to-date reporting features.",
    description:
      "We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.",
    image: "/assets/feature-profit-loss.webp",
  },
  {
    icon: "/assets/feature-icon-inventory.svg",
    name: "Inventory",
    title:
      "Never lose track of what’s in stock with accurate inventory tracking.",
    description:
      "We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.",
    image: "/assets/feature-inventory.webp",
  },
  {
    icon: "/assets/feature-icon-contacts.svg",
    name: "Contacts",
    title:
      "Organize all of your contacts, service providers, and invoices in one place.",
    description:
      "This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.",
    image: "/assets/feature-contacts.webp",
  },
] as const;

export type Feature = (typeof features)[number];
export type FeatureName = Feature["name"];

export default function FeaturesAlt({ id }: { id?: string }) {
  const matchMediumScreen = useMatchScreenSize("m");
  const featuresList = useMemo(
    () =>
      matchMediumScreen ? (
        <MediumScreenFeaturesAlt />
      ) : (
        <SmallScreenFeaturesAlt />
      ),
    [matchMediumScreen]
  );
  return (
    <BaseSection
      id={id}
      heading={`Simplify everyday business tasks.`}
      text={`Because you’d probably be a little confused if we suggested you
    complicate your everyday business tasks instead.`}
      textOptions={{ className: styles.sectionText }}
    >
      {featuresList}
    </BaseSection>
  );
}

function SmallScreenFeaturesAlt() {
  return (
    <Stack gap="xl-2xl">
      {features.map((feature) => {
        const itemClassNames = clsx(
          styles.featureItem,
          styles.featureItemActive
        );
        return (
          <div key={feature.name} className={itemClassNames}>
            <Icon featureName={feature.name} />
            <Text as="p" className={styles.featureName}>
              {feature.name}
            </Text>
            <Text as="h3" className={styles.featureTitle}>
              <Balancer>{feature.title}</Balancer>
            </Text>
            <Text as="p" variant="bodyS">
              <Balancer>{feature.description}</Balancer>
            </Text>
            <Bleed
              className={styles.featureSmallImageBleed}
              style={{ marginInline: `calc(var(--fluid-edge-width) * -1)` }}
            >
              <div className={styles.featureSmallImageWrapper}>
                <div className={styles.featureSmallImage}>
                  <Image src={feature.image} alt={feature.name} fill />
                </div>
              </div>
            </Bleed>
          </div>
        );
      })}
    </Stack>
  );
}

function MediumScreenFeaturesAlt() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleFeatureClick = (index: number) => () => {
    setCurrentIndex(index);
  };
  return (
    <>
      <Columns as="ul" columns={3} gap="m-l" className={styles.featuresList}>
        {features.map((feature, index) => {
          const isActive = index === currentIndex;
          const itemClassNames = clsx(styles.featureItem, {
            [styles.featureItemActive]: isActive,
          });
          return (
            <li key={feature.name} className={itemClassNames}>
              <Icon featureName={feature.name} />
              <Button
                plain
                onClick={handleFeatureClick(index)}
                className={styles.featureNameButton}
                ariaSelected={index === currentIndex}
                ariaRole="tab"
              >
                {feature.name}
              </Button>
              <Text as="h3" className={styles.featureTitle}>
                <Balancer>{feature.title}</Balancer>
              </Text>
              <Text as="p" variant="bodyS">
                <Balancer>{feature.description}</Balancer>
              </Text>
            </li>
          );
        })}
      </Columns>
      <Slider features={features} index={currentIndex} />
    </>
  );
}
