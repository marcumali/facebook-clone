import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Iframe from './Iframe'

export default {
  title: 'Iframe',
  component: Iframe,
} as ComponentMeta<typeof Iframe>

const Template: ComponentStory<typeof Iframe> = (args) => <Iframe {...args} />

export const Default = Template.bind({})