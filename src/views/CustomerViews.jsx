import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/welcome/Welcome.jsx"
import { CustomerNav } from "../components/nav/CustomerNav.jsx"

export const CustomerViews = () => {
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
            </Route>
        </Routes>
    )
}