import ErrorMessage from './ErrorMessage'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
    title: 'Components/Molecules/ErrorMessage',
    component: ErrorMessage,
} as ComponentMeta<typeof ErrorMessage>

// const Template: ComponentStory<typeof ErrorMessage> = (args) => <ErrorMessage {...args} />
const Template: ComponentStory<typeof ErrorMessage> = (args) => <ErrorMessage />

export const Default = Template.bind({})
Default.args = {}
