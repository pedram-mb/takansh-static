export function renderForumNotif (targetId){
    const forumNotif = document.createElement("div")
    forumNotif.className = "forum-notif";
    
    forumNotif.innerHTML = `
        <div class="notifcation-body-card">
        <div class=" p-4 rounded-lg shadow-sm flex items-center justify-betweenspace-x-4 rtl:space-x-reverse">
    <div id="first-section-notif" class="flex-1">

        <div class="flex-row">
            <div id="about-user" class="flex items-center mb-1">
                <p id="comment-title" class="text-gray-700 mb-2">
                    این مقاله خیلی مفید بود، مخصوصاً بخش مقایسه مزایا. ممنون از نویسنده!
                </p>
            </div>
            <div class="notif-content">
                <i class="material-icons">mail_outline</i>
                <span>متن ساختگی با تولید سادگی نامفهم</span>
            </div>
        </div>
            </div>
            <div id="like-user" class="flex space-x-4 rtl:space-x-reverse text-sm text-gray-500">
                <i class="material-icons">close</i>
            </div>
    </div>
        </div>
    `
    const target = document.getElementById(targetId);
    if(target) target.appendChild(forumNotif);
}