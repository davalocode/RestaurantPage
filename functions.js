export function make_home() {

//Informacion para los p y la imagen
let information = {
    first_p: "Welcome to restaurant page!!!",
    second_p: "Working since 1988",
    third_p: "Please, check out our menu!"
}

//Contenedor principal donde se va a meter todo
let content = document.getElementById("content");

//Contenedor de la funcion que lo mete todo
let main_div = document.createElement("div");
main_div.className="home";

//Contenido del contenedor de la funcion
//Primer p
let p_first=document.createElement("p");
p_first.innerHTML=information.first_p;
main_div.append(p_first);

//Segundo p
let p_second=document.createElement("p");
p_second.innerHTML=information.second_p;
main_div.append(p_second);

//Imagen
let img=document.createElement("img");
img.className="img_cheff";
img.src="img/cheff.jpg";
main_div.append(img);

//Tercer p
let p_third=document.createElement("p");
p_third.innerHTML=information.third_p;
main_div.append(p_third);


//Final para que se meta el contenedor de la funcion con todo
content.appendChild(main_div);
}

export function make_menu() {
    //Constructor pizza
function pizza(nombre, src, descripcion) {
    this.nombre=nombre;
    this.src=src;
    this.descripcion=descripcion;
}

//Declaracion array pizzas
let pizzas = [];

//Declaracion de los objetos pizza
pizzas[0] = new pizza("margarita", "img/margarita.png", "Tomato, chesse and and extra chesse");
pizzas[1] = new pizza("oklahoma", "img/oklahoma.png", "Tomato, chesse, peperoni and barbecue souce");
pizzas[2] = new pizza("chesse", "img/Chesse.png", "Tomato, chesse, more chesse and more chesse");
pizzas[3] = new pizza("barbecue", "img/barbecue.png", "Tomato, chesse, meat and barbecue souce");
pizzas[4] = new pizza("barbecue", "img/barbecue.png", "Tomato, chesse, meat and barbecue souce");
pizzas[5] = new pizza("barbecue", "img/Chesse.png", "Tomato, chesse, meat and barbecue souce");

//Contenedor principal donde se va a meter todo
let content = document.getElementById("content");

//Contenedor de la funcion donde se mete todo
let main_div = document.createElement("div");
main_div.className="menu";

//Se mete en un array las pizzas y se crea un blucle que las vaya metiendo con las posiciones del array

let contador=0;

while (contador!=pizzas.length) {

    //Contendor pizza donde va la informacion de cada pizza
    let pizza_div=document.createElement("div");
    pizza_div.className="pizza";

    //Primer p (nombre)
    let nombre_pizza=document.createElement("p");
    //Anotacion: No se porque en todo funciona menos en este que he tenido que crear una variable para 
    //almacenar el nombre, el resto sin problema
    let el_nombre=pizzas[contador].nombre;
    nombre_pizza.innerHTML=el_nombre;
    pizza_div.append(nombre_pizza);

    //Imagen
    let imagen_pizza=document.createElement("img");
    imagen_pizza.src=pizzas[contador].src;
    pizza_div.append(imagen_pizza);

    //Segundo p (descripcion)
    let descripcion_pizza=document.createElement("p");
    descripcion_pizza.innerHTML=pizzas[contador].descripcion
    pizza_div.append(descripcion_pizza);

    //Meter contenedor pizza en el contenedor de la funcion
    main_div.append(pizza_div);

    contador++;
}

//Final para que se meta el contenedor de la funcion con todo
content.appendChild(main_div);
}

export function make_contact() {
    //Este es el contenedor principal de la pagina
let content=document.getElementById("content");

//Aqui esta el contenedor principal de la funcion
let main_div=document.createElement("div");
main_div.className="contact";

//Se crean los 3 divs distintos
//Aqui el primer div (number)
let div_number=document.createElement("div");
div_number.className="number";

//img del primer div (number)
let img_number=document.createElement("img");
img_number.src="img/telefono.svg";
div_number.append(img_number);

//span del primer div (number)
let span_number=document.createElement("span");
span_number.innerHTML="765 89 23 76"
div_number.append(span_number);

//metemos el primer div en el contendor de la funcion
main_div.append(div_number);

//Repetimos con el segundo div
//Aqui el primer div (address)
let div_address=document.createElement("div");
div_address.className="address";

//img del primer div (address)
let img_address=document.createElement("img");
img_address.src="img/casa.svg";
div_address.append(img_address);

//span del primer div (address)
let span_address=document.createElement("span");
span_address.innerHTML="Calle Arroyo Nº80 Sevilla"
div_address.append(span_address);

//metemos el segundo div en el contendor de la funcion
main_div.append(div_address);

//Hacemos el ultimo div (address img)
let div_address_img=document.createElement("div");
div_address_img.className="address_img"

//imagen del ultimo div (address img)
let img_address_img=document.createElement("img");
img_address_img.src="img/lugar.png"
div_address_img.append(img_address_img);

//Metemos el ultimo div en el contenedor de la funcion
main_div.append(div_address_img);

//Metemos el contendor de la funcion al principal de la pagina
content.appendChild(main_div);
}

export function delete_content() {
        const list = document.getElementById("content");
        while (list.hasChildNodes()) {
          list.removeChild(list.firstChild);
        }
      
}
