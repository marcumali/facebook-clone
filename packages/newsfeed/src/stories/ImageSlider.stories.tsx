import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ImageSlider from './ImageSlider'

export default {
  title: 'ImageSlider',
  component: ImageSlider,
} as ComponentMeta<typeof ImageSlider>

const Template: ComponentStory<typeof ImageSlider> = (args) => <ImageSlider {...args} />

export const Default = Template.bind({})