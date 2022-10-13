var data=[
'a b c d e',
'あ い う え お',
'か き く け こ',
'さ し す せ そ'
],h='<table border="1">';

for(var i=0;i<data.length; i++)h+=i?
  '<tr><td>'+data[i].replace(/ /g,'</td><td>')+'</td></tr>':'<tr><th>'+data[i].replace(/ /g,'</th><th>')+'</th></tr>';document.write(h+'</table>');
