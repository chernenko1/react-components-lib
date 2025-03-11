import React from 'react'
import {StoryFn} from '@storybook/react'
import ButtonSwitch, { ICLSwitch } from './ButtonSwitch'

export default {
  title: 'Switch',
  component: ButtonSwitch
}

const Template: StoryFn<ICLSwitch> = args => <ButtonSwitch {...args}/>

export const SW = Template.bind({})

SW.args = {
  firstTitle: 'Yearly',
  secondTitle: 'Monthly'
}