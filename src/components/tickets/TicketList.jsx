import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketService.jsx"
import "./Tickets.css"
import { Ticket } from "./Ticket.jsx"
import { TicketFilterBar } from "./TicketFilterBar.jsx"

export const TicketList = ({currentUser}) => {
    const [allTickets, setAllTickets] = useState([])
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const getAndSetTickets = () => {
      getAllTickets().then(ticketsArray => {
        setAllTickets(ticketsArray)
      })
    }

    useEffect(() => {
      getAndSetTickets()
    }, [])  // ONLY runs on initial render of component when array is empty [] and prevents infinite loop
  
    useEffect(() => {
      if (showEmergencyOnly) {
        const emergencyTickets = allTickets.filter(ticket => ticket.emergency === true)
        setFilteredTickets(emergencyTickets)
      } else {
        setFilteredTickets(allTickets)
      }
    }, [showEmergencyOnly, allTickets])

    useEffect(() => {
      const foundTickets = allTickets.filter(ticket => 
        ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredTickets(foundTickets)
    }, [searchTerm, allTickets])
  
    
  
    return (
      <div className="tickets-container">
        <h2>Tickets</h2>
        <TicketFilterBar setShowEmergencyOnly={setShowEmergencyOnly} setSearchTerm={setSearchTerm} />
          <article className="tickets">
            {filteredTickets.map(ticketObj => {
              return <Ticket ticket={ticketObj} currentUser={currentUser} getAndSetTickets={getAndSetTickets} key={ticketObj.id} />
            })}
          </article>
      </div>
    ) 
}
