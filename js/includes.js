window.onload = function(){



    // head
    const head_content = `
    <link rel="stylesheet" href="style/reset.min.css">
    <link rel="stylesheet" type="text/css" href="style/style.css">
    <link rel="stylesheet" href="style/header-3.css">
    `;

    const head = document.getElementById('head'); // 追加する部分を取得

    head.insertAdjacentHTML('afterbegin', head_content); // insertAdjacentHTMLでHTMLを追加



    // header
    const header_content = `
    <div class="wrapper site-header__wrapper">
      <div class="site-header__start">
        <a style="margin-left:15px" href="index.html" class="brand">明石高専マップ</a>
      </div>
      <div class="site-header__end">
        <nav class="nav">
          <button class="nav__toggle" aria-expanded="false" type="button">
            <img src="images/menu.png" width="30" height="28">
          </button>
          <ul class="nav__wrapper">
            <li class="nav__item"><a href="map/G.html">G科棟</a></li>
            <li class="nav__item"><a href="map/M.html">M科棟</a></li>
            <li class="nav__item"><a href="map/E.html">E科棟</a></li>
            <li class="nav__item"><a href="map/C.html">C科棟</a></li>
            <li class="nav__item"><a href="map/A.html">A科棟</a></li>
            <li class="nav__item"><a href="map/lib.html">情報センター</a></li>
            <li class="nav__item"><a href="map/eat.html">食堂</a></li>
            <!--  <li class="nav__item"><a href="route/route.html">ルート案内</a></li>  -->
            <li class="nav__item"><a href="images/images.html">マップ画像集</a></li>
          </ul>
        </nav>
      </div>
    </div>
    `;

    const header = document.getElementById('header'); // 追加する部分を取得

    header.insertAdjacentHTML('afterbegin', header_content); // insertAdjacentHTMLでHTMLを追加


    // header-3.js
    let navToggle = document.querySelector(".nav__toggle");
    let navWrapper = document.querySelector(".nav__wrapper");

    navToggle.addEventListener("click", function () {
        if (navWrapper.classList.contains("active")) {
            this.setAttribute("aria-expanded", "false");
            this.setAttribute("aria-label", "menu");
            navWrapper.classList.remove("active");
        } else {
            navWrapper.classList.add("active");
            this.setAttribute("aria-label", "close menu");
            this.setAttribute("aria-expanded", "true");
        }
    });



    // navfooter
    const navfooter_content = `<ul class="navfooter__wrapper">
      <!-- <li class="navfooter__item"><a href="#">QRコード</a></li> -->
      <li class="navfooter__item"><a href="https://github.com/splaika135/NITAC_map">GitHub</a></li>
      <!-- <li class="navfooter__item"><a href="#">参考資料</a></li> -->
    </ul>`;
    
    const navfooter = document.getElementById('navfooter'); // 追加する部分を取得

    navfooter.insertAdjacentHTML('afterbegin', navfooter_content);


    // footer
    const footer_content = `<p>🄫2022~${new Date().getFullYear()} Co+work21(2022)</p>`;

    const footer = document.getElementById('footer'); // 追加する部分を取得

    footer.insertAdjacentHTML('afterbegin', footer_content); // insertAdjacentHTMLでHTMLを追加
}
