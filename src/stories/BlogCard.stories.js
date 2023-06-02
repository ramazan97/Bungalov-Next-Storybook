import { Card } from "../storiesComponents/BungalovCard";
import { BlogCard } from "../storiesComponents/BlogCard";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "components/BlogCard",
  component: BlogCard,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      values: [
        { name: "light", value: "#fff" },
        { name: "dark", value: "#000" },
      ],
    },
  },
};

export const CardBlog = (args) => {
  return (
    <div>
      <BlogCard {...args} />
    </div>
  );
};
CardBlog.args = {
  rounded: "48px",
  sizeText: "md",
  sizeTitle: "md",
  border: "[15px]",
};
