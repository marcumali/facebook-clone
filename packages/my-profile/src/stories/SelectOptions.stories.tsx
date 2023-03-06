import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SelectOptions from './SelectOptions'

export default {
  title: 'SelectOptions',
  component: SelectOptions,
} as ComponentMeta<typeof SelectOptions>

const Template: ComponentStory<typeof SelectOptions> = (args) => <SelectOptions {...args} />

export const Default = Template.bind({})