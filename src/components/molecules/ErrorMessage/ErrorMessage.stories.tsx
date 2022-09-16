import ErrorMessage from './ErrorMessage'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden !important;
`

export default {
    title: 'Components/Molecules/ErrorMessage',
    component: ErrorMessage,
} as ComponentMeta<typeof ErrorMessage>

// const Template: ComponentStory<typeof ErrorMessage> = (args) => <ErrorMessage />
const Template: ComponentStory<typeof ErrorMessage> = (args) => (
    <Wrapper>
        <ErrorMessage {...args} />
    </Wrapper>
)

export const Default = Template.bind({})
Default.args = {}
