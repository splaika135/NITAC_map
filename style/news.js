let table = document.getElementById('table');

var data=[
'日付 内容 備考',
'2022/11/24 メニューボタンの不具合を修正し、写真を追加 ---',
'2022/11/17 トップページ完成 変わる可能性アリ',
'2022/11/10 サイト内でページを移動できなかった問題を修正 ---',
'2022/10/20 画像やデザインの追加・修正 ---'
],h='<table border="1">';

for(var i=0;i<data.length; i++)h+=i?
  '<tr><td>'+data[i].replace(/ /g,'</td><td>')+'</td></tr>':'<tr><th>'+data[i].replace(/ /g,'</th><th>')+'</th></tr>';table.insertAdjacentHTML('afterbegin', h+'</table>');
