import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Security from './Security'

export default {
  title: 'Security',
  component: Security,
} as ComponentMeta<typeof Security>

const Template: ComponentStory<typeof Security> = (args) => <Security {...args} />

export const Default = Template.bind({})