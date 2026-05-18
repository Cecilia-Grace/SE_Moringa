import { createContext, useContext, useState } from "react";

const CoffeeContext = createContext()

function CoffeeProvider({children}) {
    const [coffees, setCoffee] = useState([])
    
    async function fetchCoffees() {
        const response = await fetch('http://localhost:3000/coffees')
        const data = await response.json()

        setCoffee(data)
    }

    async function addCoffee(coffee) {
        const response = await fetch('http://localhost:3000/coffees', {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(coffee)
        })
        const addedCoffee = await response.json()

        setCoffee((prevCoffees)=>[...prevCoffees, addedCoffee])
    }

    async function updateCoffee(coffee) {
        const response = await fetch(`http://localhost:3000/coffees/${coffee.id}`, {
            method: "PATCH",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(coffee)
        }) 
        const updatedCoffee = await response.json()

        setCoffee((prevCoffees)=> (
            prevCoffees.map((c) => c.id === coffee.id? updatedCoffee : c)
        ))
    }

    async function deleteCoffee(id) {
        const response = await fetch(`http://localhost:3000/coffees/${id}`, {
            method: "DELETE"
        })

        setCoffee((prevCoffees) => prevCoffees.filter((c) => c.id !== id))
    }

    return(
        <CoffeeContext.Provider value={{coffees, fetchCoffees, addCoffee, updateCoffee, deleteCoffee}}>
            {children}
        </CoffeeContext.Provider>
    )
}

export function useCoffee() {
    return useContext(CoffeeContext)
}

export default CoffeeProvider