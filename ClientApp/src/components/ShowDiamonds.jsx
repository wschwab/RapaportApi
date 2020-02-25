import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@material-ui/core'
import { FaHome } from 'react-icons/fa'

const ShowDiamonds = ({ setShowDiamonds }) => {
    const [data, setData] = useState([])

    useEffect(data => {
        axios.get('/api/DiamondModels')
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(err => console.error(err))
    },[])

    const useStyles = makeStyles({
        table: {
            minWidth: 650
        }
    })

    const classes = useStyles()

    const avgPrice = data => {
        let summed = 0;
        data.forEach(diamond => summed += diamond.price);
        const average = summed / data.length;

        return average.toFixed(2)
    }

    const avgDiscount = data => {
        let summed = 0;
        data.forEach(diamond => summed += diamond.listPrice - diamond.price);
        const average = summed / data.length;

        return average.toFixed(2)
    }

    
    return (
        <div>
            <Typography variant="h3">Diamond List</Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Shape</TableCell>
                            <TableCell align="right">Size</TableCell>
                            <TableCell align="right">Color</TableCell>
                            <TableCell align="right">Clarity</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">List Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(row => (
                            <TableRow key={data.indexOf(row)}>
                                <TableCell align="right">{row.shape}</TableCell>
                                <TableCell align="right">{row.size}</TableCell>
                                <TableCell align="right">{row.color}</TableCell>
                                <TableCell align="right">{row.clarity}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.listPrice}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <ul className="diamond-stats">
                <li>Average price = {avgPrice(data)}</li>
                <li>Number of diamonds = {data.length}</li>
                <li>Average discount = {avgDiscount(data)}</li>
            </ul>

            <Button type="home" onClick={() => setShowDiamonds(false)}>
                <FaHome />
            </Button>

        </div>
    )
}

export default ShowDiamonds
