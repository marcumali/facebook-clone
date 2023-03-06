import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HeaderProfile from './HeaderProfile'

export default {
  title: 'HeaderProfile',
  component: HeaderProfile,
} as ComponentMeta<typeof HeaderProfile>

const Template: ComponentStory<typeof HeaderProfile> = (args) => <HeaderProfile {...args} />

export const Default = Template.bind({})