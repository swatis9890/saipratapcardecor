const services = {
 detailing:{
  title:"Car Detailing & Polishing",
  text:"Complete deep cleaning, foam wash, polishing and ceramic coating for showroom shine.",
  img:"images/detailing.jpg"
 },
 lighting:{
  title:"Ambient LED Lighting",
  text:"Luxury ambient lighting with professional installation and color modes.",
  img:"images/lighting.jpg"
 },
 audio:{
  title:"Audio Systems",
  text:"Premium speakers, subwoofers and infotainment upgrades.",
  img:"images/audio.jpg"
 },
 wrapping:{
  title:"Car Wrapping",
  text:"Matte, gloss and carbon fiber wraps for full exterior transformation.",
  img:"images/wrapping.jpg"
 },
 interior:{
  title:"Seat Covers & Interior Mods",
  text:"Luxury leather seating and dashboard enhancements.",
  img:"images/interior.jpg"
 },
 accessories:{
  title:"Car Accessories",
  text:"Premium accessories professionally installed with perfect finish.",
  img:"images/accessories.jpg"
 }
};

function openService(key){
document.getElementById("serviceTitle").innerText = services[key].title;
document.getElementById("serviceText").innerText = services[key].text;
document.getElementById("serviceImage").src = services[key].img;

let message = "I want " + services[key].title + " service from Sai Pratap Car Decor";
let encoded = encodeURIComponent(message);

document.getElementById("serviceWhatsapp").href =
"https://wa.me/91XXXXXXXXXX?text=" + encoded;


document.getElementById("servicePopup").style.display="block";
}

function closeService(){
document.getElementById("servicePopup").style.display="none";
}

function sendWhatsApp(e){
e.preventDefault();

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let msg = document.getElementById("message").value;

let text = `Hello Sai Pratap Car Decor,%0AName: ${name}%0APhone: ${phone}%0AService: ${msg}`;

window.open("https://wa.me/919823195752?text=" + encodeURIComponent(text), "_blank");
}
