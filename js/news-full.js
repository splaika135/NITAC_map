window.onload = function(){

let newsoutput = document.getElementById("newstable");
getCsv("/NITAC_map/news.csv");

function getCsv(csvdata){
	let csvxhr = new XMLHttpRequest(); 
  csvxhr.open("GET",csvdata,true);
  csvxhr.onload = function (e) {
		if (csvxhr.readyState === 4) {
		  if (csvxhr.status === 200) {
			  let responce = xhr.responseText;
			  csvArr(responce);
		  } else {
      console.error(csvxhr.statusText);
      }
    }
	};
	csvxhr.send(null);
}

function csvArr(csvdataArr){
	let csvarr =[];
  let newslist = csvdataArr.split('\n');
  for(let i = 0; i < newslist.length - 1; i++){
    csvarr[i] = newslist[i].split(',');
  }
	htmlWrite(csvarr);
}

function htmlWrite(csvdataList){
	let newsinsert ="";
  csvdataList.forEach(element => {
    newsinsert +='<tr>';
    element.forEach((childElement) =>{
      newsinsert +=`<td>${childElement}</td>`;
    });
    newsinsert +='</tr>'
  });
  newsoutput.insertAdjacentHTML('afterbegin', newsinsert);
}

}
