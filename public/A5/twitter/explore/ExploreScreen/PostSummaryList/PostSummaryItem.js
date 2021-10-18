const PostSummaryItem = (posts) => {
    return(`<li class="list-group-item">
                    <div class="row">
                        <div class = "col-7 col-md-9 col-lg-10">
                            <div>
                                ${posts.topic1}
                            </div>
                            <div class = "wd-bold">
                                ${posts.userName}
                                <span class="fa-stack">
                                            <i class="fas fa-certificate fa-stack-2x"></i>
                                            <i class="fas fa-check fa-stack-1x"></i>
                                         </span>
                                <span class = "wd-normal">&middot; ${posts.time}</span>
                            </div>
                            <div class = "wd-bold">
                               ${posts.title}
                            </div>
                            <div>
                                <p class="fg-color-darkgray">${posts.tweets}</p>
                            </div>
                        </div>
                        <div class = "col-5 col-md-3 col-lg-2">
                            <img src=${posts.image} style = "border-radius: 10px"></div>
                    </div>
                </li>
                `)
}
export default PostSummaryItem;