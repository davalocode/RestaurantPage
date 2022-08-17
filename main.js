import { make_home } from "./functions.js";

import { make_menu } from "./functions.js";

import { make_contact } from "./functions.js";

import  {delete_content} from "./functions.js"

document.getElementById("hacerHome").addEventListener("click", function home() {
    delete_content();
    make_home();
});
document.getElementById("hacerMenu").addEventListener("click", function home() {
    delete_content();
    make_menu();
});
document.getElementById("hacerContact").addEventListener("click", function home() {
    delete_content();
    make_contact();
});