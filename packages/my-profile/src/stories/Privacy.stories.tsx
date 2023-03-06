import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Privacy from './Privacy'

export default {
  title: 'Privacy',
  component: Privacy,
} as ComponentMeta<typeof Privacy>

const Template: ComponentStory<typeof Privacy> = (args) => <Privacy {...args} />

export const Default = Template.bind({})