import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/welcome/Welcome.jsx"
import { CustomerNav } from "../components/nav/CustomerNav.jsx"
import { TicketList } from "../components/tickets/TicketList.jsx"

export const CustomerViews = ({ currentUser }) => {
    return (
        <Routes>
            <Route 
                path="/" 
                element={
                    <>
                        <CustomerNav />
                        <Outlet />
                    </>
                }
                >
                <Route index element={<Welcome />} />
                <Route path="tickets" element={<TicketList currentUser={currentUser} />} />
            </Route>
        </Routes>
    )
}