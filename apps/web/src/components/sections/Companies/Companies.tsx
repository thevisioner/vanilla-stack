import Image from "next/image";
import { maxFontSize } from "@/styles/fluid/settings";
import { Inline, Text } from "@/components/base";
import * as styles from "./Companies.css";
import { chunkArray } from "@/helpers";

const companies = [
  {
    name: "Transistor",
    logo: "/assets/company-transistor.svg",
    width: 158,
    height: 48,
  },
  {
    name: "Tuple",
    logo: "/assets/company-tuple.svg",
    width: 105,
    height: 48,
  },
  {
    name: "StaticKit",
    logo: "/assets/company-statickit.svg",
    width: 127,
    height: 48,
  },
  {
    name: "Mirage",
    logo: "/assets/company-mirage.svg",
    width: 138,
    height: 48,
  },
  {
    name: "Laravel",
    logo: "/assets/company-laravel.svg",
    width: 136,
    height: 48,
  },
  {
    name: "Statamic",
    logo: "/assets/company-statamic.svg",
    width: 147,
    height: 48,
  },
];

export default function Companies() {
  const companiesChunks = chunkArray(companies, 3);
  return (
    <section className={styles.section}>
      <Text as="p" align="center" className={styles.text}>
        Trusted by these six companies so far
      </Text>
      <Inline align="center" gap="l-xl">
        {companiesChunks.map((companiesChunk, index) => (
          <Inline
            key={`companies.${index}`}
            as="ul"
            gap="l-xl"
            rowGap="m-l"
            className={styles.logosList}
          >
            {companiesChunk.map(({ name, logo, width, height }) => (
              <li key={name}>
                <Image
                  src={logo}
                  alt={name}
                  width={width}
                  height={height}
                  style={{
                    // fluid image size based on intrinsic width and height
                    width: `calc((${width / maxFontSize}) * 1em)`,
                    height: `calc((${height / maxFontSize}) * 1em)`,
                  }}
                />
              </li>
            ))}
          </Inline>
        ))}
      </Inline>
    </section>
  );
}
