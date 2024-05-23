import { useEffect, useState } from "react"
import { getStaffUsers } from "../../services/userService.jsx"
import "./Employee.css"


export const EmployeesList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getStaffUsers().then((employeeArray) =>
            setEmployees(employeeArray)
        )
    }, [])
}