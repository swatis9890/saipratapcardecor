const services = {
 detailing:{
  title:"Car Detailing & Polishing",
  text:"Complete deep cleaning, foam wash, polishing and ceramic coating for showroom finish.",
  img:"images/detailing.jpg"
 },
 lighting:{
  title:"Ambient LED Lighting",
  text:"Luxury LED interior lighting with color modes and professional wiring.",
  img:"images/lighting.jpg"
 },
 audio:{
  title:"Audio Systems",
  text:"Premium speakers, subwoofers and infotainment upgrades.",
  img:"images/audio.jpg"
 },
 wrapping:{
  title:"Car Wrapping",
  text:"Matte, gloss and carbon wraps to fully transform your car look.",
  img:"images/wrapping.jpg"
 },
 interior:{
  title:"Seat Covers & Interior Mods",
  text:"Luxury leather seats, dashboard styling and comfort upgrades.",
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
document.getElementById("serviceWhatsapp").href =
"https://wa.me/91XXXXXXXXXX?text=I%20want%20"+services[key].title;

document.getElementById("servicePopup").style.display="block";
}

function closeService(){
document.getElementById("servicePopup").style.display="none";
}
