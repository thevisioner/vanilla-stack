import { useState } from "react";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import { Button, Stack, Text } from "@/components/base";
import * as styles from "./Features.css";

// TODO: Prefetch images when hovering over feature buttons

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

export default function Features() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleFeatureClick = (index: number) => () => {
    setCurrentIndex(index);
  };
  const currentFeature = features[currentIndex];
  return (
    <section className={styles.section}>
      <Image
        fill
        src="/assets/background-features.jpg"
        alt=""
        className={styles.sectionBackground}
      />

      <div className={styles.content}>
        <Text
          as="h2"
          align="center"
          variant="headingL"
          className={styles.sectionTitle}
        >
          <Balancer>Everything you need to run your books.</Balancer>
        </Text>
        <Text as="p" align="center" className={styles.sectionDescription}>
          <Balancer>
            Well everything you need if you aren’t that picky about minor
            details like tax compliance.
          </Balancer>
        </Text>
        {/* TODO: ARIA: tab role (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role) */}
        <div className={styles.featuresContent}>
          <Stack as="ul" className={styles.featuresList}>
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
                <Text as="p" variant="bodyS">
                  {feature.description}
                </Text>
              </li>
            ))}
          </Stack>
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
      </div>
    </section>
  );
}
