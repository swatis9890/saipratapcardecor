(function(){
 emailjs.init("YOUR_PUBLIC_KEY");
})();

document.getElementById("form").addEventListener("submit", function(e){
 e.preventDefault();
 emailjs.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",this)
 .then(()=> alert("Enquiry sent successfully!"));
});
