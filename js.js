let test;
let results = [];
let list = document.getElementById('list');
let lis;

function unEscape(htmlStr) {
    htmlStr = htmlStr.replace(/lt;/g , "<");	 
    htmlStr = htmlStr.replace(/gt;/g , ">");     
    htmlStr = htmlStr.replace(/quot;/g , "\"");  
    htmlStr = htmlStr.replace(/#39;/g , "\'");   
    htmlStr = htmlStr.replace(/amp;/g , "&");
    return htmlStr;
}

fetch('https://en.wikipedia.org/w/api.php?action=query&prop=revisions&titles=List_of_Nestl%C3%A9_brands&rvslots=*&rvprop=content&formatversion=2&origin=*')
.then((response) => response.text())
.then(function (data){
test = data.split("n*");
test.shift();
test.pop();
for (word of test) {
    result = word;
    if (word.includes('[')) {
        result = word.split(']')[0]
    }
    if (word.includes('|')) {
        result = word.split('|')[0]
    }
    if (word.includes(';')) {
        result = word.split(';')[0]
    }
    if (word.includes('\\')) {
        result = word.split('\\')[0]
    }
    if (word.includes('(')) {
        result = word.split('(')[0]
    }
    if (word.includes('{')) {
        result = word.split('{')[0]
    }
    if (word.includes('lt;ref')) {
        result = word.split('lt;ref')[0]
    }
    if (word.includes('\\n')) {
        result = word.split('\\n')[0]
    }
    if (word.includes('*')) {
        result = word.split('*')[1]
    }
    if (word.includes('|')) {
        result = word.split('|')[0]
    }
    if (word.includes('<ref')) {
        result = word.split('<ref')[0]
    }
    if (word.includes('{')) {
        result = word.split('{')[0]
    }
    result = result.replace(/[\[\]&]+/g, '');

    results.push(unEscape(result))
}

for (word of results) {
  if (word != ' ') {
    li = document.createElement('li');
    li.innerText = (word);
    list.appendChild(li)
  }
  
}
lis = document.querySelectorAll('li')
})

function checkNestle(str) {
for (li of lis) {
  if (!li.innerText.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) {
    li.style.display='none'
  }
  else {
    li.style.display='list-item'
  }
}
}