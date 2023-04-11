import { Button } from "@/components/base";
import BaseSection from "../Base/BaseSection";
import * as styles from "./GetStarted.css";

export default function GetStarted({ id }: { id?: string }) {
  return (
    <BaseSection
      id={id}
      className={styles.section}
      primary
      wrapContent
      backgroundImage="/assets/background-cta.jpg"
      heading={`Get started today!`}
      text={`It’s time to take control of your books. Buy our software so you can
    feel like you’re doing something productive.`}
      textOptions={{ className: styles.sectionText }}
    >
      <Button primary url="/register" className={styles.cta}>
        Get 6 months free
      </Button>
    </BaseSection>
  );
}
