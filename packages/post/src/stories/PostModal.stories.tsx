import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PostModal from './PostModal'

export default {
  title: 'PostModal',
  component: PostModal,
} as ComponentMeta<typeof PostModal>

const Template: ComponentStory<typeof PostModal> = (args) => <PostModal {...args} />

export const Default = Template.bind({})