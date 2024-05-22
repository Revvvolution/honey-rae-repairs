import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketService.jsx"
import "./Tickets.css"
import { Ticket } from "./Ticket.jsx"

export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([])
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState([])
  
    useEffect(() => {
      getAllTickets().then(ticketsArray => {
        setAllTickets(ticketsArray)
        console.log("tickets set!")
      })
    }, [])  // ONLY runs on initial render of component when array is empty [] and prevents infinite loop
  
    useEffect(() => {
      if (showEmergencyOnly) {
        const emergencyTickets = allTickets.filter(ticket => ticket.emergency === true)
        setFilteredTickets(emergencyTickets)
      } else {
        setFilteredTickets(allTickets)
      }
    }, [showEmergencyOnly, allTickets])
  
    
  
    return (
      <div className="tickets-container">
        <h2>Tickets</h2>
          <div>
            <button className="filter-btn btn-primary" onClick={() => {setShowEmergencyOnly(true)}}>
              Emergency
            </button>
            <button className="filter-btn btn-info" onClick={() => {setShowEmergencyOnly(false)}}>
              Show All
            </button>
          </div>
          <article className="tickets">
            {filteredTickets.map(ticketObj => {
              return <Ticket ticket={ticketObj} name="Joe" key={ticketObj.id} />
            })}
          </article>
      </div>
    ) 
}
