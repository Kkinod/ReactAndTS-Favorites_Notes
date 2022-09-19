import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Note from '../../molecules/Note/Note'
import {
    NotesWrapper,
    WidgetHandler,
    Wrapper,
} from '../../organisms/NotesWidget/NotesWidget.styles'

interface IRootState {
    notes: [
        {
            id: string
            title: string
            content: string
        },
    ]
}

// ANY TYPE (can be "DefaultRootState" ?)
const NotesWidget = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const notes = useSelector((state: IRootState) => state.notes)

    const handleToggleWidget = () => setIsOpen((prevState) => !prevState)

    return (
        <Wrapper isOpen={isOpen}>
            <WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
            <NotesWrapper>
                {notes.length ? (
                    notes.map(({ title, content, id }) => (
                        <Note id={id} key={id} title={title} content={content} />
                    ))
                ) : (
                    <p>Create your first note</p>
                )}
            </NotesWrapper>
        </Wrapper>
    )
}

export default NotesWidget
