import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import ScrollProgress from './ScrollProgress'

export default function Layout() {
    return (
        <div className="min-h-screen">
            <ScrollProgress />
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}
