import { useState } from "react";
import useFetch from "../useFetch";

const HotelDataFormSubmition = () => {
    const [category, setCategory] = useState('');
    const [FormData, setFormData] = useState({
        location: "",
        category : "",
        rating: "",
        websites: "",
        phonenumber: "",
        checkintime: "",
        checkouttime: "",
        amenities: "",
        pricerange : "",
        reservationsneeded: false,
        parkingavailable: false,
        wifiavailable: false,
        poolavailable: false,
        spaavailable: false,
        restaurantavailable: false,
        photos: ""

    });

    


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({
            ...prevState, [name]: name === "rating" ? parseInt(value) : value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try{
            const responce = await fetch("https://bi-12-hw-2-backend.vercel.app/hotels",
                {
                    method: "POST",
                    headers: {
                        'Content-Type' : "application/json"
                    },
                    body: JSON.stringify(FormData)
                }
            )

            if(!responce.ok){
                throw "Failed to add hotel."
            }

            const data = await responce.json()

            console.log("Added Hotel", data)
        }catch(error){
            console.log(error)
        }
    }
    

    return(
        <div>
            <h2>Add new Hotel</h2>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <br/>
                <input type="text" name="name" value={FormData.name} onChange={handleChange} />
                <br/>
                <label>Category: 
                <select type="text" name="category"  onChange={(event)=>setCategory(event.target.value)}  >
                    <option value="Resort">Resort</option>
                    <option value="Bed and breakfast">Bed and breakfast</option>
                    <option value="Budget Hotels">Budget Hotels</option>
                    </select>
                

                </label>
                {/* {console.log(category)} */}
                <br/>
                
                <br/>
                <label>Location: </label>
                <br/>
                <input type="text" name="location" value={FormData.location} onChange={handleChange}/>
                <br/>
                <label>Rating: </label>
                <br/>
                <input type="number" name="rating" value={FormData.rating} onChange={handleChange}/>
                <br/>
                <label>Websites: </label>
                <br/>
                <input type="text" name="websites" value={FormData.websites} onChange={handleChange}/>
                <br/>
                <label>Phone Numbers: </label>
                <br/>
                <input type="text" name="phonenumber" value={FormData.phonenumber} onChange={handleChange}/>
                <br/>
                <label>Check In Time: </label>
                <br/>
                <input type="text" name="checkintime" value={FormData.checkintime} onChange={handleChange}/>
                <br/>
                <label>Check Out Time: </label>
                <br/>
                <input type="text" name="checkouttime" value={FormData.checkouttime} onChange={handleChange}/>
                <br/>
                <label>Amenities: </label>
                <br/>
                <input type="text" name="amenities" value={FormData.amenities} onChange={handleChange}/>
                <br/>
                <label>Price Range: 
                <select type="text" name="pricerange"  onChange={(event)=>setCategory(event.target.value)}  >
                    <option value={"1000 - 2500"}>1000 - 2500</option>
                    <option value={"2500 - 5000"}>2500 - 5000</option>
                    <option value={"5000 - 10000"}>5000 - 10000</option>
                    </select>
                </label>
                <br/>
                {/* <input type="text" name="pricerange" value={FormData.pricerange} onChange={handleChange}/> */}
                <br/>
                <label >Reservations Needed :</label>
                <br/>
                <label for="reservationsneeded">
                <input type="checkbox" id="reservationsneeded" value="Yes" onChange={handleChange}/>Yes
                </label>
                <br/>
                <label>Parking Available: </label>
                <br/>
                <input type="text" name="parkingavailable" value={FormData.parkingavailable} onChange={handleChange}/>
                <br/>
                <label>WiFi available: </label>
                <br/>
                <input type="text" name="wifiavailable" value={FormData.wifiavailable} onChange={handleChange}/>
                <br/>
                <label>Pool available:</label>
                <br/>
                <input type="text" name="poolavailable" value={FormData.poolavailable} onChange={handleChange}/>
                <br/>
                <label>Spa Available: </label>
                <br/>
                <input type="text" name="spaavailable" value={FormData.spaavailable} onChange={handleChange}/>
                <br/>
                <label>Restaurnat Available: </label>
                <br/>
                <input type="text" name="restaurantavailable" value={FormData.restaurantavailable} onChange={handleChange}/>
                <br/>
                <label>Photos: </label>
                <br/>
                <input type="text" name="photos" value={FormData.photos} onChange={handleChange}/>
                <br/>
                <button>Submit</button>




            </form>
        </div>
    )
    
}

export default HotelDataFormSubmition;