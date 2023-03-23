import type { Meta, StoryObj } from "@storybook/react";
import Stack from "./Stack";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Stack> = {
  title: "Example/Stack",
  component: Stack,
  tags: ["autodocs"],
  parameters: {
    docs: {
      controls: { exclude: ["children", "className", "style"] },
    },
  },
};
export default meta;

const children = [
  <span key="item-1">Item 1</span>,
  <span key="item-2">Item 2</span>,
  <span key="item-3">Item 3</span>,
];

type Story = StoryObj<typeof Stack>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const SmallGap: Story = {
  args: {
    gap: "s",
    children,
  },
};

export const MediumGap: Story = {
  args: {
    gap: "m",
    children,
  },
};

export const LargeGap: Story = {
  args: {
    gap: "l",
    children,
  },
};
