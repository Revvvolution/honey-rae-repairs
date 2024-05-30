/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import { getAllEmployees } from "../../services/employeeService.jsx"
import { assignTicket, updateTicket } from "../../services/ticketService.jsx"

export const Ticket = ({ ticket, currentUser, getAndSetTickets }) => {
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

    const handleClaim = () => {
        const currentEmployee = employees.find(employee => employee.userId === currentUser.id)

        const newEmployeeTicket = {
            employeeId: currentEmployee.id,
            serviceTicketId: ticket.id,
        }

        assignTicket(newEmployeeTicket).then(() => {
            getAndSetTickets()
        })
        }

        const handleClose = () => {
            const closedTicket = {
                id: ticket.id,
                userId: ticket.userId,
                description: ticket.description,
                emergency: ticket.emergency,
                dateCompleted: new Date(),
            }

            updateTicket(closedTicket).then(() => {
                getAndSetTickets()
            })
        }

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
                <div className="btn-container">
                    {/* If the logged in user is an employee and there's no employee ticket
                     associated with the service ticker, then a button to claim the ticket should display */}
                    {currentUser.isStaff && !assignedEmployee ? (<button className="btn btn-secondary" onClick={handleClaim}>
                        Claim
                        </button>
                    ) : ("")}
                    {/* If the logged in user is the ASSIGNED EMPLOYEE for the ticket and there is no dateCompleted, a
                     button to close the ticket should be displayed */}
                    {assignedEmployee?.userId === currentUser.id && !ticket.dateCompleted ? (<button className="btn btn-warning" onClick={handleClose}>Close</button>
                    ) : ("")}
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

-- Prop Drilling -- : In order to provide the currentUser state to the Ticket component, we has to pass it down from ApplicationViews to TicketList 
    and from TicketList to Ticket. Passing props down multiple levels like this is called prop drilling.
 */