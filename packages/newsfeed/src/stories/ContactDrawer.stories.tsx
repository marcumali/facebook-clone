import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ContactDrawer from './ContactDrawer'

export default {
  title: 'ContactDrawer',
  component: ContactDrawer,
} as ComponentMeta<typeof ContactDrawer>

const Template: ComponentStory<typeof ContactDrawer> = (args) => <ContactDrawer {...args} />

export const Default = Template.bind({})