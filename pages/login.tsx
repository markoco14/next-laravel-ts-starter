import GuestLayout from '../src/components/Layouts/GuestLayout'
import Link from 'next/link'
import { useAuth } from '../src/hooks/auth'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Login = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitForm = async event => {
        event.preventDefault()

        login({
            email,
            password,
        })
    }

    return (
        <GuestLayout>
                <Link href='/'>Home</Link>
                <Link href='/login'>Login</Link>
                <Link href='/register'>Register</Link>
                <form onSubmit={submitForm}>
                    {/* Email Address */}
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            required
                            autoFocus
                        />
                    </div>
                    {/* Password */}
                    <div className="mt-4">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            required
                            autoComplete="current-password"
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link
                            href="/forgot-password"
                        >
                            Forgot your password?
                        </Link>
                        <button className="ml-3">Login</button>
                    </div>
                </form>
        </GuestLayout>
    )
}

export default Login