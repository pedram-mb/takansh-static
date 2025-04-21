export function renderHeader(targetId){
    const header = document.createElement("div");
    header.className = 'header-content';

    header.innerHTML = `
            <img src="../../assets/image/sidebar/logo.svg" alt="logo" />
            <ul class="menu">
                <li class="menu-item"><i class="material-icons">home</i><a href="#">خانه</a></li>
                <li class="menu-item"><i class="material-icons">post_add</i><a href="#">انجمن اکادمی تکانش</a></li>
                <li class="menu-item"><i class="material-icons">edit_note</i><a href="#">انجمن گروپلسنیگ</a></li>
            </ul>
            <div class="user">        
                <div class="header-user">
                    <img src="../../assets/image/sidebar/Avatar.svg"/>
                    <div class="autor">
                        <p>تیدا گودرزی</p>
                        <span>دانشجوی اپورک</span>
                    </div>
                </div>
                <span class="divider">|</span>
                <button class="header-btn">دریافت اطلاعات از تکانش 
                <i class="material-icons">support_agent</i>
                </button>
            </div>     
    `;
    const target = document.getElementById(targetId);
    if(target) target.appendChild(header)
}
