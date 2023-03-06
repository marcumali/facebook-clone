import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Photos from './Photos'

export default {
  title: 'Photos',
  component: Photos,
} as ComponentMeta<typeof Photos>

const Template: ComponentStory<typeof Photos> = (args) => <Photos {...args} />

export const Default = Template.bind({})