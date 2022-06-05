import React from 'react';

import data from './components/acdetails';
import chip from './components/chip.png';

export default class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            acNumber: '',
            name: '',
            cardNum: '',
            typeOfCard: '',
            nameOfCard: '',
            balance: '',
            spent: '',
            validThru: ''


        })
    }

    getAcDetails() {
        this.setState({
            acNumber: data.acNumber,
            name: data.name,
            cardNum: data.cardNum,
            typeOfCard: data.typeOfCard,
            nameOfCard: data.nameOfCard,
            balance: data.balance,
            spent: data.spent,
            validThru: data.expiry
        })
    }

    componentDidMount(){
        this.getAcDetails();
    }

    render() {
        return (
            <div className="mx-2 my-5 row">
                <h3 className="pagehead ml-20">Dashboard</h3>
                <div className="card flex typecard text-white bg-dark mx-2 my-1 xs:mb-3 sm:mb-3">
                    <div className="card-header spcbtwn">
                        <h6 className="debitcard">{this.state.typeOfCard}</h6>
                        <h5 className="namecard">{this.state.nameOfCard}</h5>
                    </div>
                    <div className="card-body">
                        <img src={chip} alt="chipimage" className="chipimage"/>
                    <h5 className="card-title cardnum">{this.state.cardNum}</h5>
                    </div>
                    <div className="card-footer">
                        <h6 className="name">{this.state.name}</h6>
                    </div>
                </div>

                <div className="card flex spent text-white mx-2 my-1  bg-dark xs:mb-3 sm:mb-3">
                    <div className="card-header">
                        <h3>Spent</h3>
                        <div className="dropdown">
                            <a className="btn dropdown-toggle" href='link' role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            This Week
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a className="dropdown-item" href='link'>Monthly</a></li>
                                <li><a className="dropdown-item" href='link'>Yearly</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="card-body">
                    </div>
                    <div className="card-footer">
                        <h2 className="amount">$ {this.state.spent}</h2>
                    </div>
                </div>

                <div className="card flex balance text-white  mx-2 my-1  bg-dark xs:mb-3 sm:mb-3">
                    <div className="card-header">
                        <h3>Balance</h3>
                    </div>
                    <div className="card-body">
                    </div>
                    <div className="card-footer">
                        <h2 className="amount">$ {this.state.balance}</h2>
                    </div>
                </div> 
            </div>
        )
    }
}