import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid, TextField, Button, Typography } from '@material-ui/core'
import { FaHome } from 'react-icons/fa'

const AddDiamond = ({ setShowAddDiamond }) => {
    const [inputs, setInputs] = useState()
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        console.log(`Type: ${typeof inputs} Data: ${inputs}`)
        //setInputs(JSON.stringify(inputs))
        if (inputs) {
            console.log('executing POST')
            console.log(`Inside if() Type: ${typeof inputs} Data: ${inputs}`)
            axios.post('/api/DiamondModels', { ...inputs })
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => console.error(err))
            setInputs()
            setSubmitted(false)
        }
    }, [submitted])

    const handleInputChange = event => {
        setInputs({ ...inputs, [event.target.name]: event.target.value })
        console.log(inputs)
        console.log(typeof inputs)
    }

    const handleSubmit = event => {
        console.log("handleSubmit triggered")
        if (event) {
            console.log("if() in handleSubmit triggered")
            console.log(`Inside handleSubmit Data: ${inputs}`)
            event.preventDefault()
            setSubmitted(true)
        }
    }

    return (
        <>
            <Grid container className="form-container">
                <Typography variant="h3">Add a Diamond</Typography>
                <form noValidate onSubmit={handleSubmit}>
                    <TextField name="shape" label="Shape" onChange={handleInputChange} required />
                    <TextField name="size" label="Size" onChange={handleInputChange}  required />
                    <TextField name="color" label="Color" onChange={handleInputChange} required />
                    <TextField name="clarity" label="Clarity" onChange={handleInputChange} required />
                    <TextField name="price" label="Price" onChange={handleInputChange} required />
                    <TextField name="listPrice" label="List Price" onChange={handleInputChange} required />
                
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