import Link from 'next/link'
import { useAuth } from '../../hooks/auth'
import { useRouter } from 'next/router'

const Navigation = ({ user }) => {

    const router = useRouter()

    const { logout } = useAuth()

    return (
        <nav className="bg-white border-b border-gray-100">
            {/* Primary Navigation Menu */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/dashboard">
                                Dashboard
                            </Link>
                        </div>
                    </div>

                    {/* Settings Dropdown */}
                    <div className="hidden sm:flex sm:items-center sm:ml-6">
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