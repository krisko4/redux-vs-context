import { FC } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export const ModeSelector: FC = () => {
    const navigate = useNavigate()
    return (
        <div style={{ flexGrow: 1, alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
            <h1>React-redux vs Context API</h1>
            <div>
                <button onClick={() => navigate('/context-mode')}>Select context mode</button>
                <button onClick={() => navigate('/redux-mode')}>Select redux mode</button>
            </div>
            <Outlet />
        </div>
    )
}