import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MessageNotification from './MessageNotification'

export default {
  title: 'MessageNotification',
  component: MessageNotification,
} as ComponentMeta<typeof MessageNotification>

const Template: ComponentStory<typeof MessageNotification> = (args) => <MessageNotification {...args} />

export const Default = Template.bind({})