/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import { getAllEmployees } from "../../services/employeeService.jsx"

export const Ticket = ({ ticket }) => {
    const [employees, setEmployees] = useState([])
    const [assignedEmployee, setAssignedEmployee] = useState({})

    useEffect(() => {
        getAllEmployees().then(employeesArray => {
          setEmployees(employeesArray)
        })
      }, []) 
    
    useEffect(() => {
        const foundEmployee = employees.find(
            (employee) => employee.id === ticket.employeeTickets[0]?.employeeId
        )
        setAssignedEmployee(foundEmployee)
    }, [employees, ticket])

    return (
        <section className="ticket">
            <header className="ticket-info">#{ticket.id}</header>
            <div>{ticket.description}</div>
            <footer>
                <div>
                    <div className="ticket-info">assignee</div>
                    <div>
                        {assignedEmployee ? assignedEmployee.user?.fullName : "None"}
                    </div>
                </div>
                <div>
                    <div className="ticket-info">emergency</div>
                    <div>{ticket.emergency ? "yes" : "no"}</div>
                </div>
            </footer>
        </section>
    )
}


/* 
-- Render a component -- : To invoke a React component in JSX, like calling a function, resulting in its display within the rendered user interface.

-- Props -- : Arguments passed to a React component in the form of an object.
 
-- Optional Chaining -- : An operator that accesses an object's property. If the object accessed using this operator is undefined or null, 
the expression stops and evaluates to undefined instead of throwing an error.

-- Ternary Operator -- : An operator that provides a way to shorten a simple if else block. The if condition is on the left of the ?. If the 
condition evaluates to true, the statement after the ? is executed. If the condition evaluates to false, the statement after the : is executed.
 */