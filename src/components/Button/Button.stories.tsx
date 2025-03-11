import React from "react";
import { StoryFn } from "@storybook/react";
import  Button, {ICLButtonProps}  from "./Button";


export default {
  title: "Button",
  component: Button,
};

const Template: StoryFn<ICLButtonProps> = args => <Button {...args} />;

export const HelloWorld = Template.bind({})

HelloWorld.args = {
  children: "Hello world",
  size: 'little',
  mode: 'fill'
}

export const Circle = Template.bind({})

Circle.args = {
  children: 'Learn more',
  size: 'normal',
  shape: 'rounded'
}