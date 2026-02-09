/* =========================
   SERVICE DATA
========================= */

const services = {
  detailing: {
    title: "Car Detailing & Polishing",
    text: "Deep cleaning, foam wash, polishing & ceramic coating.",
    img: "images/detailing.jpg"
  },
  lighting: {
    title: "Ambient LED Lighting",
    text: "Luxury interior LED lighting with professional wiring.",
    img: "images/lighting.jpg"
  },
  audio: {
    title: "Audio Systems",
    text: "Premium speakers & infotainment upgrades.",
    img: "images/audio.jpg"
  },
  wrapping: {
    title: "Car Wrapping",
    text: "Matte & gloss wraps to transform exterior look.",
    img: "images/wrapping.jpg"
  },
  interior: {
    title: "Seat Covers & Interior Mods",
    text: "Luxury leather seating & dashboard styling.",
    img: "images/interior.jpg"
  },
  accessories: {
    title: "Car Accessories",
    text: "Premium accessories with perfect installation.",
    img: "images/accessories.jpg"
  }
};

/* =========================
   OPEN SERVICE POPUP
========================= */

function openService(key) {
  const service = services[key];

  document.getElementById("serviceTitle").innerText = service.title;
  document.getElementById("serviceText").innerText = service.text;
  document.getElementById("serviceImage").src = service.img;

  const message =
    "Hello Sai Pratap Car Decor, I want " +
    service.title +
    " service.";

  document.getElementById("serviceWhatsapp").href =
    "https://wa.me/919823195752?text=" +
    encodeURIComponent(message);

  document.getElementById("overlay").style.display = "block";
}

/* =========================
   CLOSE SERVICE POPUP
========================= */

function closeService() {
  document.getElementById("overlay").style.display = "none";
}

/* =========================
   SEND WHATSAPP FROM FORM
   (GUARANTEED WORKING)
========================= */

function sendWhatsApp(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("message").value.trim();

  if (!name || !phone) {
    alert("Please enter your name and phone number");
    return;
  }

  const text =
    "Hello Sai Pratap Car Decor, " +
    "Name: " + name + ", " +
    "Phone: " + phone + ", " +
    "Service: " + service;

  const whatsappURL =
    "https://wa.me/919823195752?text=" +
    encodeURIComponent(text);

  // Direct redirect (no popup block)
  window.location.href = whatsappURL;
}
