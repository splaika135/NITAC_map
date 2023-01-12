window.onload = function(){



    // head
    let head_content = 
    '<meta charset="utf-8">'+
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
    '<link rel="stylesheet" href="style/reset.min.css">'+
    '<link rel="stylesheet"　type="text/css" href="style/style.css">'+
    '<link rel="stylesheet" href="style/header-3.css">';

    let head = document.getElementById('in-head'); // 追加する部分を取得

    head.insertAdjacentHTML('afterbegin', head_content);
    // insertAdjacentHTMLでHTMLを追加



    // header
    let header_content = 
    '<div id="header-inner">'+
    '<h1>共通化デモサイト</h1>'+
    '<ul>'+
    '<li>TOP</li>'+
    '<li>SERVICES</li>'+
    '<li>CONTACT</li>'+
    '</ul>'+
    '</div>';

    let header = document.getElementById('header'); // 追加する部分を取得

    header.innerHTML = header_content; // innerHTMLでHTMLを追加



    // footer 
    let footer_content = '<div>©PocoPota</div>'; // 追加するHTMLを定義

    let footer = document.getElementById('footer'); // 追加する部分を取得

    footer.innerHTML = footer_content; // innerHTMLでHTMLを追加
}
