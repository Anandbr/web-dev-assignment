import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";


const WhoToFollowList = () => {
    return(`
            <ul class="list-group" >
            <li class="list-group-item" style="background-color: #282626">Who To Follow</li>
            ${
                who.map(whos => {
                    return(WhoToFollowListItem(whos));
                }).join('')
            }
            </ul>
    `);
}
export default WhoToFollowList;