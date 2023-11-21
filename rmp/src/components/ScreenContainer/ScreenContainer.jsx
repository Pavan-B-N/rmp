import "./ScreenContainer.css"

function ScreenContainer({ children, overrideClassName }) {
    return (
        <div className={`screen-content ${overrideClassName}`} >
            {children}
        </div>
    )
}

export default ScreenContainer
