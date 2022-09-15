import React, { forwardRef } from 'react'
import { Label } from '../../atoms/Label/Label'
import { Input } from '../../atoms/Input/Input'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    ${Label} {
        margin: 10px 0;
    }
`

interface IFormField {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    value?: string
    label: string
    name: string
    id: string
    type?: string
}

const FormField = forwardRef(
    (
        { onChange, value, label, name, id, type = 'text', ...props }: IFormField,
        ref: React.ForwardedRef<HTMLInputElement>,
    ) => {
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
                    {...props}
                    ref={ref}
                />
            </Wrapper>
        )
    },
)

FormField.displayName = 'MyFormField'

export default FormField
