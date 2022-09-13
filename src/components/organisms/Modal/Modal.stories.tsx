import { ComponentStory, ComponentMeta } from '@storybook/react'
import Modal from './Modal'
import StudentDetails from '../../molecules/StudentDetails/StudentDetails'

export default {
    title: 'Components/Organism/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => (
    <Modal {...args}>
        <StudentDetails
            student={{
                id: '1',
                name: 'Kamil Kamilczak',
                attendance: '39%',
                average: '2.3',
                group: 'A',
            }}
        />
    </Modal>
)

export const Default = Template.bind({})
