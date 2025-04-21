export function renderForumCategory(targetId){
    const category = document.createElement("div");
    category.className = "forum-categoury";

    category.innerHTML = `
        <div class="all-post">
            <i class="material-icons">post_add</i>
            <a href="../../../pages/forum/myTopic.html">همه پست های من</a>
            <span class="numof">53</span>
        </div>
        <span>|</span>
        <div class="user-post">
            <i class="material-icons">edit_note</i>
            <a href="../../../pages/forum/userComments.html">نظرات کاربران</a>
            <span class="numof">10</span>
        </div>
                <span>|</span>
         <div class="fav-post">
            <i class="material-icons">notifications_active</i>
            <a href="../../../pages/forum/postLiks.html">پست های مورد علاقه</a>
            <span class="numof">53</span>
        </div>
                <span>|</span>
         <div class="notif">
            <i class="material-icons">notifications_active</i>
            <a href="../../../pages/forum/forumNotif.html">نوتیفیکیشن</a>
            <span class="numof">53</span>
        </div>
    `;
    const target = document.getElementById(targetId);
    if(target) target.appendChild(category)
}