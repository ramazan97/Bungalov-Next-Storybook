import { NavbarCardSec } from "../storiesComponents/NavbarSec";
import { NavbarCard } from "../storiesComponents/Navbar";
import { TabCard } from "../storiesComponents/Tabs";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "components/Navbar",
  component: { NavbarCard, TabCard, NavbarCardSec },
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

export const CardNavbarSec = (args) => (
  <div>
    <NavbarCardSec {...args} />
  </div>
);
CardNavbarSec.args = {
  backgroundColor: "#333",
  gap: 3,
  sizeTitle: "md",
};
CardNavbarSec.argTypes = {
  gap: {
    control: {
      type: "range",
      min: 0,
      max: 10,
      // step:5,
    },
  },
};

export const CardNavbar = (args) => (
  <div>
    <NavbarCard {...args} />
    <TabCard {...args} />
  </div>
);

CardNavbar.args = {
  backgroundColor: "#fff",
  sizeTitle: "sm",
};