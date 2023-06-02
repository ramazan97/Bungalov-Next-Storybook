import { AboutCard } from "../storiesComponents/About";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "components/About",
  component: AboutCard,
  tags: ["autodocs"],
};

export const CardAbout = (args) => {
  return <AboutCard {...args} />;
};
CardAbout.args = {
  rounded: "48px",
  sizeText: "md",
  sizeTitle: "md",
  flex: "center",
};
