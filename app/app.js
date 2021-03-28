import isEmail from "validator/lib/isEmail";
import tripleMe from "./tripleMe";

console.log(isEmail("seif@apprentus.com"));
console.log(tripleMe(10000));

document.querySelector("h1").innerText = "Hello Seif"

if(module.hot) {
	module.hot.accept();
}