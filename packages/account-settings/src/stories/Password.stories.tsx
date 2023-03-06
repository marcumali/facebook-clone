import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Password from './Password'

export default {
  title: 'Password',
  component: Password,
} as ComponentMeta<typeof Password>

const Template: ComponentStory<typeof Password> = (args) => <Password {...args} />

export const Default = Template.bind({})