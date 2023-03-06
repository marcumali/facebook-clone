import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Engagement from './Engagement'

export default {
  title: 'Engagement',
  component: Engagement,
} as ComponentMeta<typeof Engagement>

const Template: ComponentStory<typeof Engagement> = (args) => <Engagement {...args} />

export const Default = Template.bind({})