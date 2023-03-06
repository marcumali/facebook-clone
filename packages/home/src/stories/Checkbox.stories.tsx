import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Checkbox from './Checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const RememberMe = Template.bind({})
RememberMe.args = {
	children: 'Remember me',
}

export const PrivacyPolicy = Template.bind({})
PrivacyPolicy.args = {
	children: (
		<div>By creating your account, you agree to our <a href="/" className="text-decoration-underline">Terms of Use</a> & <a href="/" className="text-decoration-underline">Privacy Policy</a></div>
	),
}


