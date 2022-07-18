import React from 'react'
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FlashlightOnIcon from '@mui/icons-material/FlashlightOn';
import '../styles/NewTrip.css';

const schema = yup.object().shape({
    tripName: yup.string().required(),
    destination: yup.string().required(),
    addCategories: yup.boolean(true),
})

function NewTrip() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    // const [formData, setFormData] = useState({
    //     tripname: "",
    //     destination: ""        
    // })

    // const { tripname, destination } = formData

    // const onChange = (e) => {
    //     setFormData((prevState) => ({
    //       ...prevState,
    //       [e.target.name]: e.target.value,
    //     }))
    //   }

    const formSubmit = (data) => {
        console.log({ data });
        reset();
    }

  return (
    <div className="container">
        <div className="newTrip">
            <div className="ntHeader">
                <h1>Create a new trip</h1>
            </div>
            <form className="nameTrip" onSubmit={formSubmit}>
                <div className="formRow">
                <label htmlFor="tripname">Name your trip</label>
                <input
                    {...register("tripname")}
                    type="text"
                    name="tripname"
                    placeholder="Summer Getaway"
                ></input>
                <p>{errors.tripname?.message}</p>
                </div>

                <div className="formRow">
                <label for="destination">Where are you going?</label>
                <input
                    {...register("desination")}
                    type="text"
                    name="destination"
                    placeholder="Algonquin"
                ></input>
                <p>{errors.destination?.message}</p>
                </div>
                <div className="formRowToggle">
                    <div className="formRowCheck">
                        <label>Add recommended categories to your packing list</label>
                        <p>categories can be added or removed later</p>
                    </div>
                    <div className="formRowCheck">
                        <input
                            {...register("addCategories")}
                            type="checkbox"
                            name="addCategories"
                            id="addCategories"
                            checked
                        ></input>
                    </div>
                </div>

                <div className="categories">
                    <div className="iconBox">
                        <i className="fa-solid fa-bed fa-2xl"></i>
                        <h4>SLEEPING</h4>
                    </div>
                    <div className="iconBox">
                        <i className="fa-solid fa-shirt fa-2xl"></i>
                        <h4>CLOTHING</h4>
                    </div>
                    <div className="iconBox">
                        <i className="fa-solid fa-briefcase-medical fa-2xl"></i>
                        <h4>FIRST-AID</h4>
                    </div>
                    <div className="iconBox">
                        <i class="fa-solid fa-fire-burner fa-2xl"></i>
                        <h4>KITCHEN</h4>
                    </div>
                    <div className="iconBox">
                        <i class="fa-solid fa-utensils fa-2xl"></i>
                        <h4>COOKING</h4>
                    </div>
                    <div className="iconBox">
                        <i class="fa-solid fa-hands-bubbles fa-2xl"></i>
                        <h4>TOILETRIES</h4>
                    </div>
                    <div className="iconBox">
                        <FlashlightOnIcon />
                        <h4>TOILETRIES</h4>
                    </div>
                    <div className="iconBox">
                        <i className="fa-solid fa-person-hiking fa-2xl"></i>
                        <h4>HIKING</h4>
                    </div>
                    <div className="iconBox">
                        <i className="fa-solid fa-hammer fa-2xl"></i>
                        <h4>TOOLS</h4>
                    </div>
                    <div className="iconBox">
                        <i className="fa-solid fa-person-swimming fa-2xl"></i>
                        <h4>SWIMMING</h4>
                    </div>
                </div>

                <div className="buttons">
                    <button id="createTrip" type="submit">CREATE TRIP</button>
                    <button id="cancelTrip">CANCEL</button>
                </div>

            </form>

        </div>
    </div>
  )
}

export default NewTrip