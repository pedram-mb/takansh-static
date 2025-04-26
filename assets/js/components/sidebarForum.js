export function renderSidebar(targetId) {
    const sidebar = document.createElement('div');
    sidebar.className = 'sidebar-content';
  
    sidebar.innerHTML = `
      <div class="search-box">
        <input class="in-search" placeholder="سرچ کنید ..." type="text"/>
        <i class="material-icons">search</i>
      </div>  

      <div class="sidebar-first-box">
        <h4>دسته بندی ها</h4>
        <ul class="side-menu">
          <li class="men-item"><i class="material-icons blue">help_center</i><a href="../../../pages/forum/myTopic.html">تاپیک های من</a></li>
          <li class="men-item"><i class="material-icons green">tips_and_updates</i><a href="../../../pages/forum/askedQuestion.html">سوالات متداول</a></li>
          <li class="men-item"><i class="material-icons orange">text_snippet</i><a href="">اخبار تکانش</a></li>
        </ul>
      </div> 

      <div class="sidebar-second-box">
        <div class="content">
          <div class="first-item">
            <i class="material-icons">groups</i>
            <div class="box-body">
              <a href="#">اخرین اطلاعات</a>
              <span>جدیدترین و بروزترین مقالات</span>
            </div>
          </div>
          <div class="second-item">
            <i class="material-icons">travel_explore</i>
            <div class="box-body">
              <a href="#">اخرین اطلاعات</a>
              <span>جدیدترین و بروزترین مقالات</span>
            </div>
          </div>
          <div class="therd-item">
            <i class="material-icons">emoji_events</i>
            <div class="box-body">
            <a href="#">اخرین اطلاعات</a>
            <span>جدیدترین و بروزترین مقالات</span>
          </div>
          </div>
        </div>
      </div> 

      <div class="sidebar-therd-box">
        <h4>جدیدترین موضوعات</h4>
        <div class="cards">
          <img src="../../assets/image/sidebar/1.svg" alt="image">
          <div class="cards-body">
            <p> دوره های رایگان</p>
            <i class="material-icons">schedule</i>
            <span>14:15:16</span>
            <span id="divider">|</span>
            <span>29 دی 1304</span>
        </div>  
    `;
  
    const target = document.getElementById(targetId);
    if (target) target.appendChild(sidebar); 
  }
  