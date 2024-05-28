import { useParams } from "react-router-dom"

export const CustomerDetails = () => {
    // /customer/3
    // path="/customers/:customerId"

    const {customerId} = useParams() // { customerId: 3 }  ** destructuring path definition of customerId in App.jsx **

    return <div>Customer #{customerId}</div>
}