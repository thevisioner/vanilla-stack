import Balancer from "react-wrap-balancer";
import { Text, Inline, Button } from "@/components/base";
import Scribble from "./Scribble";
import PlayIcon from "./PlayIcon";
import * as styles from "./HomeMain.css";

export default function HomeMain() {
  function openVideoPopup() {
    alert("Video popup opened");
  }

  return (
    <main className={styles.main}>
      <Text as="h1" variant="heading2Xl" className={styles.headline}>
        <Balancer>
          Accounting{" "}
          <em className={styles.emphasize}>
            made simple
            <Scribble className={styles.scribble} />
          </em>{" "}
          for small businesses.
        </Balancer>
      </Text>
      <Text as="p" className={styles.body}>
        <Balancer>
          Most bookkeeping software is accurate, but hard to use. We make the
          opposite trade-off, and hope you don’t get audited.
        </Balancer>
      </Text>
      <Inline align="center" gap="s-m" rowGap="xs-s">
        <Button secondary url="/register">
          Get 6 months free
        </Button>
        <Button outline iconBefore={<PlayIcon />} onClick={openVideoPopup}>
          Watch video
        </Button>
      </Inline>
    </main>
  );
}
