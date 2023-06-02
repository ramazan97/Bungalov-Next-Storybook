import { Card } from "../storiesComponents/BungalovCard";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "components/BungalovCard",
  component: Card,
  tags: ["autodocs"],
  excludeStories: ['users'],
  parameters: {
    backgrounds: {
      values: [
        { name: "light", value: "#fff" },
        { name: "dark", value: "#000" },
      ],
    },
  },
};

export const CardBungalov = (args) => {
  return (
    <div>
      <Card {...args} />
    </div>
  );
};
CardBungalov.args = {
  // label: "Button",
  // count: 3,

  backgroundColor: "#fff",
  rounded: "48px",
  sizeText: "md",
  sizeTitle: "md",
  width: "480px",
  height: "310px",

  // orientation: "horizontal",
};

// CardBungalov.argTypes = {
//   count: {
//     control: {
//       type: 'range',
//       min: 0,
//       max: 20,
//       // step:5,
//     },
//   },
//   contact: { control: 'radio', options: ['email', 'phone', 'mail'] },
//   contact2: { control: 'inline-radio', options: ['email', 'phone', 'mail'] },
//   contact3: { control: 'inline-check', options: ['email', 'phone', 'mail'] },
//   age: { control: 'select', options: [20, 30, 40, 50] },
//   countries: { control: 'multi-select', options: ['USA', 'Canada', 'Mexico'] },
//   color: { control: { type: 'color', presetColors: ['red', 'green',"blue"]} },
//   startDate: { control: 'date' }
// };

// export const CardBungalovSec = (args) => {
//   console.log(args, "args");
//   return (
//     <div>
//       <Card {...args} />
//     </div>
//   );
// };
// CardBungalovSec.args = {
//   // label: "Button",
//   backgroundColor: "#222",
//   rounded: "[61px]",
//   sizeText: "lg",
//   sizeTitle: "lg",
//   width:"[600px]",
//   height:"[310px]",

//   // orientation: "horizontal",
// };
