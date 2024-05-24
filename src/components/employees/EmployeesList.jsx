import { useEffect, useState } from "react"
import { getStaffUsers } from "../../services/userService.jsx"
import { User } from "../../users/User.jsx"
import "./Employee.css"


export const EmployeesList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getStaffUsers().then((employeeArray) =>
            setEmployees(employeeArray)
        )
    }, [])

    return(
        <div className="employees">
           {employees.map((employeeObj) => {
            return <User user={employeeObj} key={employeeObj.id} />
           })}
        </div>
    )
}