import "./App.css"
import { Routes, Route } from "react-router-dom"
import { Login } from "./components/auth/Login.jsx"
import { Register } from "./components/auth/Register.jsx"
import { Authorized } from "./views/Authorized.jsx"
import { ApplicationViews } from "./views/ApplicationViews.jsx"

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route 
        path="*" 
        element={
          // Check if the user is authorized
          <Authorized>
            {/* ApplicationViews is the CHILD component of Authorized. Checks to see 
            if the honey-user object exists in Application tab > Local Storage > localhost in dev tools window) 
            before allowing child urls to be rendered. */}
            <ApplicationViews />
          </Authorized>
        } 
      />
    </Routes>
  )
}

/*
-- Route -- : A component from the react-router-dom library that allows us to define which components or jsx should render 
              on the page depending on the url of our application.

-- Routes -- : A component from the react-router-dom library that is used to define our list of routes. All Route components 
              defined in an application must be wrapped with the Routes component.

-- Route Parameter -- : Placeholders in the URL that begin with a colon : (example: line 26 - ":customerId")

-- Outlet -- : A component from the react-router-dom library that defines where a child Route element should render in relation 
              to it's parent Route element. If a parent Route has an element, the <Outlet /> component must be rendered within it or the 
              child elements will not display.

-- Link -- : A component from the react-router-dom library that navigates to the url defined in the to prop passed to the component.

-- Index Route -- : The child Route we want to render at the path of the parent Route. Consider it the "default" child Route.

-- usePrams -- : A hook from the react-router-dom library that returns the route parameter as a key/value pair on an object. The key being the route 
              parameter defined for the Route that rendered the component and the value being the value in the url at the position the route parameter was defined.
*/