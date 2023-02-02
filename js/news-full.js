window.onload = function(){

let tableoutput = document.getElementById("table");
getCsv("/NITAC_map/news.csv");

function getCsv(data){
	let xhr = new XMLHttpRequest(); 
  xhr.open("GET",data,true);
  xhr.onload = function (e) {
		if (xhr.readyState === 4) {
		  if (xhr.status === 200) {
			  let responce = xhr.responseText;
			  csvArr(responce);
		  } else {
      console.error(xhr.statusText);
      }
    }
	};
	xhr.send(null);
}

function csvArr(dataArr){
	let arr =[];
  let newslist = dataArr.split('\n');
  for(let i = 0; i < newslist.length - 1; i++){
    arr[i] = newslist[i].split(',');
  }
	htmlWrite(arr);
}

function htmlWrite(dataList){
	let tableinsert ="";
  dataList.forEach(element => {
    tableinsert +='<tr>';
    element.forEach((childElement) =>{
      tableinsert +=`<td>${childElement}</td>`;
    });
    tableinsert +='</tr>'
  });
  tableoutput.insertAdjacentHTML('afterbegin', tableinsert);
}

}
