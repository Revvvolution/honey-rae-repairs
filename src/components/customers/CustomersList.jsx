import { useEffect, useState } from "react"
import { User } from "../../users/User.jsx"
import { getNonStaffUsers } from "../../services/userService.jsx"
import { Link } from "react-router-dom"
import "./Customers.css"

export const CustomersList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then((customerArray) => {
            setCustomers(customerArray)
        })
    }, [])

    return (
        <div className="customers">
            {customers.map((customerObj) => {
                return (
                <Link to={`/customers/${customerObj.id}`}>
                    <User user={customerObj} key={customerObj.id} />
                </Link>
                )
            })}
        </div>
    )
}