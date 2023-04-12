import { useCallback } from "react";
import { chunkArray } from "@/helpers";
import { Columns, Stack, Text } from "@/components/base";
import useMatchScreenSize from "@/hooks/match-screen-size";
import BaseSection from "../Base/BaseSection";
import * as styles from "./Questions.css";

const questions = [
  {
    question: "Does TaxPal handle VAT?",
    answer:
      "Well no, but if you move your company offshore you can probably ignore it.",
  },
  {
    question: "Can I pay for my subscription via purchase order?",
    answer: "Absolutely, we are happy to take your money in all forms.",
  },
  {
    question: "How do I apply for a job at TaxPal?",
    answer:
      "We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk.",
  },
  {
    question: "What was that testimonial about tax fraud all about?",
    answer:
      "TaxPal is just a software application, ultimately your books are your responsibility.",
  },
  {
    question:
      "TaxPal sounds horrible but why do I still feel compelled to purchase?",
    answer:
      "This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions.",
  },
  {
    question:
      "I found other companies called TaxPal, are you sure you can use this name?",
    answer:
      "Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.",
  },
  {
    question: "How do you generate reports?",
    answer:
      "You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.",
  },
  {
    question: "Can we expect more inventory features?",
    answer: "In life it’s really better to never expect anything at all.",
  },
  {
    question: "I lost my password, how do I get into my account?",
    answer:
      "Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.",
  },
];

export default function Questions({ id }: { id?: string }) {
  const matchMediumScreen = useMatchScreenSize("m");
  const chunkedQuestions = chunkArray(questions, 3);
  const questionsStack = useCallback(
    (items: typeof questions) => (
      <Stack as="ul" gap="m-l" className={styles.questionsStack}>
        {items.map(({ question, answer }) => (
          <li key={question}>
            <Text as="h3" variant="bodyM" className={styles.question}>
              {question}
            </Text>
            <Text as="p" variant="bodyS">
              {answer}
            </Text>
          </li>
        ))}
      </Stack>
    ),
    []
  );
  return (
    <BaseSection
      id={id}
      className={styles.section}
      backgroundImage="/assets/background-faqs.jpg"
      backgroundOptions={{ className: styles.sectionBackground }}
      wrapContent
      heading={`Frequently asked questions`}
      text={`If you can’t find what you’re looking for, email our support team
    and if you’re lucky someone will get back to you.`}
      textOptions={{ className: styles.sectionText }}
    >
      {matchMediumScreen ? (
        <Columns as="ul" columns={3} gap="l-xl">
          {chunkedQuestions.map((questionsChunk, index) => (
            <li key={index}>{questionsStack(questionsChunk)}</li>
          ))}
        </Columns>
      ) : (
        questionsStack(questions)
      )}
    </BaseSection>
  );
}
