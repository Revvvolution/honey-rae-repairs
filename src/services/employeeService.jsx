export const getAllEmployees = () => {
    return fetch('http://localhost:8088/employees?_expand=user').then((res) =>
        res.json()
    )
}

export const getEmployeeById = (userId) => {
    return fetch(`http://localhost:8088/employees?userId=${userId}&_expand=user`)
    .then((res) => res.json())
}
