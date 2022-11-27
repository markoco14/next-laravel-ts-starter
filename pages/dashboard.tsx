import Head from 'next/head'
import AppLayout from '../src/components/Layouts/AppLayout'

const Dashboard = () => {
    return (
        <AppLayout
            header={
                <h2>Welcome</h2>
            }
        >
            <Head>App Dashboard</Head>
            <div>
            </div>
        </AppLayout>
    );
}

export default Dashboard