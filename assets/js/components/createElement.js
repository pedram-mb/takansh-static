export function renderElement(targetId){
    const contentInput = document.createElement("div");
    contentInput.className = "content-Input";
    
    contentInput.innerHTML = `
        <div class="main-input">
            <div class="input-img">
                <img src="../../assets/image/sidebar/Avatar.svg" alt="avatar-logo"/>
            </div>
            <div class="input-placeholder">
                <input type="text" placeholder="متن تستی خود را اینجا بنویسید"/>
            </div>
            <div class="input-btn">
                <button class="btn">اینجا کلیک کنید</button>
            </div>
        </div>
    `;
    const target = document.getElementById(targetId);
    if(target) target.appendChild(contentInput)
}