import React from 'react'
import Title from '../../atoms/Title/Title'
import { useRemoveNoteMutation } from '../../../store'
import { NoteWrapper, StyledDeleteButton } from '../../molecules/Note/Note.styles'

export interface INote {
    title?: string
    content?: string
    id: string
}

const Note = ({ title = 'Untitled', content = 'No content', id }: INote) => {
    const [removeNote] = useRemoveNoteMutation()

    const handleRemoveNote = () => {
        removeNote({ id: id })
    }

    return (
        <NoteWrapper>
            <Title>{title}</Title>
            <p>{content}</p>
            <StyledDeleteButton onClick={handleRemoveNote} />
        </NoteWrapper>
    )
}

export default Note
