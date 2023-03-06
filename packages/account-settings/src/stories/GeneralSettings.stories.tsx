import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import GeneralSettings from './GeneralSettings'

export default {
  title: 'GeneralSettings',
  component: GeneralSettings,
} as ComponentMeta<typeof GeneralSettings>

const Template: ComponentStory<typeof GeneralSettings> = (args) => <GeneralSettings {...args} />

export const Default = Template.bind({})