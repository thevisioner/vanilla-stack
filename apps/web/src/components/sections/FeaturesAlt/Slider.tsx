import Image from "next/image";
import clsx from "clsx";
import { Inline } from "@/components/base";
import { Feature } from "./FeaturesAlt";
import * as styles from "./Slider.css";

type SliderProps = {
  features: readonly Feature[];
  index: number;
};

export default function Slider({ features, index }: SliderProps) {
  return (
    <div className={styles.slider}>
      <Inline as="ul" gap="m-l" wrap={false}>
        {features.map((feature, i) => {
          const isActive = i === index;
          const itemClassNames = clsx(styles.sliderItem, {
            [styles.sliderItemActive]: isActive,
          });
          return (
            <li
              key={feature.name}
              className={itemClassNames}
              style={{ transform: `translateX(${100 * index * -1}%)` }}
            >
              <Image src={feature.image} alt={feature.name} fill />
            </li>
          );
        })}
      </Inline>
    </div>
  );
}
