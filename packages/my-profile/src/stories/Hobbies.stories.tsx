import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Hobbies from './Hobbies'

export default {
  title: 'Hobbies',
  component: Hobbies,
} as ComponentMeta<typeof Hobbies>

const Template: ComponentStory<typeof Hobbies> = (args) => <Hobbies {...args} />

export const Default = Template.bind({})