export const getAllEmployees = () => {
    return fetch('http://localhost:8088/employees?_expand=user').then((res) =>
        res.json()
    )
}

export const getEmployeeById = (userId) => {
    return fetch(`http://localhost:8088/employees?userId=${userId}&_expand=user&_embed=employeeTickets`)
    .then((res) => res.json())
}

export const updateEmployee = (employee) => {
    return fetch(`http://localhost:8088/employees/${employee.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee),
    })
}