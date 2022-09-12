import StudentsListItem from './StudentsListItem'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
    title: 'Components/Molecules/StudentsListItem',
    component: StudentsListItem,
} as ComponentMeta<typeof StudentsListItem>

const mockedData = {
    name: 'Kamil Kamilczak',
    attendance: '55%',
    average: '3.5',
}

const Template: ComponentStory<typeof StudentsListItem> = (args) => <StudentsListItem {...args} />

export const Default = Template.bind({})
Default.args = {
    userData: mockedData,
}
