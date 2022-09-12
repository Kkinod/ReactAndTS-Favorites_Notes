import FormField from './FormField'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
    title: 'Components/Molecules/FormFieldd',
    component: FormField,
} as ComponentMeta<typeof FormField>

const Template: ComponentStory<typeof FormField> = (args) => <FormField {...args} />

export const Default = Template.bind({})
Default.args = {
    label: 'Login',
}

export const LongLabel = Template.bind({})
LongLabel.args = {
    label: 'Very long label to see how it works',
}
