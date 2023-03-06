import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DeleteAccount from './DeleteAccount'

export default {
  title: 'DeleteAccount',
  component: DeleteAccount,
} as ComponentMeta<typeof DeleteAccount>

const Template: ComponentStory<typeof DeleteAccount> = (args) => <DeleteAccount {...args} />

export const Default = Template.bind({})