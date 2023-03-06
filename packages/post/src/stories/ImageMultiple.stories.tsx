import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ImageMultiple from './ImageMultiple'

export default {
  title: 'ImageMultiple',
  component: ImageMultiple,
} as ComponentMeta<typeof ImageMultiple>

const Template: ComponentStory<typeof ImageMultiple> = (args) => <ImageMultiple {...args} />

export const Default = Template.bind({})