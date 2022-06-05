import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="flex flex-col items-center w-20 h-full overflow-hidden text-gray-700 rounded justify-center" >
                    <NavLink to="/messages">
                        <div
                            className={`flex items-center justify-center w-20 h-14 p-3 rounded-l-lg hover:bg-white icon`} 
                            id="envelope" >
                                <i className="fa-solid fa-2xl fa-envelope"></i>
                        </div>
                    </NavLink>
                    <NavLink to="/notifications">
                        <div 
                            className={`flex items-center justify-center w-20 h-14 p-3 rounded-l-lg hover:bg-white icon`} 
                            id = "bell" >
                                <i className="fa-solid fa-2xl fa-bell"></i>
                        </div>
                    </NavLink>

                    <NavLink to="/">
                        <div 
                            className={`flex items-center justify-center w-20 h-14 p-3 rounded-l-lg hover:bg-white icon`} 
                            id = "grip" >
                                <i className="fa-solid fa-2xl fa-grip"></i>
                        </div>
                    </NavLink>
                    <NavLink to="/history">
                        <div 
                            className={`flex items-center justify-center w-20 h-14 p-3 rounded-l-lg hover:bg-white icon`} 
                            id = "retweet" >
                                <i className="fa-solid fa-2xl fa-retweet"></i>
                        </div>
                    </NavLink>
                    <NavLink to="/savings">
                        <div 
                            className={`flex items-center justify-center w-20 h-14 p-3 rounded-l-lg hover:bg-white icon`} 
                            id = "arrow" >
                                <i className="fa-solid fa-2xl fa-arrow-trend-up side-grey"></i>
                        </div>
                    </NavLink>
                    <NavLink to="/settings">
                        <div 
                            className={`flex items-center justify-center w-20 h-14 p-3 rounded-l-lg hover:bg-white icon`} 
                            id = "gear"  >
                                <i className="fa-solid fa-2xl fa-gear"></i>
                        </div>
                    </NavLink>
                </div>
        )
    }
}