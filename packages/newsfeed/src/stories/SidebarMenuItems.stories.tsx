import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SidebarMenuItems from './SidebarMenuItems'

export default {
  title: 'SidebarMenuItems',
  component: SidebarMenuItems,
} as ComponentMeta<typeof SidebarMenuItems>

const Template: ComponentStory<typeof SidebarMenuItems> = (args) => <SidebarMenuItems {...args} />

export const Default = Template.bind({})