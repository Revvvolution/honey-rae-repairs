import { useEffect, useState } from "react"
import { User } from "../../users/User.jsx"
import { getNonStaffUsers } from "../../services/userService.jsx"
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
                return <User user={customerObj} key={customerObj.id} />
            })}
        </div>
    )
}