import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Comment from './Comment'

export default {
  title: 'Comment',
  component: Comment,
} as ComponentMeta<typeof Comment>

const Template: ComponentStory<typeof Comment> = (args) => <Comment {...args} />

export const Default = Template.bind({})