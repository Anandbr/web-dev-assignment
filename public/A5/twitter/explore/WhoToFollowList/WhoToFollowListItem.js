const WhoToFollowListItem = (who) => {
    return(`
                <li class="list-group-item" style="background-color: #282626" ">
                    <div class="row">
                        <div class="col-2 col-lg-3 col-xl-3">
                            <img src=${who.avatarIcon} style="border-radius: 50px">
                        </div>
                        <div class="col-8 col-lg-7 col-xl-6 wd-bold">
                            ${who.userName}
                            <span class="fa-stack fa">
                                <i class="fas fa-certificate fa-stack-2x"></i>
                                <i class="fas fa-check fa-stack-1x"></i>
                            </span>
                            <div class="wd-normal">
                                ${who.handle1}
                            </div>
                        </div>
                        <div class="col-2 col-lg-2 col-xl-3">
                            <button class="btn btn-primary wd-roundedButton" style="border-radius: 20px">Follow</button>
                        </div>
                    </div>
                </li>`)
}
export default WhoToFollowListItem;

