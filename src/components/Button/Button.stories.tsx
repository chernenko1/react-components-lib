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
  label: "Hello world"
}

export const Click = Template.bind({})

Click.args = {
  label: 'Click'
}