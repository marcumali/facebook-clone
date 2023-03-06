import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Conversation from './Conversation'

export default {
  title: 'Conversation',
  component: Conversation,
} as ComponentMeta<typeof Conversation>

const Template: ComponentStory<typeof Conversation> = (args) => <Conversation {...args} />

export const Default = Template.bind({})