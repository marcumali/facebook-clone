import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TabContainer from './TabContainer'

export default {
  title: 'TabContainer',
  component: TabContainer,
} as ComponentMeta<typeof TabContainer>

const Template: ComponentStory<typeof TabContainer> = (args) => <TabContainer {...args} />

export const Default = Template.bind({})