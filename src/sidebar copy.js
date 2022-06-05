import React from 'react';

const test = (e) => {
    let icons = document.getElementsByClassName('icon');
    for(var i =0; i < icons.length; i++) {
        console.log("icons");
        // $(icons[i]).removeClassName('bg-white');
    };
    // $(e).addClassName('bg-white');
}

export default class Sidebar extends React.Component {
    
a
    render() {
        return (
            <div className="flex flex-col items-center w-20 h-full overflow-hidden text-gray-700 bg-gray-100 rounded mt-5" id="sidebar" >
                <div className="flex flex-col items-center  border-gray-300" id = "sidebar-icons" >
                    <div className="flex items-center justify-center w-20 h-14 p-3 rounded-l-lg hover:bg-white icon" id = "envelope" onClick={test(this)}>
                        <a href="/" ><i className="fa-solid fa-2xl fa-envelope"></i></a>
                    </div>

                    <div className="flex items-center justify-center w-20 h-14 p-3 rounded-l-lg hover:bg-white icon" id = "bell" onClick={test(this)}>
                        <a href="/"><i className="fa-solid fa-2xl fa-bell"></i></a>
                    </div>

                    <div className="flex items-center justify-center w-20 h-14 p-3 bg-white hover:bg-white rounded-l-lg icon" id = "grip" onClick={test(this)}>
                        <a href="/"><i className="fa-solid fa-2xl fa-grip"></i></a>
                    </div>

                    <div className="flex items-center justify-center w-20 h-14 p-3 rounded-l-lg hover:bg-white icon" id = "retweet" onClick={test(this)}>
                        <a href="/"><i className="fa-solid fa-2xl fa-retweet"></i></a>
                    </div>

                    <div className="flex items-center justify-center w-20 h-14 p-3 rounded-l-lg hover:bg-white icon" id = "arrow" onClick={test(this)}>
                        <a href="/"><i className="fa-solid fa-2xl fa-arrow-trend-up side-grey"></i></a>
                    </div>

                    <div className="flex items-center justify-center w-20 h-14 p-3 rounded-l-lg hover:bg-white icon" id = "gear" onClick={test(this)} >
                        <a href="/"><i className="fa-solid fa-2xl fa-gear"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}