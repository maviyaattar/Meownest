function showLoader(){

let loader =
document.querySelector(
".loader-overlay"
);

if(loader){
loader.style.display="flex";
}

}

function hideLoader(){

let loader =
document.querySelector(
".loader-overlay"
);

if(loader){
loader.style.display="none";
}

}

function showAlert(
message,
type="success"
){

const alertBox =
document.createElement("div");

alertBox.className =
`custom-alert ${type}`;

alertBox.innerText =
message;

document.body.appendChild(
alertBox
);

setTimeout(()=>{

alertBox.remove();

},3000);

}