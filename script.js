const services = {
 detailing:{
  title:"Car Detailing & Polishing",
  text:"Deep cleaning, foam wash, polishing & ceramic coating.",
  img:"images/detailing.jpg"
 },
 lighting:{
  title:"Ambient LED Lighting",
  text:"Luxury interior LED lighting with professional wiring.",
  img:"images/lighting.jpg"
 },
 audio:{
  title:"Audio Systems",
  text:"Premium speakers & infotainment upgrades.",
  img:"images/audio.jpg"
 },
 wrapping:{
  title:"Car Wrapping",
  text:"Matte & gloss wraps to transform exterior look.",
  img:"images/wrapping.jpg"
 },
 interior:{
  title:"Seat Covers & Interior Mods",
  text:"Luxury leather seating & dashboard styling.",
  img:"images/interior.jpg"
 },
 accessories:{
  title:"Car Accessories",
  text:"Premium accessories with perfect installation.",
  img:"images/accessories.jpg"
 }
};

function openService(key){
document.getElementById("serviceTitle").innerText = services[key].title;
document.getElementById("serviceText").innerText = services[key].text;
document.getElementById("serviceImage").src = services[key].img;

let message = "I want " + services[key].title + " service from Sai Pratap Car Decor";

document.getElementById("serviceWhatsapp").href =
"https://wa.me/919823195752?text=" + encodeURIComponent(message);

document.getElementById("overlay").style.display = "block";
}

function closeService(){
document.getElementById("overlay").style.display = "none";
}

function sendWhatsApp(e){
e.preventDefault();

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let msg = document.getElementById("message").value;

let text = `Hello Sai Pratap Car Decor,
Name: ${name}
Phone: ${phone}
Service: ${msg}`;

window.open("https://wa.me/919823195752?text=" + encodeURIComponent(text), "_blank");
}
