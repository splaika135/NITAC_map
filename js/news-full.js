window.onload = function(){

let output = document.getElementById("table");
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
  let list = dataArr.split('\n');
  for(let i = 0; i < list.length - 1; i++){
    arr[i] = list[i].split(',');
  }
	htmlWrite(arr);
}

function htmlWrite(dataList){
	let insert ="";
  dataList.forEach(element => {
    insert +='<tr>';
    element.forEach((childElement) =>{
      insert +=`<td>${childElement}</td>`;
    });
    insert +='</tr>'
  });
  output.insertAdjacentHTML('afterbegin', insert);
}

}
