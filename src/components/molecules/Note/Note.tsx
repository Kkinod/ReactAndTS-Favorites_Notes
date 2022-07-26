import React from 'react'
import { useRemoveNoteMutation } from '../../../store'
import Title from '../../atoms/Title/Title'
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
            <StyledDeleteButton aria-label='Delete' onClick={handleRemoveNote} />
        </NoteWrapper>
    )
}

export default Note
