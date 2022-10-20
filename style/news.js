var data=[
'日付 内容 備考',
'あ い う',
'か き く',
'さ し す'
],h='<table border="1">';

for(var i=0;i<data.length; i++)h+=i?
  '<tr><td>'+data[i].replace(/ /g,'</td><td>')+'</td></tr>':'<tr><th>'+data[i].replace(/ /g,'</th><th>')+'</th></tr>';document.write(h+'</table>');
