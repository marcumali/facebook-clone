import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FriendNotification from './FriendNotification'

export default {
  title: 'FriendNotification',
  component: FriendNotification,
} as ComponentMeta<typeof FriendNotification>

const Template: ComponentStory<typeof FriendNotification> = (args) => <FriendNotification {...args} />

export const Default = Template.bind({})