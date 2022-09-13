import React, { ReactNode, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Button from '../../atoms/Button/Button'
import ModalWrapper from './Modal.styles'

// ANY TYPE
interface IModal {
    handleClose: () => void
    children: ReactNode
}

const modalContainer = document.getElementById('modal-container') as HTMLElement

const Modal = ({ handleClose, children }: IModal) => {
    const modalNode = document.createElement('div')

    useEffect(() => {
        modalContainer.appendChild(modalNode)

        return () => {
            modalContainer.removeChild(modalNode)
        }
    }, [modalNode])

    return ReactDOM.createPortal(
        <ModalWrapper>
            {children}
            <Button onClick={handleClose}>Close modal</Button>
        </ModalWrapper>,
        modalNode,
    )
}

export default Modal
