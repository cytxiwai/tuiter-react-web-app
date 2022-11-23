
const PostItem = (posts) => {
    if ($(posts.style == '1')){
        return(`
         <li class="list-group-item d-flex flex-row">
             <div class=" d-flex float-start me-2">
                 <img src="${posts.userImage}" width="40px" height="40px" class="rounded-circle">
             </div>
             <div class=" ms-2 mt-2 d-flex flex-column">
                 <div class="d-flex flex-row pb-3">
                    <span class="ms-2 d-flex flex-row flex-fill">
                        <h6 class=" mb-0 me-2">${posts.userName}</h6>
                        <h6 class="mb-0 text-secondary d-flex align-items-base">@${posts.handler}</h6>
                        <h6 class="mb-0 text-secondary"> - ${posts.time}</h6>
                    </span>
                     <div class="d-flex flex-fill justify-content-end"><i class="fas fa-ellipsis-h"></i></div>
                 </div>
                 <div>
                    <h6 class ="mb-3 ms-2 me-1">${posts.title}</h6>
                 </div>
                 <div>
                     <img src="${posts.image}" class="w-100 rounded-top border border-secondary border-2">
                 </div>
                 <div class="rounded-bottom border border-secondary border-2 p-2">
                     <h6 class="fw-bold">${posts.topic}</h6>
                     <h6 class="">${posts.content}</h6>
                     <a href="#" class="nav-link">${posts.link}</i></a>
                 </div>
                 <ul class="d-flex flex-row p-0">
                     <li class="list-group-item flex-fill ps-1"><i class="far fa-comment"></i>${posts.comment}</li>
                     <li class="list-group-item flex-fill ps-1"><i class="fas fa-retweet"></i>${posts.retweets}</li>
                     <li class="list-group-item flex-fill ps-1"><i class="fas fa-heart"></i>${posts.likes}</li>
                     <li class="list-group-item flex-fill ps-1"><i class="fas fa-share"></i></li>
                 </ul>
             </div>
         </li>
      `);}
    else {
        return(`
        <li class="list-group-item d-flex flex-row">
            <div class=" d-flex float-start me-2">
                <img src="${posts.userImage}" width="40px" height="40px" class="rounded-circle">
            </div>
            <div class="ms-2 mt-2 d-flex flex-column">
                <div class="d-flex flex-row pb-3">
                      <span class="ms-2 d-flex flex-row flex-fill">
                            <h6 class=" mb-0 me-2">${posts.userName}</h6>
                            <h6 class="mb-0 text-secondary d-flex align-items-base">@${posts.handler}</h6>
                            <h6 class="mb-0 text-secondary"> - ${posts.time}</h6>
                      </span>
                <div class="d-flex flex-fill justify-content-end"><i class="fas fa-ellipsis-h"></i></div>
            </div>
            <div>
                <h6 class ="mb-3 ms-2 me-1">${posts.title}</h6>
            </div>
            <div>
               <img src="${posts.image}" class='w-100 rounded'>
            </div>
            <ul class="d-flex flex-wrap">
               <li class="list-group-item flex-fill ps-1"><i class="far fa-comment"></i>${posts.comment}</li>
               <li class="list-group-item flex-fill ps-1"><i class="fas fa-retweet"></i>${posts.retweets}</li>
               <li class="list-group-item flex-fill ps-1"><i class="fas fa-heart"></i>${posts.likes}</li>
               <li class="list-group-item flex-fill ps-1"><i class="fas fa-share"></i></li>
            </ul>
            </div>
        </li>
    `);
    }
}

export default PostItem;