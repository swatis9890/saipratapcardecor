const services = {
 detailing:{
  title:"Car Detailing & Polishing",
  text:"Complete deep cleaning, foam wash, polishing and ceramic coating.",
  video:"images/detailing.mp4"
 },
 lighting:{
  title:"Ambient LED Lighting",
  text:"Luxury LED lighting with professional installation.",
  video:"images/lighting.mp4"
 },
 audio:{
  title:"Audio Systems",
  text:"Premium speakers, subwoofers and infotainment upgrades.",
  video:"images/audio.mp4"
 },
 wrapping:{
  title:"Car Wrapping",
  text:"Matte, gloss and carbon wraps for full transformation.",
  video:"images/wrapping.mp4"
 },
 interior:{
  title:"Seat Covers & Interior Mods",
  text:"Luxury leather seats and dashboard styling.",
  video:"images/interior.mp4"
 },
 accessories:{
  title:"Car Accessories",
  text:"Premium accessories with perfect finish.",
  video:"images/accessories.mp4"
 }
};

function openService(key){
 document.getElementById("serviceTitle").innerText = services[key].title;
 document.getElementById("serviceText").innerText = services[key].text;

 let video = document.getElementById("serviceVideo");
 video.src = services[key].video;
 video.load();

 document.getElementById("serviceWhatsapp").href =
 "https://wa.me/91XXXXXXXXXX?text=I%20want%20"+services[key].title;

 document.getElementById("servicePopup").style.display="block";
}
