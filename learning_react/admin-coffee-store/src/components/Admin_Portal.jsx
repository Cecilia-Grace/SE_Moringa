import { useState, useEffect } from "react"
import { useCoffee } from "../context/CoffeeContext"

function AdminPortal() {
    const {addCoffee, updateCoffee, coffees, fetchCoffees} = useCoffee()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [origin, setOrigin] = useState('')
    const [price, setPrice] = useState('')

    const [isEditing, setIsEditing] = useState(false)
    const [selectedCoffee, setSelectedCoffee] = useState(null)

    useEffect(() => {
        fetchCoffees()
    }, [])

    function handleEdit(coffee){
        setIsEditing(true)
        setSelectedCoffee(coffee)

        setName(coffee.name)
        setDescription(coffee.description)
        setOrigin(coffee.origin)
        setPrice(coffee.price)
    }

    function handleCancel() {
        setIsEditing(false)
        setSelectedCoffee(null)
        setName('')
        setDescription('')
        setOrigin('')
        setPrice('')
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (name.trim() === "" || price === "") {
            alert("You cannot save a coffee if the name or price is missing!")
            return
        }

        if (isEditing) {
            updateCoffee({
                id: selectedCoffee.id,
                name,
                description,
                origin,
                price
            })
        } else {
            addCoffee({
                name,
                description,
                origin,
                price
            })
        }
    
        setName('')
        setDescription('')
        setOrigin('')
        setPrice('')
        setIsEditing(false)
        setSelectedCoffee(null)
    }
    

    return(
        <div className="coffee-container">
            <form onSubmit={handleSubmit} className="coffee-form">
            <h1>{isEditing ? "Edit Coffee" : "Add New Coffee"}</h1>
                <input
                    type="text"
                    placeholder="Coffee Name"
                    value={name}
                    onChange={((e)=> setName(e.target.value))}
                    className="coffee-name"
                    required
                />

                <input
                    type="text"
                    placeholder="Describe your coffee"
                    value={description}
                    onChange={((e)=> setDescription(e.target.value))}
                    className="coffee-desc"
                    required
                />

                <input
                    type="text"
                    placeholder="Origin of your Coffee"
                    value={origin}
                    onChange={((e)=> setOrigin(e.target.value))}
                    className="coffee-origin"
                    required
                />

                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={((e)=> setPrice(e.target.value))}
                    className="coffee-price"
                    required
                />

                <button type="submit">{isEditing ? "Update Details" : "Save Coffee"}</button>

                {isEditing && (
                    <button type="button" onClick={handleCancel} >Cancel Edit</button>
                )}

            </form>

            <ul className="coffee-list">
                    {coffees.map((coffee)=>(
                        <li key={coffee.id}>
                            {coffee.description}
                            <br/>
                            {coffee.name}
                            <br/>
                            {coffee.origin}
                            <br/>
                            {coffee.price}

                            <button onClick={()=> handleEdit(coffee)}>Edit Coffee</button>
                        </li>
                        
                    ))}
                </ul>
        </div>
    )
}

export default AdminPortal