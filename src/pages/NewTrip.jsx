import React from 'react'
import { useEffect, useState } from 'react';
import '../styles/NewTrip.css';

function NewTrip() {

    const [formData, setFormData] = useState({
        tripname: "",
        destination: ""        
    })

    const { tripname, destination } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }

  return (
    <div className="container">
        <div className="newTrip">
            <div className="ntHeader">
                <h1>Create a new trip</h1>
            </div>
            <form className="nameTrip">
                <div className="formRow">
                <label for="tripname">Name your trip</label>
                <input
                    type="text"
                    name="tripname"
                    id="tripname"
                    value={tripname}
                    placeholder="Summer Getaway"
                    onChange={onChange}
                ></input>
                </div>

                <div className="formRow">
                <label for="destination">Where are you going?</label>
                <input
                    type="text"
                    name="destination"
                    id="destination"
                    value={destination}
                    placeholder="Algonquin"
                    onChange={onChange}
                ></input>
                </div>
            </form>

        </div>
    </div>
  )
}

export default NewTrip