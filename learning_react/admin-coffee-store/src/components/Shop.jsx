import { useEffect, useState } from "react"
import { useCoffee } from "../context/CoffeeContext"

function Shop() {
    const {coffees, fetchCoffees, deleteCoffee} = useCoffee()
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(()=>{
        fetchCoffees()
    },[])

    const filteredCoffees = coffees.filter(coffee => {
        const cleanSearch = searchTerm.trim().toLowerCase();
        if (!cleanSearch) return true;
      
        // Split the coffee name into separate words
        const nameWords = coffee.name.toLowerCase().split(" ");
      
        // Check for the word that matches the search term
        return nameWords.some(word => word.startsWith(cleanSearch));
      })

    return(
        <div className="shop-container">
            <h2 className="shop-heading">Coffee Menu</h2>

            <input 
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={((e)=> setSearchTerm(e.target.value))}
                className="search-bar"
            />

            {filteredCoffees.length === 0? (
                <p>Coffee not available</p>
            ) : (
                <ul className="coffee-grid">
                    {filteredCoffees.map((coffee)=>(
                        <li key={coffee.id} className="coffee-card">
                            {coffee.description}
                            <br/>
                            {coffee.name}
                            <br/>
                            {coffee.origin}
                            <br/>
                            {coffee.price}

                            <button onClick={() => {
                                    if (window.confirm(`Are you sure you want to delete ${coffee.name}?`)) {
                                        deleteCoffee(coffee.id)
                                    }
                                }}>
                                Delete Coffee Item
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    
    )
}


export default Shop