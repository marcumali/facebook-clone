import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Story from './Story'

export default {
  title: 'Story',
  component: Story,
} as ComponentMeta<typeof Story>

const Template: ComponentStory<typeof Story> = (args) => <Story {...args} />

export const Default = Template.bind({})