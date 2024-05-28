import { useParams } from "react-router-dom"
import { getEmployeeById } from "../../services/employeeService.jsx"
import "./Employee.css"
import { useEffect, useState } from "react"


export const EmployeeDetails = () => {

    const [employee, setEmployee] = useState({})
    const [ticket, setEmployeeTicket] = useState(0)

    const { employeeId } = useParams()

    useEffect(() => {
        getEmployeeById(employeeId)
        .then(data => {
            const employeeObj = data[0]
            setEmployee(employeeObj)
        })
    }, [employeeId])


    return (
        <section className="employee">
            <header className="employee-header">{employee.user?.fullName}</header>
            <div>
                <span className="employee-info">Email: </span>
                {employee.user?.email}
            </div>
            <div>
                <span className="employee-info">Specialty: </span>
                {employee.specialty}
            </div>
            <div>
                <span className="employee-info">Rate: </span>
                {employee.rate}
            </div>
            <footer className="employee-footer">{`Currently working on ticket(s)`}</footer>
        </section>
    )
}