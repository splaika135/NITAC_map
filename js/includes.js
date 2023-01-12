window.onload = function(){



    // head
    let head_content = 
    '<meta charset="utf-8">'+
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
    '<link rel="stylesheet" href="style/reset.min.css">'+
    '<link rel="stylesheet"　type="text/css" href="style/style.css">'+
    '<link rel="stylesheet" href="style/header-3.css">';

    let head = document.getElementById('head'); // 追加する部分を取得

    head.insertAdjacentHTML('afterbegin', head_content);
    // insertAdjacentHTMLでHTMLを追加



    // header
    let header_content = 
    '<div class="wrapper site-header__wrapper">'+
      '<div class="site-header__start">'+
        '<a style="margin-left:15px" href="index.html" class="brand">明石高専マップ</a>'+
      '</div>'+
      '<div class="site-header__end">'+
        '<nav class="nav">'+
          '<button class="nav__toggle" aria-expanded="false" type="button">'+
            '<img src="images/menu.png" width="30" height="28">'+
          '</button>'+
          '<ul class="nav__wrapper">'+
            '<li class="nav__item"><a href="map/G.html">G科棟</a></li>'+
            '<li class="nav__item"><a href="map/M.html">M科棟</a></li>'+
            '<li class="nav__item"><a href="map/E.html">E科棟</a></li>'+
            '<li class="nav__item"><a href="map/C.html">C科棟</a></li>'+
            '<li class="nav__item"><a href="map/A.html">A科棟</a></li>'+
            '<li class="nav__item"><a href="map/lib.html">情報センター</a></li>'+
            '<li class="nav__item"><a href="map/eat.html">食堂</a></li>'+
            '<!--  <li class="nav__item"><a href="route/route.html">ルート案内</a></li>  -->'+
            '<li class="nav__item"><a href="images/images.html">マップ画像集</a></li>'+
          '</ul>'+
        '</nav>'+
      '</div>'+
    '</div>';

    let header = document.getElementById('header'); // 追加する部分を取得

    header.innerHTML = header_content; // innerHTMLでHTMLを追加



    // footer 
    let footer_content = '<div>©PocoPota</div>'; // 追加するHTMLを定義

    let footer = document.getElementById('footer'); // 追加する部分を取得

    footer.innerHTML = footer_content; // innerHTMLでHTMLを追加
}
