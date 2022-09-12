import Button from './Button'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
    title: 'Components/Atoms/Button',
    component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Read more</Button>

export const Default = Template.bind({})

export const Big = Template.bind({})
Big.args = {
    isBig: true,
}
