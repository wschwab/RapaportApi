import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid, TextField, Button, Typography } from '@material-ui/core'

const AddDiamond = () => {
    const [inputs, setInputs] = useState({})
    const [submitted, setSubmitted] = useState(false)

    useEffect(inputs => {
        const newDiamond = { ...inputs }
        axios.post('/add', newDiamond)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.error(err)
                setInputs({
                    ...inputs,
                    errors: err.response.data
                })
            })
        setSubmitted(false)
    }, [submitted])

    const handleInputChange = event => {
        setInputs(inputs => ({...inputs, [event.target.name]: event.taget.value}))
    }

    return (
        <Grid container className="form-container">
            <Typography variant="h2">Add a Diamond</Typography>
            <form onSubmit={useEffect}>
                <TextField name="shape" label="Shape" onChange={handleInputChange} value={inputs.shape} required />
                <TextField name="size" label="Size" onChange={handleInputChange} value={inputs.size} required />
                <TextField name="color" label="Color" onChange={handleInputChange} value={inputs.color} required />
                <TextField name="clarity" label="Clarity" onChange={handleInputChange} value={inputs.clarity} required />
                <TextField name="price" label="Price" onChange={handleInputChange} value={inputs.price} required />
                <TextField name="listPrice" label="List Price" onChange={handleInputChange} value={inputs.listPrice} required />
                
                <Button type="submit" onClick={() => setSubmitted(true)}>
                    Submit
                </Button>
            </form>
        </Grid>
    )
}

export default AddDiamond