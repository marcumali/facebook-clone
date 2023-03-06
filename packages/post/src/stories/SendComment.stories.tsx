import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SendComment from './SendComment'

export default {
  title: 'SendComment',
  component: SendComment,
} as ComponentMeta<typeof SendComment>

const Template: ComponentStory<typeof SendComment> = (args) => <SendComment {...args} />

export const Default = Template.bind({})