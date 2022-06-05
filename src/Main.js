import React from 'react';

// import Sidebar from './sidebar';
import Account from './Account';
import TransactionHistory from './TransactionHistory';
import LineChart from './LineChart';

class Main extends React.Component {

    render() {
        return (
            <div>
                <div 
                    className="row">
                    <Account />
                    <div className="flex mt-5 ml-3">
                        <TransactionHistory />
                        <LineChart />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;