import { Columns, Stack } from "@/components/base";
import { splitArray } from "@/helpers";
import ReviewCard from "./ReviewCard";
import BaseSection from "../Base/BaseSection";
import * as styles from "./Testimonials.css";
import useMatchScreenSize from "@/hooks/match-screen-size";

const reviews = [
  {
    name: "Sheryl Berge",
    title: "CEO at Lynch LLC",
    text: "TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.",
    image: "/assets/avatar-1.webp",
  },
  {
    name: "Amy Hahn",
    title: "Director at Velocity Industries",
    text: "I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.",
    image: "/assets/avatar-4.webp",
  },
  {
    name: "Leland Kiehn",
    title: "Founder of Kiehn and Sons",
    text: "The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
    image: "/assets/avatar-5.webp",
  },
  {
    name: "Erin Powlowski",
    title: "COO at Armstrong Inc",
    text: "There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.",
    image: "/assets/avatar-2.webp",
  },
  {
    name: "Peter Renolds",
    title: "Founder of West Inc",
    text: "I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.",
    image: "/assets/avatar-3.webp",
  },
  {
    name: "Amy Hahn",
    title: "Director at Velocity Industries",
    text: "This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.",
    image: "/assets/avatar-4.webp",
  },
];

export type Review = (typeof reviews)[0];

export default function SocialProof({ id }: { id?: string }) {
  const matchMediumScreen = useMatchScreenSize("m");
  const matchLargeScreen = useMatchScreenSize("l");
  const numColumns = matchLargeScreen ? 3 : 2;
  const reviewParts = splitArray(reviews, numColumns);
  return (
    <BaseSection
      id={id}
      className={styles.section}
      wrapContent
      heading={`Loved by businesses worldwide.`}
      text={`Our software is so simple that people can’t help but fall in love
    with it. Simplicity is easy when you just skip tons of
    mission-critical features.`}
      textOptions={{ className: styles.sectionText }}
    >
      {matchMediumScreen ? (
        <Columns as="ul" columns={numColumns} gap="m-l">
          {reviewParts.map((chunk, index) => (
            <li key={index}>
              <Stack as="ul" gap="l-xl">
                {chunk.map((review, index) => (
                  <li key={`${review.name}.${index}`}>
                    <ReviewCard review={review} />
                  </li>
                ))}
              </Stack>
            </li>
          ))}
        </Columns>
      ) : (
        <Stack as="ul" gap="l-xl" className={styles.reviewsList}>
          {reviews.map((review, index) => (
            <li key={`${review.name}.${index}`}>
              <ReviewCard review={review} />
            </li>
          ))}
        </Stack>
      )}
    </BaseSection>
  );
}
