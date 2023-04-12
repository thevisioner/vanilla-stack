import clsx from "clsx";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { Text } from "@/components/base";
import * as styles from "./BaseSection.css";

type BaseSectionProps = {
  id?: string;
  className?: string;
  align?: "left" | "center" | "right";
  primary?: boolean;
  wrapContent?: boolean;
  backgroundImage?: string;
  backgroundOptions?: {
    className?: string;
  };
  heading: string;
  headingOptions?: {
    balance?: boolean;
    className?: string;
  };
  text: string;
  textOptions?: {
    balance?: boolean;
    className?: string;
  };
  wrapperOptions?: {
    className?: string;
  };
  children: React.ReactNode;
};

export default function BaseSection({
  id,
  className,
  align = "center",
  primary,
  wrapContent,
  backgroundImage,
  backgroundOptions,
  heading,
  headingOptions,
  text,
  textOptions,
  wrapperOptions,
  children,
}: BaseSectionProps) {
  const sectionClassNames = clsx(
    styles.section,
    primary && styles.primary,
    backgroundImage && styles.withBackgroundImage,
    wrapContent && styles.wrapContent,
    className
  );
  const backgroundClassNames = clsx(
    styles.backgroundImage,
    backgroundOptions?.className
  );
  const headingClassNames = clsx(
    styles.heading,
    primary && !wrapContent && styles.textOnPrimary,
    styles.textAlign[align],
    headingOptions?.className
  );
  const textClassNames = clsx(
    styles.text,
    primary && !wrapContent && styles.textOnPrimary,
    styles.textAlign[align],
    textOptions?.className
  );
  const wrapperClassNames = clsx(
    styles.wrapper,
    // TODO: Style section elements based on common vars
    primary && wrapContent && styles.textOnPrimary,
    wrapperOptions?.className
  );
  return (
    <section id={id} className={sectionClassNames}>
      {backgroundImage && (
        <Image
          fill
          src={backgroundImage}
          alt=""
          className={backgroundClassNames}
        />
      )}
      <Wrapper className={wrapperClassNames} wrapContent={wrapContent}>
        <Text as="h2" variant="headingL" className={headingClassNames}>
          {headingOptions?.balance === false ? (
            heading
          ) : (
            <Balancer>{heading}</Balancer>
          )}
        </Text>
        <Text as="p" className={textClassNames}>
          {textOptions?.balance === false ? text : <Balancer>{text}</Balancer>}
        </Text>
        {children}
      </Wrapper>
    </section>
  );
}

function Wrapper({
  wrapContent,
  className,
  children,
}: {
  wrapContent?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return wrapContent ? (
    <div className={className}>{children}</div>
  ) : (
    <>{children}</>
  );
}
