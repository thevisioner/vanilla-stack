import {
  HomeMain,
  Companies,
  Features,
  FeaturesAlt,
  Cta,
  SocialProof,
  Faq,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      {/* TODO: Include <Metadata /> with page title:
          Accounting made simple for small businesses */}

      <HomeMain />
      <Companies />
      <Features />
      <FeaturesAlt />
      <Cta />
      <SocialProof />
      <Faq />
    </>
  );
}
