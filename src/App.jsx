import "./App.css"
import { CustomersList } from "./components/customers/CustomersList.jsx"
import { EmployeesList } from "./components/employees/EmployeesList.jsx"
import { NavBar } from "./components/nav/NavBar.jsx"
import { TicketList } from "./components/tickets/TicketList.jsx"
import { Routes, Route, Outlet } from "react-router-dom"

export const App = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
        >
        <Route path="tickets" element={<TicketList />} />
        <Route path="employees" element={<EmployeesList />} />
        <Route path="customers" element={<CustomersList />} />
      </Route>
    </Routes>
  )
}

/*
-- Route -- : A component from the react-router-dom library that allows us to define which components or jsx should render 
        on the page depending on the url of our application.

-- Routes -- : A component from the react-router-dom library that is used to define our list of routes. All Route components 
        defined in an application must be wrapped with the Routes component.

-- Outlet -- : A component from the react-router-dom library that defines where a child Route element should render in relation 
        to it's parent Route element. If a parent Route has an element, the <Outlet /> component must be rendered within it or the child elements will not display.

-- Link -- : A component from the react-router-dom library that navigates to the url defined in the to prop passed to the component.
*/