import React, { useState } from 'react'
import axios from 'axios'
import { Grid, TextField, Button, Typography } from '@material-ui/core'
import { FaHome } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'

const AddDiamond = ({ setShowAddDiamond }) => {
    const [inputs, setInputs] = useState()
    
    const handleInputChange = event => {
        setInputs({ ...inputs, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        console.log("handleSubmit triggered")
        if (event) {
            console.log("if() in handleSubmit triggered")
            event.preventDefault()
            if (inputs) {
                console.log('executing POST')
                const newDiamond = {
                    Id: uuidv4(),
                    Shape: inputs.Shape,
                    Size: parseFloat(inputs.Size),
                    Color: inputs.Color,
                    Clarity: inputs.Clarity,
                    Price: parseInt(inputs.Price),
                    ListPrice: parseInt(inputs.ListPrice)
                }
                console.log(newDiamond)
                axios.post('/api/DiamondModels', newDiamond)
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(err => console.error(err))
                setInputs()
            }
        }
    }

    return (
        <>
            <Grid container className="form-container">
                <Typography variant="h3">Add a Diamond</Typography>
                <form noValidate onSubmit={handleSubmit}>
                    <TextField name="Shape" label="Shape" onChange={handleInputChange} required />
                    <TextField name="Size" label="Size" onChange={handleInputChange}  required />
                    <TextField name="Color" label="Color" onChange={handleInputChange} required />
                    <TextField name="Clarity" label="Clarity" onChange={handleInputChange} required />
                    <TextField name="Price" label="Price" onChange={handleInputChange} required />
                    <TextField name="ListPrice" label="List Price" onChange={handleInputChange} required />
                
                    <Button type="submit">
                        Submit
                    </Button>
                </form>
            </Grid>

            <Button type="button" onClick={() => setShowAddDiamond(false)}>
                <FaHome />
            </Button>
        </>
    )
}

export default AddDiamond