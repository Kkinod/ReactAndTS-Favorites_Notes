import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import Button from '../../atoms/Button/Button'
import ModalWrapper from './Modal.styles'

// ANY TYPE
interface IModal {
    handleClose: () => void
}

const modalContainer = document.getElementById('modal-container') as HTMLElement

const Modal = ({ handleClose }: IModal) => {
    const modalNode = document.createElement('div')

    useEffect(() => {
        modalContainer.appendChild(modalNode)

        return () => {
            modalContainer.removeChild(modalNode)
        }
    }, [modalNode])

    return ReactDOM.createPortal(
        <ModalWrapper>
            Modal<Button onClick={handleClose}>Close modal</Button>
        </ModalWrapper>,
        modalNode,
    )
}

export default Modal
