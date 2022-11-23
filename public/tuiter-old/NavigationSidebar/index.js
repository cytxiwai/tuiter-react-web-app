const NavigationSidebar = (page) => {
    if (page == 'home'){
    return (`
        <div class="list-group">
             <a href="../../tuit.html" class="list-group-item list-group-item-action d-flex flex-row">
                 <i class="fab fa-twitter d-flex justify-content-start align-items-center me-2"></i></a>
             <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action active d-flex flex-row">
                 <i class="fas fa-home d-flex justify-content-start align-items-center me-2"></i>
                 <p class="d-none d-xl-block d-flex m-0">Home</p></a>
             <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action d-flex flex-row">
                   <i class="fas fa-hashtag d-flex justify-content-start align-items-center me-2"></i>
                   <p class="d-none d-xl-block d-flex m-0 fw-bold">Explore</p></a>
             <a href="../notifications.html" class="list-group-item list-group-item-action d-flex flex-row">
                   <i class="fas fa-bell d-flex justify-content-start align-items-center me-2"></i>
                   <p class="d-none d-xl-block d-flex m-0">Notification</p></a>
             <a href="../messages.html" class="list-group-item list-group-item-action d-flex flex-row">
                    <i class="fas fa-envelope d-flex justify-content-start align-items-center me-2"></i>
                    <p class="d-none d-xl-block d-flex m-0">Messages</p></a>
             <a href="../bookmarks/index.html" class="list-group-item list-group-item-action d-flex flex-row">
                     <i class="fas fa-bookmark d-flex justify-content-start align-items-center me-2 ps-1"></i>
                     <p class="d-none d-xl-block d-flex m-0">Bookmarks</p></a>
             <a href="../lists.html" class="list-group-item list-group-item-action d-flex flex-row">
                      <i class="fas fa-list-ul d-flex justify-content-start align-items-center me-2 ps-1"></i>
                      <p class="d-none d-xl-block d-flex m-0">Lists</p></a>
             <a href="../profile.html" class="list-group-item list-group-item-action d-flex flex-row">
                      <i class="fas fa-user d-flex justify-content-start align-items-center me-2 ps-1"></i>
                      <p class="d-none d-xl-block d-flex m-0">Profile</p></a>
             <a href="../navigation.html" class="list-group-item list-group-item-action d-flex flex-row">
                       <i class="fas fa-ellipsis-h d-flex justify-content-start align-items-center me-2 ps-1"></i>
                       <p class="d-none d-xl-block d-flex m-0">More</p></a>
        </div>
        <button class="btn btn-primary w-100 mt-3 rounded-pill" type="button" >tuit</button>
    `);}
    else if (page == 'explore'){
        return (`
        <div class="list-group">
             <a href="../../tuit.html" class="list-group-item list-group-item-action d-flex flex-row">
                 <i class="fab fa-twitter d-flex justify-content-start align-items-center me-2"></i></a>
             <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action d-flex flex-row">
                 <i class="fas fa-home d-flex justify-content-start align-items-center me-2"></i>
                 <p class="d-none d-xl-block d-flex m-0">Home</p></a>
             <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action active d-flex flex-row">
                   <i class="fas fa-hashtag d-flex justify-content-start align-items-center me-2"></i>
                   <p class="d-none d-xl-block d-flex m-0 fw-bold">Explore</p></a>
             <a href="../notifications.html" class="list-group-item list-group-item-action d-flex flex-row">
                   <i class="fas fa-bell d-flex justify-content-start align-items-center me-2"></i>
                   <p class="d-none d-xl-block d-flex m-0">Notification</p></a>
             <a href="../messages.html" class="list-group-item list-group-item-action d-flex flex-row">
                    <i class="fas fa-envelope d-flex justify-content-start align-items-center me-2"></i>
                    <p class="d-none d-xl-block d-flex m-0">Messages</p></a>
             <a href="../bookmarks/index.html" class="list-group-item list-group-item-action d-flex flex-row">
                     <i class="fas fa-bookmark d-flex justify-content-start align-items-center me-2 ps-1"></i>
                     <p class="d-none d-xl-block d-flex m-0">Bookmarks</p></a>
             <a href="../lists.html" class="list-group-item list-group-item-action d-flex flex-row">
                      <i class="fas fa-list-ul d-flex justify-content-start align-items-center me-2 ps-1"></i>
                      <p class="d-none d-xl-block d-flex m-0">Lists</p></a>
             <a href="../profile.html" class="list-group-item list-group-item-action d-flex flex-row">
                      <i class="fas fa-user d-flex justify-content-start align-items-center me-2 ps-1"></i>
                      <p class="d-none d-xl-block d-flex m-0">Profile</p></a>
             <a href="../navigation.html" class="list-group-item list-group-item-action d-flex flex-row">
                       <i class="fas fa-ellipsis-h d-flex justify-content-start align-items-center me-2 ps-1"></i>
                       <p class="d-none d-xl-block d-flex m-0">More</p></a>
        </div>
        <button class="btn btn-primary w-100 mt-3 rounded-pill" type="button" >tuit</button>
    `);}
}

export default NavigationSidebar;

//$(NavigationSidebar)