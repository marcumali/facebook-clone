import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SocialLinks from './SocialLinks'

export default {
  title: 'SocialLinks',
  component: SocialLinks,
} as ComponentMeta<typeof SocialLinks>

const Template: ComponentStory<typeof SocialLinks> = (args) => <SocialLinks {...args} />

export const Default = Template.bind({})
Default.args = {
	label: 'Login with Social Links'
}
