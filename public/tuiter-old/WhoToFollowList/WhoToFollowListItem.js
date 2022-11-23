

const WhoTOFollowListItem = (who) => {
    return (`
    <li class="list-group-item list-color-2">
        <div class="d-flex flex-row-reverse">
            <div class="d-flex flex-fill">
                <img src="${who.avatarIcon}" width="45px"  height="47px" class="float-start rounded">
            <div class="ms-2 d-flex flex-column flex-fill">
                <h5 class="fw-bold mb-0 mt-2 ms-1 wd-font-size">${who.userName}</h5>
                <h6 class="ms-1 wd-font-color wd-font-size-2">@${who.handle}</h6>
            </div>
            <div class="text-end d-flex justify-content-end align-items-center">
                <button class="btn btn-primary rounded-pill" type="button">Follow</button>
            </div>
         </div>
    </li>
     `);
}

export default WhoTOFollowListItem;