import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ActivityNotification from './ActivityNotification'

export default {
  title: 'ActivityNotification',
  component: ActivityNotification,
} as ComponentMeta<typeof ActivityNotification>

const Template: ComponentStory<typeof ActivityNotification> = (args) => <ActivityNotification {...args} />

export const Default = Template.bind({})