export function renderAllPost(targetId){
    const allPost = document.createElement('div');
    allPost.className = 'topic-all-post';

    allPost.innerHTML = `
        <div class="topic-continer">
            <div class="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm">
        <div id="topic-heading" class="flex-col  items-center space-x-2 rtl:space-x-reverse">
            <h2 class="text-sm text-gray-700">گروپ لیسنینگ چیست؟ مزایا و معایب گروپ لیسنینگ</h2>
            <button id="tags" class="bg-orange-100 text-orange-600 text-sm px-3 py-1 rounded-full">مزایای فریلنسری</button>
        </div>
            <div class="flex items-center space-x-2 rtl:space-x-reverse">
            <span id="rewiew" class="text-gray-500">بازدید 12222</span>
            <span id="rewiew" class="text-gray-500 mx-4">323232❤️</span>
            <div  class="flex -space-x-2 rtl:space-x-reverse">
            <img src="https://i.pravatar.cc/32?img=1" class="w-8 h-8 rounded-full border-2 border-white" />
            <img src="https://i.pravatar.cc/32?img=2" class="w-8 h-8 rounded-full border-2 border-white" />
            <img src="https://i.pravatar.cc/32?img=3" class="w-8 h-8 rounded-full border-2 border-white" />
            <div class="w-8 h-8 rounded-full bg-gray-200 text-xs flex item s-center justify-center border-2 border-white">+90</div>
            </div>
            <span id="rewiew" class="text-gray-600 mx-2">56 نظر</span>
            <button id="topic-btn" class="border border-gray-300 px-4 py-1 rounded-lg">ویرایش</button>
            <button id="close-btn" class="bg-red-500 text-white px-3 py-1 rounded-lg">✕</button>
            </div>
        </div>
        </div>

    `
    const target = document.getElementById(targetId);
    if(target) target.appendChild(allPost)
}