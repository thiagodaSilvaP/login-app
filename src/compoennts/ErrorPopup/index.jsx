import ReactDOM from 'react-dom';

export const ErrorPopup = ({children, popupModalIsOpen, setPopupModalIsOpen}) => {
    console.log(children)
    if (!popupModalIsOpen) return null

    setInterval(() => {
        setPopupModalIsOpen(false)
    }, 1000 * 5)

    return ReactDOM.createPortal(
        <div>
            {children}
        </div>,
        document.body
    )
}