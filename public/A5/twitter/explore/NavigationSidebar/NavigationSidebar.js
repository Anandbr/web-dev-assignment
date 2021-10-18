const NavigationSidebar = (active) => {
    let screen = (active === 'home') ? 'wd-active' : '';
    let screen1 = (active === 'explore') ? 'wd-active' : '';
    return(`
            <div class="list-group" >
                <a class="list-group-item" href="#"><i class="fab fa-twitter"></i> </a>
                <a class="list-group-item ${screen}" href="/web-dev/public/A5/twitter/HomeScreen/home.html"><i class="fas fa-home me-2"></i><span class="d-none d-xl-inline">Home</span></a>
                <a class="list-group-item ${screen1}" href="/web-dev/public/A5/twitter/explore/explore.html"><i class="fas fa-hashtag me-2"></i><span class="d-none d-xl-inline">Explore</span></a>
                <a class="list-group-item " href="#"><i class="fas fa-bell me-2"></i><span class="d-none d-xl-inline">Notifications</span></a>
                <a class="list-group-item" href="#"><i class="fas fa-envelope me-2"></i><span class="d-none d-xl-inline">Messages</span></a>
                <a class="list-group-item" href="#"><i class="fas fa-bookmark me-2"></i><span class="d-none d-xl-inline">Bookmarks</span></a>
                <a class="list-group-item" href="#"><i class="fas fa-list me-2"></i><span class="d-none d-xl-inline">Lists</span></a>
                <a class="list-group-item" href="#"><i class="fas fa-user-alt me-2"></i><span class="d-none d-xl-inline">Profile</span></a>
                <a class="list-group-item" href="#"><i class="fas fa-ellipsis-h me-2"></i><span class="d-none d-xl-inline">More</span></a>
            </div>
            <button class="btn btn-primary wd-tweetButton mt-2" style="border-radius : 20px" >Tweet</button>

    `);
}
export default NavigationSidebar;

