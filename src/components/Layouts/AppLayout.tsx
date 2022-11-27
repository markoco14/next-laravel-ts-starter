import Navigation from './Navigation'
import { useAuth } from '../../hooks/auth'

const AppLayout = ({ header, children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    return (
        <div>
            <Navigation user={user} />

            {/* Page Heading */}
            <header>
                <div>
                    {header}
                </div>
            </header>

            {/* Page Content */}
            <main>{children}</main>
        </div>
    )
}

export default AppLayout