import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import UserPopover from './UserPopover'

export default {
  title: 'UserPopover',
  component: UserPopover,
} as ComponentMeta<typeof UserPopover>

const Template: ComponentStory<typeof UserPopover> = (args) => <UserPopover {...args} />

export const Default = Template.bind({})