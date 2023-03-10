import { CSSProperties, FC, useRef, useEffect, Fragment } from "react"
import createStore from "zustand-mini"
import "./index.css"

interface ModalChild {
    key: string | number
    element: JSX.Element
}

type ModalChildren = ModalChild[]

const useModalList = createStore<ModalChildren>([])

const ModalWrapper: FC = () => {
    const [modalList] = useModalList()

    return (
        <div>
            {modalList.map(item => (
                <div key={item.key}>{item.element}</div>
            ))}
        </div>
    )
}

export interface ModalProps {
    className?: string
    style?: CSSProperties
}

const Modal: FC<ModalProps> = props => {
    const { current: id } = useRef(Symbol("island modal component"))

    const { className, style } = props

    return <div className="modal" style={style}></div>
}

export default Modal
