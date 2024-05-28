export const getCustomerByUserId = (userId) => {
    return fetch(`http://localhost:8088/customers?userId=${userId}&_expand=user`)
    .then((res) => res.json())
}