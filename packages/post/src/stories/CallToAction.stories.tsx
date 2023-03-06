import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CallToAction from './CallToAction'

export default {
  title: 'CallToAction',
  component: CallToAction,
} as ComponentMeta<typeof CallToAction>

const Template: ComponentStory<typeof CallToAction> = (args) => <CallToAction {...args} />

export const Default = Template.bind({})