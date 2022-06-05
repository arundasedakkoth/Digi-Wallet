import './components/TransactionList.css'

const TransactionList = (props) => {
  let setcolor
  let setarrow
  if (props.status === "Sent") {
      setcolor = "green";
      setarrow = "fa-arrow-trend-down"
  } else if (props.status === "Pending") {
      setcolor="orange"
      setarrow = "fa-loader"
  } else if (props.status === "Received") {
      setcolor="blue"
      setarrow = "fa-arrow-trend-up"
  }
    else {
      setcolor="red"
      setarrow = "fa-loader"
  }

  return (
    // <div className="mainlist">
    //   <span className="circle"></span>
    //   <div className="namesec">
    //     <span>{props.user}</span>
    //     <span>{props.email}</span>
    //   </div>
    //   <span className={`price  `}>{props.cost}</span>
    //   <span className={`status ${setcolor}   `}>{props.status}</span>
    //   <span className="date">{props.date}</span>
    // </div>
    <tr>
        <th scope="row"> <div className="avatar"></div> </th>
        <td> <h6 className="user-name">{props.user}</h6> <span className = "avatar_email">{props.email}</span> </td>
        <td> <i className={`fa-solid ${setarrow}`}></i> ${props.cost}</td>
        <td className="trantype"> <button type="button" className={`btn btn-sm progress-btn status ${setcolor}`}>{props.status}</button> </td>
        <td><i className="fa-solid fa-calendar"></i>  {props.date}</td>
    </tr>
  )
}

export default TransactionList;