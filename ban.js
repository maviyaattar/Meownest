
async function checkBan() {

const token = localStorage.getItem("token");

if(!token) return;

try {

const response = await fetch(
`${API}/api/auth/profile`,
{
headers:{
Authorization:`Bearer ${token}`
}
}
);

const data = await response.json();

if(
data.message === "ACCOUNT_BANNED" ||
response.status === 403
){

showAlert(
"Your account has been banned by admin."
);

localStorage.removeItem("token");

window.location.href = "index.html";

}

} catch(error) {

console.log(error);

}

}

checkBan();