import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ShareToFeed from './ShareToFeed'

export default {
  title: 'ShareToFeed',
  component: ShareToFeed,
} as ComponentMeta<typeof ShareToFeed>

const Template: ComponentStory<typeof ShareToFeed> = (args) => <ShareToFeed {...args} />

export const Default = Template.bind({})