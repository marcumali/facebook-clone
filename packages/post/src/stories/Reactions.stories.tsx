import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Reactions from './Reactions'

export default {
  title: 'Reactions',
  component: Reactions,
} as ComponentMeta<typeof Reactions>

const Template: ComponentStory<typeof Reactions> = (args) => <Reactions {...args} />

export const Default = Template.bind({})