import React from "react";

const WhoToFollowListItem = ( {
                                  who = {
                                      avatarIcon: '../../NASA.png',
                                      userName: 'NASA',
                                      handle: 'NASA',
                                  }
                              }) => {
    return(
                <li className="list-group-item" style={{"backgroundColor": "#282626"}}>
                    <div className="row">
                        <div className="col-2 col-lg-3 col-xl-3">
                            <img src={who.avatarIcon} style={{"borderRadius": "50px", "max-width": "100%", "height": "auto"}}/>
                        </div>
                        <div className="col-8 col-lg-7 col-xl-6 wd-bold">
                            {who.userName}
                            <span className="fa-stack fa">
                                <i className="fas fa-certificate fa-stack-2x"></i>
                                <i className="fas fa-check fa-stack-1x"></i>
                            </span>
                            <div className="wd-normal">
                                {who.handle1}
                            </div>
                        </div>
                        <div className="col-2 col-lg-2 col-xl-3">
                            <button className="btn btn-primary wd-roundedButton" style={{"bordeRadius": "20px"}}>Follow</button>
                        </div>
                    </div>
                </li>
    );
}
export default WhoToFollowListItem;

