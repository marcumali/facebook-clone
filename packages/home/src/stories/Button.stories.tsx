import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})

export const Secondary = Template.bind({})
Secondary.args = {
	variant: 'secondary',
	label: 'Secondary',
}

export const Danger = Template.bind({})
Danger.args = {
	variant: 'danger',
	label: 'Danger',
}
