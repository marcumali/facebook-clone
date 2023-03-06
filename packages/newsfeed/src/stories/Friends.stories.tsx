import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Friends from './Friends'

export default {
  title: 'Friends',
  component: Friends,
} as ComponentMeta<typeof Friends>

const Template: ComponentStory<typeof Friends> = (args) => <Friends {...args} />

export const Default = Template.bind({})