import { HeroCard } from "../storiesComponents/Hero";
import { HeroVideo } from "../storiesComponents/HeroVideo";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "components/Hero",
  component: HeroCard,
  HeroVideo,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [
        { name: "light", value: "#fff" },
        { name: "dark", value: "#000" },
      ],
    },
  },
};

export const CardHero = (args) => (
  <div>
    <HeroCard {...args} />
  </div>
);
CardHero.args = {

  sizeText: "md",
  textColor: "#fff",
  sizeTitle: "md",
  titleColor: "#fff",

};

// --------------------------
export const VideoHero = (args) => (
  <div>
    <HeroVideo {...args} />
  </div>
);
VideoHero.args = {
  gap: 3,
  sizeText: "6xl",
  textColor: "#fff",
  logoColor: "#fff",
  sizeTitle: "20px",
  titleColor: "#fff",

};
