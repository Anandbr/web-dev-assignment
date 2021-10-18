const PostItem = (posts) => {
    return(`<li class="list-group-item ">

                    <div class="row">
                        <div class = "col-2">
                            <img src=${posts.avatarIcon1} style="border-radius: 50%; width: 60px; height: 60px">
                        </div>
                        <div class = "col-9">
                            ${posts.userName}
                            <span class="fa-stack fa">
                                <i class="fas fa-certificate fa-stack-2x"></i>
                                <i class="fas fa-check fa-stack-1x"></i>
                            </span>
                            <span>
                                 ${posts.handle1} &middot; ${posts.time}
                            </span>
                            <div>
                            ${posts.caption}
                            </div>    
                        </div>
                        <div class="col-1">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                    <ul class="list-group" style="border-radius: 40px">
                    <li class="list-group-item" >
                    <div class = "row">
                        <img src=${posts.image} style="border-radius: 40px"/>
                    </div>
                    </li>
                    <li class="list-group-item">
                    <div class = "row">
                        <div>
                        ${posts.header}
                        </div>
                        <div>
                            ${posts.description}
                        </div>
                        <div>
                        ${posts.tag}
                        </div>
                    </div>
                    </li>
                   </ul>
                    <div class="row">
                        <div class = "col">
                            <a href = "#" class="hyperlink-no-border">
                             <i class="far fa-comment"></i> <span class="count-color">${posts.comments}</span>
                            </a>
                        </div>
                        <div class="col">
                            <a href = "#" class="hyperlink-no-border">
                             <i class="fas fa-retweet"></i> <span class="count-color">${posts.retweet}</span>
                            </a>
                        </div>
                        <div class = "col">
                            <a href = "#" class="hyperlink-no-border">
                             <i class="fas fa-heart"></i>  <span class="count-color">${posts.likes}</span>
                            </a>
                        </div>
                        <div class="col">
                            <a href = "#" class="hyperlink-no-border">
                             <i class="fas fa-share"></i>
                            </a>
                        </div>
                    </div>
                </li>
               
                `)
}
export default PostItem;