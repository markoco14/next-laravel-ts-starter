import Link from 'next/link'
import { useAuth } from '../../hooks/auth'
import { useRouter } from 'next/router'

const Navigation = ({ user }) => {

    const router = useRouter()

    const { logout } = useAuth()

    return (
        <nav>
            {/* Primary Navigation Menu */}
            <div>
                <div>
                    <div>
                        {/* Logo */}
                        <div>
                            <Link href="/dashboard">
                                Dashboard
                            </Link>
                        </div>
                    </div>

                    {/* Settings Dropdown */}
                    <div>
                        {/* Authentication */}
                        <button onClick={logout}>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation