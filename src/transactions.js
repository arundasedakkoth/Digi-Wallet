import React from 'react';

// import Transaction from './transaction';

function Transactions() {
    const url = 'https://mocki.io/v1/94bece71-5d3c-4a80-8fa4-39595d34b1b4';
    // async function fetchData(){
    //     const response = await fetch(url);
    //     const data =  await response.json();
    //     console.log(data);
    // }

    function fetchData(){
        return fetch(url,
        {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((responseData) => {
                return responseData;
        })
    }
    
    return( 
            <div className="transactions mt-3 ml-2" id="transactions">
                 {fetchData().then((response) => { 
                     response.map((val, key) => {
                         console.log(val.username);
                        return  (
                            <tr>
                                <th scope="row"> <div className="avatar"></div> </th>
                                <td> <p>{val.username}</p> <span className = "avatar_email">{val.email}</span> </td>
                                <td> <i className="fa-solid fa-arrow-trend-down arrow-down"></i>$ {val.cost}</td>
                                <td className="trantype"> <button type="button" className="btn btn-success btn-sm progress-btn">{val.progress}</button> </td>
                                <td><i className="fa-solid fa-calendar"></i>{val.date}</td>
                            </tr>
                        )
                     })
                 })}
            </div>
    )

    }
export default Transactions

                // <table className="table table-striped">
                //     <tbody>
                //         {transjson.map(showTrans)}
                //     </tbody>
                // </table>