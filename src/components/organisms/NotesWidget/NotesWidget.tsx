import React from 'react'
import Note, { INote } from '../../molecules/Note/Note'
import { useGetNotesQuery } from '../../../store'
import {
    NotesWrapper,
    WidgetHandler,
    Wrapper,
} from '../../organisms/NotesWidget/NotesWidget.styles'

// ANY TYPE (can be "DefaultRootState" ?)
const NotesWidget = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { data, isLoading } = useGetNotesQuery()

    const handleToggleWidget = () => setIsOpen((prevState) => !prevState)

    return (
        <Wrapper isOpen={isOpen}>
            <WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
            {isLoading ? (
                <h3>Loading...</h3>
            ) : (
                <NotesWrapper>
                    {data.notes.length ? (
                        data.notes.map(({ title, content, id }: INote) => (
                            <Note id={id} key={id} title={title} content={content} />
                        ))
                    ) : (
                        <p>Create your first note</p>
                    )}
                </NotesWrapper>
            )}
        </Wrapper>
    )
}

export default NotesWidget
