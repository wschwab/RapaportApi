import React, { useState, useEffect } from 'react'

const AddDiamond = () => {
    const [inputs, setInputs] = useState({})
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        const newDiamond = { ...inputs }
        axios.post('/add', newDiamond)
            .then(res => {
                console.log(res.data)
                history.push('/')
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
        <div className="form-container">
            <form onSubmit={setSubmitted(true)}>
                <div>
                    <label>Shape</label>
                    <input type="text" name="shape" onChange={handleInputChange} value={inputs.shape} required />
                </div>
                <div>
                    <label>Size</label>
                    <input type="text" name="size" onChange={handleInputChange} value={inputs.size} required />
                </div>
                <div>
                    <label>Color</label>
                    <input type="text" name="color" onChange={handleInputChange} value={inputs.color} required />
                </div>
                <div>
                    <label>Clarity</label>
                    <input type="text" name="clarity" onChange={handleInputChange} value={inputs.clarity} required />
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" name="price" onChange={handleInputChange} value={inputs.price} required />
                </div>
                <div>
                    <label>List Price</label>
                    <input type="text" name="listPrice" onChange={handleInputChange} value={inputs.listPrice} required />
                </div>
            </form>
        </div>
    )
}

export default AddDiamond