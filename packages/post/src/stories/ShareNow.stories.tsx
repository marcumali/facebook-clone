import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ShareNow from './ShareNow'

export default {
  title: 'ShareNow',
  component: ShareNow,
} as ComponentMeta<typeof ShareNow>

const Template: ComponentStory<typeof ShareNow> = (args) => <ShareNow {...args} />

export const Default = Template.bind({})