import React from 'react'
import styled from 'styled-components'
import { Label } from '../../atoms/Label/Label'
import { Input } from '../../atoms/Input/Input'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    ${Label} {
        margin: 10px 0;
    }
`

interface FormField {
    // onChange?: (e: React.FormEvent<HTMLFormElement>) => void
    onChange?: any
    value: string
    label: string
    name: string
    id: string
    type?: string
}

const FormField = ({ onChange, value, label, name, id, type = 'text' }: FormField) => {
    return (
        <Wrapper>
            <Label htmlFor={id}>{label}</Label>
            <Input
                name={name}
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                data-testid={label}
            />
        </Wrapper>
    )
}

export default FormField
