import { ReactNode } from 'react'
import ReactDOM from 'react-dom'

type ModalProps = {
  children: ReactNode
}

export default function Modal({ children }: ModalProps) {
  const modalRoot = document.getElementById('modal');
  if (!modalRoot) {
    throw new Error('Element with id "modal" not found');
  }
  return ReactDOM.createPortal(
    <div className='Modal'>
      {children}
    </div>,
    modalRoot
  )
}