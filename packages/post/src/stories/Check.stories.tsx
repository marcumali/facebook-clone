import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Check from './Check'

export default {
  title: 'Check',
  component: Check,
} as ComponentMeta<typeof Check>

const Template: ComponentStory<typeof Check> = (args) => <Check {...args} />

export const Default = Template.bind({})