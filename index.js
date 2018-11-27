
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector('.target')
}

function increaseRankBy(n){
  var list = document.querySelectorAll('.ranked-list li')
  
  for(var x=0;x<list.length;x++){
    list[x].innerHTML = (parseInt(list[x].innerHTML) + parseInt(n)).toString();
  }
}

function deepestChild(){
  var list = document.querySelector('#grand-node')
  return list.querySelectorAll('div')
  //.querySelectorAll('div')
  while(list[0].length){
    list = list[0]
  }
  return list.innerHTML
}

