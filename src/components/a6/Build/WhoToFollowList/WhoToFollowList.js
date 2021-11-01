import WhoToFollowListItem from "./WhoToFollowListItem";
import React from "react";
import who from "./who.json";


const WhoToFollowList = () => {
    return(
        <>
            <ul className="list-group" >
            <li className="list-group-item" style={{"backgroundColor": "#282626", "max-width": "100%", "height": "auto"}}>Who To Follow</li>
            {
                who.map(who => {
                    return(<WhoToFollowListItem who = {who}/>);
                })
            }
            </ul>
        </>
    );
}
export default WhoToFollowList;

