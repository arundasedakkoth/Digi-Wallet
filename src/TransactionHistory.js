import {useState} from "react";
import dateFormat from 'dateformat';
import TransactionList from "./TransactionList";
import {DateTime} from 'luxon';
import './components/TransactionHistory.css'

const list = [
    {
        "username": "Lucas Amaeta",
        "email": "lucasamaeta@gmail.com",
        "cost": "289",
        "progress": "Sent",
        "date": "2022-05-01 10:34:23"
      },
    {
        "username": "Lucas Amaeta",
        "email": "lucasamaeta@gmail.com",
        "cost": "289",
        "progress": "Sent",
        "date": "2022-06-01 10:34:23"
      },
    {
        "username": "Lucas Amaeta",
        "email": "lucasamaeta@gmail.com",
        "cost": "289",
        "progress": "Sent",
        "date": "2022-06-01 10:34:23"
      },
    {
        "username": "Lucas Amaeta",
        "email": "lucasamaeta@gmail.com",
        "cost": "289",
        "progress": "Sent",
        "date": "2022-05-01 10:34:23"
      },
    {
        "username": "Abbey Amaeta",
        "email": "lucasamaeta@gmail.com",
        "cost": "289",
        "progress": "Sent",
        "date": "2022-06-06 10:34:23"
      },
]

const TransactionHistory=()=>{
   const [history,sethistory]=useState([]);
   const [filteredHistory, setFilteredHistory] = useState([]);
   useState(()=>{
       fetchtransaction();
   },[])
   async function fetchtransaction(){
       const response=await fetch('https://mocki.io/v1/cbe346f3-0434-42d6-9149-a9d70e918462');
       const data=await response.json();
       sethistory(list);
       setFilteredHistory(list);
   }

   function sortHistory (event){
    const type = event.target.value;
    let startDate = new Date();
    let endDate = new Date();
    switch(type){
        case "M":
            console.log("Sorting by Month");
            startDate = DateTime.now().startOf('month').toJSDate()
            endDate = DateTime.now().endOf('month').toJSDate()
            break;
        case "Y":
            console.log("Sorting by year");
            startDate = DateTime.now().startOf("year").toJSDate()
            endDate = DateTime.now().endOf("year").toJSDate()
            break;
        case "W":
            console.log("Sorting by week");
            startDate = DateTime.now().startOf("week").toJSDate()
            endDate = DateTime.now().endOf("week").toJSDate()
            break;
        default:
            setFilteredHistory(history);
            return;
    }
    const filteredHistory = history.filter(function (historyItem){
            const date = DateTime.fromFormat(historyItem.date, "yyyy-LL-dd hh:mm:ss").toJSDate();
            return date >= startDate && date <= endDate
    })
    setFilteredHistory(filteredHistory);
   }
   

    return(
        <div className="transactionmain">
            <div className="sortlist">
                <div className="flex col justify-content-between">
                    <div>Transaction History</div>
                    <div>
                        <select className="custom-select" onChange={sortHistory}>
                            <option selected>Choose a Filter</option>
                            <option value="W">Weekly</option>
                            <option value="M">Monthly</option>
                            <option value="Y">Yearly</option>
                        </select>
                    </div>
                    {/* <div>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle dot-menu" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Weekly
                            </button>
                            <i className="bi bi-three-dots-vertical"></i>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" type="button" onClick={()=>sortHistory("M")}>Monthly</button>
                            <button className="dropdown-item" type="button" onClick={()=>sortHistory("Y")}>Yearly</button>
                            <button className="dropdown-item" type="button" onClick={()=>sortHistory("")}>No Filter</button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <table className="table table-striped">
                <tbody>
                    {filteredHistory.map((item)=>{
                        return <TransactionList 
                        key={Math.random()}
                        user={item.username}
                        email={item.email}
                        cost={item.cost}
                        status={item.progress}
                        date={dateFormat(item.date, "mmm dd, yyyy")} />
                    })}
                </tbody>
            </table>
        </div>
        // <div className="transactionmain">  
        //     <div className="sortlist">
        //         <div>Transaction History</div>
        //         <div>sort</div>
        //     </div>
        //    {history.map((item)=>{
        //        return <TransactionList 
        //        key={Math.random()}
        //        user={item.username}
        //        email={item.email}
        //        cost={item.cost}
        //        status={item.progress}
        //        date={item.date}
        //        />
        //    }) }
                         
        // </div>
    );
}

export default TransactionHistory;