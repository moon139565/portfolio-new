let submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function(){
    const namefild = document.getElementById("contactName");
    const emailfild = document.getElementById("contactemail");
    const messagefild = document.getElementById("contactmessage");
    const eroretext = document.getElementById("erore-text");

    const namevalue = namefild.value
    const emailvalue = emailfild.value
    const messagevalue = messagefild.value

    // emailjs code

    let templateParams = {
        namevalue: namevalue,
        emailvalue: emailvalue,
        messagevalue: messagevalue,
    };



   if (namevalue && emailvalue && messagevalue) {
    console.log(namevalue, emailvalue, messagevalue)
    eroretext.innerHTML =""
    namefild.value = ""
    emailfild.value = ""
    messagefild.value = ""
    // emailjs code
    emailjs.send(
    "service_2x9x7hm",
    "template_oqt4crp",
    templateParams,
    "vdWpjsEJJbBs5a582");
   }else {
    eroretext.innerHTML = "Please fill in the box"
    
  }
});