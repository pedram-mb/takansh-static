export function renderUserComments (targetId){
    const userComments = document.createElement('div');
    userComments.className = "user-comments";
    
    userComments.innerHTML = `
    <div class="bg-white p-4 rounded-lg shadow-sm flex items-center justify-betweenspace-x-4 rtl:space-x-reverse">
    <div class="flex-1">
        <div class="flex-row">
        <div id="about-user" class="flex items-center mb-1">
        <img src="../../assets/image/sidebar/Avatar.svg" alt="avatar" class="w-10 h-10 rounded-full">
                <p class="font-semibold text-gray-800">کاربر نمونه</p>
                <span class="text-sm text-gray-400">۲ روز پیش</span>
            </div>
        </div>
            <p id="comment-title" class="text-gray-700 mb-2">
                این مقاله خیلی مفید بود، مخصوصاً بخش مقایسه مزایا. ممنون از نویسنده!
            </p>
            <div class="comment-content">
                <i class="material-icons">mail_outline</i>
                <span>متن ساختگی با تولید سادگی نامفهم</span>
            </div>
            </div>
            <div id="like-user" class="flex space-x-4 rtl:space-x-reverse text-sm text-gray-500">
                <button id="comment-btn" class="hover:text-blue-600">پاسخ</button>
                <span>|</span>
                <button class="hover:text-red-500">❤️</button>
            </div>
    </div>
    `
    const target = document.getElementById(targetId)
    if(target) target.appendChild(userComments)
}