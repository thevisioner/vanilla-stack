import { useState } from "react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { Button, Text } from "@/components/base";
import BaseSection from "../Base/BaseSection";
import * as styles from "./Features.css";

// TODO: Prefetch images when hovering over feature buttons
// https://web.dev/learn/design/responsive-images/#preloading-hints
// <link rel="preload" href="hero.jpg" as="image" fetchpriority="high">

const features = [
  {
    title: "Payroll",
    description:
      "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
    image: "/assets/feature-payroll.webp",
  },
  {
    title: "Claim expenses",
    description:
      "All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
    image: "/assets/feature-expanses.webp",
  },
  {
    title: "VAT handling",
    description:
      "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
    image: "/assets/feature-vat-returns.webp",
  },
  {
    title: "Reporting",
    description:
      "Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.",
    image: "/assets/feature-reporting.webp",
  },
];

export default function Features({ id }: { id?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleFeatureClick = (index: number) => () => {
    setCurrentIndex(index);
  };
  const currentFeature = features[currentIndex];

  return (
    <BaseSection
      id={id}
      className={styles.section}
      wrapContent
      primary
      backgroundImage="/assets/background-features.jpg"
      heading={`Everything you need to run your books.`}
      text={`Well everything you need if you aren’t that picky about minor
    details like tax compliance.`}
    >
      {/* TODO: ARIA: tab role (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role) */}
      <div className={styles.layout}>
        <ul className={styles.featuresList}>
          {features.map((feature, index) => (
            <li key={feature.title} className={styles.featureItem}>
              <Text as="h3" className={styles.featureTitle}>
                <Button
                  plain
                  onClick={handleFeatureClick(index)}
                  className={styles.featureTitleButton}
                  ariaSelected={index === currentIndex}
                  ariaRole="tab"
                >
                  {feature.title}
                </Button>
              </Text>
              <Text
                as="p"
                variant="bodyS"
                className={styles.featureDescription}
              >
                {feature.description}
              </Text>
            </li>
          ))}
        </ul>

        <Text
          as="p"
          align="center"
          variant="bodyM"
          className={styles.featureSeparateDescription}
        >
          <Balancer>{currentFeature.description}</Balancer>
        </Text>

        <div className={styles.featureImage}>
          {/* TODO: Add framer-motion ?? */}
          <div className={styles.featureImageInner}>
            <Image
              fill
              quality={90}
              src={currentFeature.image}
              alt={currentFeature.title}
              priority={currentIndex === 0 ? true : undefined}
            />
          </div>
        </div>
      </div>
    </BaseSection>
  );
}
