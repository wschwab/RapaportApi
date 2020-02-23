import React, { useState, useEffect } from 'react'

const ShowDiamonds = () => {
    const [data, setData] = useState({ diamonds: [] })

    useEffect(() => {
        axios.get('diamonds')
            .then(res => {
                setData({
                    diamonds: res.data
                })
            })
            .catch(err => {
                console.err(err)
            })
    })

    const avgPrice = data => {
        let summed = 0;
        data.diamonds.forEach(diamond => summed += diamond.price);
        const average = summed / data.length;

        return average.toFixed(2)
    }

    const avgDiscount = data => {
        let summed = 0;
        data.diamonds.forEach(diamond => summed += diamond.listPrice - diamond.price);
        const average = summed / data.length;

        return average.toFixed(2)
    }

    return (
        <div>
            <table className="diamond-table">
                <tr>
                    <th>Shape</th>
                    <th>Size</th>
                    <th>Color</th>
                    <th>Clarity</th>
                    <th>Price</th>
                    <th>List Price</th>
                </tr>
                {data
                    ? data.diamonds.map(diamond => (
                        <tr className="diamond-table__row">
                            <td>{diamond.shape}</td>
                            <td>{diamond.size}</td>
                            <td>{diamond.color}</td>
                            <td>{diamond.clarity}</td>
                            <td>{diamond.price}</td>
                            <td>{diamond.listPrice}</td>
                        </tr>
                    :
                        <tr className="no-diamond__row">
                            <td rowspan="6">No diamonds to display</td>
                        </tr>
                    ))
                }
            </table>
            <ul className="diamond-stats">
                <li>Average price = {avgPrice(data)}</li>
                <li>Number of diamonds = {data.diamonds.length}</li>
                <li>Average discount = {avgDiscount(data)}</li>
            </ul>
        </div>
    )
}

export default ShowDiamonds