import {useState} from "react";
import {DateTime} from 'luxon';
import dateFormat from 'dateformat';
import Transaction from './Transaction';
import './components/TransactionHistory.css';

const TransactionHistory=()=>{
   const [history,sethistory] = useState([]);
   const [filteredHistory, setFilteredHistory] = useState([]);
   useState(()=>{
       fetchtransaction();
   },[])
   async function fetchtransaction(){
       const response=await fetch('https://mocki.io/v1/cbe346f3-0434-42d6-9149-a9d70e918462');
       const data=await response.json();
       sethistory(data);
       setFilteredHistory(data);
   }

   function sortHistory (event){
    const type = event.target.value;
    let startDate = new Date();
    let endDate = new Date();
    switch(type){
        case "M":
            startDate = DateTime.now().startOf('month').toJSDate()
            endDate = DateTime.now().endOf('month').toJSDate()
            break;
        case "Y":
            startDate = DateTime.now().startOf("year").toJSDate()
            endDate = DateTime.now().endOf("year").toJSDate()
            break;
        case "W":
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
        <div className="flex row">
            <div className="flex">
                <div className="flex col justify-content-between my-2">
                    <div>
                        <h3 className="sechead">Transaction History</h3>
                    </div>
                    <div>
                        <select className="custom-select" onChange={sortHistory}>
                            <option selected>Filter</option>
                            <option value="W">Weekly</option>
                            <option value="M">Monthly</option>
                            <option value="Y">Yearly</option>
                        </select>
                    </div>
                </div>
            </div>
            <table className="table table-striped">
                <tbody>
                    {filteredHistory.map((item)=>{
                        return <Transaction 
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
    );
}

export default TransactionHistory;