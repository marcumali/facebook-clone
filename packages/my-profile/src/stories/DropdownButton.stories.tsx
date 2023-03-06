import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DropdownButton from './DropdownButton'

export default {
  title: 'DropdownButton',
  component: DropdownButton,
} as ComponentMeta<typeof DropdownButton>

const Template: ComponentStory<typeof DropdownButton> = (args) => <DropdownButton {...args} />

export const Default = Template.bind({})