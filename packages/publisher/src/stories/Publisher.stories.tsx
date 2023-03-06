import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Publisher from './Publisher'

export default {
  title: 'Publisher',
  component: Publisher,
} as ComponentMeta<typeof Publisher>

const Template: ComponentStory<typeof Publisher> = (args) => <Publisher {...args} />

export const Default = Template.bind({})