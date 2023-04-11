import {
  HomeMain,
  Companies,
  Features,
  FeaturesAlt,
  GetStarted,
  Testimonials,
  Pricing,
  Questions,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      {/* TODO: Include <Metadata /> with page title:
          Accounting made simple for small businesses */}

      <HomeMain />
      <Companies />
      <Features id="features" />
      <FeaturesAlt />
      <GetStarted />
      <Testimonials id="testimonials" />
      <Pricing id="pricing" />
      <Questions />
    </>
  );
}
