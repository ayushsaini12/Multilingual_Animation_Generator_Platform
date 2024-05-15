import "./header.css"
import { UisSubject } from '@iconscout/react-unicons-solid'

export function Header() {
    return (
        <div className="headerMain">
            <UisSubject size="40" color="#bd73e8" />
            <button>Login/Signup</button>
        </div>
    )
    
}