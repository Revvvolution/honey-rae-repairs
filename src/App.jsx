
import "./App.css"
import { CustomersList } from "./components/customers/CustomersList.jsx"
import { EmployeesList } from "./components/employees/EmployeesList.jsx"
import { TicketList } from "./components/tickets/TicketList.jsx"

export const App = () => {
  return <>
    <TicketList />
    <CustomersList />
    <EmployeesList />
  </>
}

