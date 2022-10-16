import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <!-- search field and cog -->
                 <div class="row w-100 pe-1 d-flex">
                    <div class="col-11">
                        <div class="position-relative">
                            <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter" type="text">
                            <span><i class="fas fa-search position-absolute wd-search-tuiter"></i></span>
                        </div>
                    </div>
                        <div class="col-1">
                        <span class="d_inline_block text-primary"><i class="fas fa-cog fs-3 pb-1  d-flex justify-content-end align-items-center"></i></span>
                    </div>
                </div>
           </div>

           <ul class="nav mb-2 nav-tabs mt-2 pb-2 w-100">
                <!-- tabs -->
                    <li class="nav-item"><a class="nav-link active" href="for-you.html">For you</a></li>
                    <li class="nav-item"><a class="nav-link" href="trending.html">Trending</a></li>
                    <li class="nav-item"><a class="nav-link" href="news.html">News</a></li>
                    <li class="nav-item"><a class="nav-link" href="sports.html">Sports</a></li>
                    <li class="nav-item"><a class="nav-link" href="entertainment.html">Entertainment</a></li>
           </ul>


           <!-- image with overlaid text -->
           <div class="position-relative mb-2">
                <img src="../../images/starship.jpeg" class="w-100">
                <h1 class="position-absolute bottom-0 left-0 text-secondary">SpaceX's Starship</h1>
           </div>


                ${PostSummaryList()}
    `);
}
export default ExploreComponent;

