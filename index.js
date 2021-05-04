/*getElementById() i style*/
function createOnclick(idElem){
    idElem.addEventListener("click", function (){
        idElem.style.background='blue';
    })
}

/*querySelector i innerHTML*/
let identeficator = document.getElementById('cube')
createOnclick(identeficator);

function name(m){
    let el = document.querySelector(".cubes");

    let str = "Hello"
    el.innerHTML += str +m+ "<br/>";
}
name("Vadim");

/*.classList*/
let elem = document.querySelector("#check");
console.log(elem.classList)