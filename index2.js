let btn = document.getElementById("btn");
let content = document.getElementById("content");
let dataCounter = 1;
//btn.addEventListener('click', ()=>{ajax.getJSON('data'+dataCounter+ '.json')});
btn.addEventListener('click', ()=>{ajax.get('some.txt', (str)=>{content.insertAdjacentHTML('beforeend', str);})})


class AJAX{
    get(url, handler){
        let xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.onload = ()=>{
            if(xhr.status==200){
                handler(xhr.response);
            }
        }
        xhr.send();
    }
    getJSON(url){
        let xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.onload = ()=>{
            let data = JSON.parse(xhr.responseText);
            renderJSON(data);
        }
        xhr.send();
        dataCounter++;
        if(dataCounter>=4){
            dataCounter = 1;
        }
    }
    post(){
        let xhr = new XMLHttpRequest();
        xhr.open('post', 'some.txt');
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onload = ()=>{
            let data = document.getElementById("par");
            data.innerHTML = xhr.response;
        }
        xhr.send("message=everything is working");
    }
}

function renderJSON(data){
    let str = "";
    for(i = 0; i<data.length;i++){
        str += "<p> Мій улюблений колір - " + data[i].name + "</p>";
    }
    content.insertAdjacentHTML('beforeend', str);
}
let ajax = new AJAX();
ajax.post();




