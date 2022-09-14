import React, { ReactNode } from 'react'
import Button from '../../atoms/Button/Button'
import ModalWrapper from './Modal.styles'

interface IModal {
    handleClose: () => void
    isOpen: boolean
    children: ReactNode
}

const Modal = ({ handleClose, isOpen, children }: IModal) => {
    return (
        <ModalWrapper
            appElement={document.getElementById('root') as HTMLElement}
            isOpen={isOpen}
            onRequestClose={handleClose}
        >
            {children}
            <Button onClick={handleClose}>Close</Button>
        </ModalWrapper>
    )
}

export default Modal
