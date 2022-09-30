import React from 'react'
import Button from '../components/atoms/Button/Button'
import Note from '../components/molecules/Note/Note'
import { useAddNoteMutation, useGetNotesQuery } from '../store/api/notes'
import { FormWrapper, NotesWrapper, StyledFormField, Wrapper } from './Notes.styles'
import { useForm } from 'react-hook-form'

interface INote {
    id: string
    title: string
    content: string
}

const Notes = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<INote>()

    const { data, isLoading } = (useGetNotesQuery as any)()
    const [addNote] = useAddNoteMutation()

    const handleAddNote = ({ title, content }: INote) => {
        addNote({ title, content })
    }

    return (
        <Wrapper>
            <FormWrapper onSubmit={handleSubmit(handleAddNote)}>
                <StyledFormField
                    {...register('title', { required: true })}
                    label='Title'
                    name='title'
                    id='title'
                />
                <StyledFormField
                    {...register('content', { required: true })}
                    isTextarea
                    label='Content'
                    name='content'
                    id='content'
                />
                {errors.title && <span>Title is required</span>}
                {errors.content && <span>Content is required</span>}
                <Button type='submit'>Add</Button>
            </FormWrapper>
            {isLoading ? (
                <h2>Loading...</h2>
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

export default Notes
