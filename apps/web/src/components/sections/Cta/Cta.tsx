import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { Button, Text } from "@/components/base";
import * as styles from "./Cta.css";

// TODO: Style section elements based on common vars

export default function Cta() {
  return (
    <section className={styles.section}>
      <Image
        fill
        src="/assets/background-cta.jpg"
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
          <Balancer>Get started today!</Balancer>
        </Text>
        <Text as="p" align="center" className={styles.sectionDescription}>
          <Balancer>
            It’s time to take control of your books. Buy our software so you can
            feel like you’re doing something productive.
          </Balancer>
        </Text>
        <Button primary url="/register" className={styles.cta}>
          Get 6 months free
        </Button>
      </div>
    </section>
  );
}
