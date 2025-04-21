export function renderPostCards(targetId){
    const postCards = document.createElement("div");
    postCards.className = "post-cards";

    postCards.innerHTML = `
        <div class="post-card">
            <div class="card-image">
                <img src="../../assets/image/sidebar/1.svg" alt="تصویر کارت" />
            </div>
            <div class="card-left">
                <h2 class="card-title">گروپ لنسیگ چیست؟ مزایا و معایب گروپ لنسیگ</h2>
                <div class="tag-btn">
                    <div class="tags">
                        <span class="tag">آموزش</span>
                        <span class="tag">دلار</span>
                        <span class="tag">درآمد دلاری</span>
                    </div>
                    <button class="back-btn">←</button>
                </div>
                <div class="author">
                    <img src="../../assets/image/sidebar/Avatar.svg" alt="آواتار" class="avatar" />
                    <div class="author-info">
                        <span class="name">شیدا گودرزی</span>
                        <span class="time">۳ هفته پیش</span>
                    </div>
                    <div class="meta">
                        <span>بازدید ۶۵۱,۳۲۴ </span>
                        <span>❤️ ۳۶۶۵۶۴۵</span>
                        <span>نظر ۵۶</span>
                    </div>
                </div>
        </div>

  
        
    `
    const target = document.getElementById(targetId)
    if(target) target.appendChild(postCards)
}