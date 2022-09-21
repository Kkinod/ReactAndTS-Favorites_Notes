import React from 'react'
import { Button } from '../components/atoms/Button/Button'
import Note from '../components/molecules/Note/Note'
import { useDispatch, useSelector } from 'react-redux'
import { addNote } from '../store'
import { FormWrapper, NotesWrapper, StyledFormField, Wrapper } from './Notes.styles'
import { useForm } from 'react-hook-form'

interface INote {
    id?: string
    title: string
    content: string
}

interface IState {
    notes: [{ id: string; title: string; content: string }]
}

const Notes = () => {
    const notes = useSelector((state: IState) => state.notes)
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    // ANY TYPE
    const handleAddNote = ({ title, content }: INote) => {
        dispatch(addNote({ title, content }))
    }

    return (
        <Wrapper>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
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

export default Notes
