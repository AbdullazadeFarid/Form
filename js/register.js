


document.getElementById("form").addEventListener("submit" , function(e){
    e.preventDefault();


    var number = document.getElementById("number").value

    var message = document.getElementById("message")
    var number_border = document.getElementById("number")
    var email_border = document.getElementById("email")


    var email = document.getElementById("email").value


    var email_message = document.getElementById("email_message")








    if(number.trim() == ""){

        message.textContent="Zəhmət olmasa xanani boş buraxmayin"
        message.style.color="red"
        number_border.style.border="1px solid red"

    }else{
        message.textContent=""
        number_border.style.border="1px solid black"
    }


    if(isNaN(number)) {   // burda number yerine herif daxil olunmasin deyirik
        message.textContent="Zəhmət olmasa nomre daxil edin"
        message.style.color="red"
        number_border.style.border="1px solid red"


    }
    else{
        message.textContent=" "
        number_border.style.border="1px solid black"

    }






    if(email.trim()===""){

        email_message.textContent="Zəhmət olmasa xanani boş buraxmayin"
        email_message.style.color="red"
        email_border.style.border="1px solid red"
    return;

    }else{
        email_message.textContent=""
    }



    if(!email.includes("@")){
        email_message.textContent="Meselen:hesab@hesab.az"
        email_message.style.color="red"
        email_border.style.border="1px solid red"

    }

})




