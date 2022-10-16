const PostSummaryItem = (posts) => {
        if($(posts.tweets != '')) {
            return (`
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-8">
                            <div class="wd-font-color">${posts.topic}</div>
                                <div class="fw-bolder">${posts.userName}<span class="font-weight-normal wd-font-color"> -${posts.time}</span></div>
                                <div class="fw-bolder">${posts.title}</div>
                                   <div class="wd-font-color">${posts.tweets}</div>
                            </div>
                        <div class="col-4">
                            <img src="${posts.image}" class="float-end rounded" height="100px" width="100px"/>
                        </div>
                    </div>
                </li>
            `);}
        else {
            return (`
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-8">
                            <div class="wd-font-color">${posts.topic}</div>
                            <div class="fw-bolder">${posts.userName}<span class="font-weight-normal wd-font-color"> -${posts.time}</span></div>
                            <div class="fw-bolder">${posts.title}</div>
                        </div>
                        <div class="col-4">
                            <img src="${posts.image}" class="float-end rounded" height="100px" width="100px"/>
                        </div>
                    </div>
                </li>
            `);
        }

}

export default PostSummaryItem;