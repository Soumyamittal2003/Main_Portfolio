
function sendMail(){ 
      
    var params ={
        from_name : document.getElementById("name").value,
        from_email : document.getElementById("email").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_zwqd31h","template_eviw7p8",params).then(function (dd){
        alert("success" + dd.status)
    })

    }
    
   
    
    


