import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Select from './Select'

export default {
  title: 'Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Default = Template.bind({})
Default.args = {
	options: [
		{
			value: 0,
			label: 'Select Option',
		},
		{
			value: 1,
			label: 'Option 1',
		},
		{
			value: 2,
			label: 'Option 2',
		},
		{
			value: 3,
			label: 'Option 3',
		},
	]
}
