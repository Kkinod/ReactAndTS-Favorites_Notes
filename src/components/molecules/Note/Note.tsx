import React from 'react'
import Title from '../../atoms/Title/Title'
import { useDispatch } from 'react-redux'
import { removeNote } from '../../../store'
import { NoteWrapper, StyledDeleteButton } from '../../molecules/Note/Note.styles'

interface INote {
    title?: string
    content?: string
    id: string
}

const Note = ({ title = 'Untitled', content = 'No content', id }: INote) => {
    const dispatch = useDispatch()

    const handleRemoveNote = () => {
        dispatch(removeNote({ id: id }))
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
