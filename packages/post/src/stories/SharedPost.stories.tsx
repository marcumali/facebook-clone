import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SharedPost from './SharedPost'

export default {
  title: 'SharedPost',
  component: SharedPost,
} as ComponentMeta<typeof SharedPost>

const Template: ComponentStory<typeof SharedPost> = (args) => <SharedPost {...args} />

export const Default = Template.bind({})