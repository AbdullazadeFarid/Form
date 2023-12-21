var eye = document.querySelector(".eye_icon")

 var password = document.querySelector(".password")

 var off_eye = document.querySelector(".off_eye")

 var email = document.getElementById("email") //biz value komekliyi ile ID si email olan inputun icinde yazilanlari goruruk

 var mesage_mail = document.getElementById("mesage_mail")  //burda error mesaji cixmag istediyimiz yerde html de bir div acib ID verib onu burda cagiririg

 var email_border = document.getElementById("email")

eye.addEventListener ("click" , function(){
    password.type="text"          //burda qeyd edirikki eye class adli elemente klikledikde passwordun tipi deyissin text olsun
    eye.style.display="none"      //ve eynio zavanda eye yoxa cixsin
    off_eye.style.display="block"  // yoxa cixmis eye nin yenine ustunen xett cekilmis eye img gelsin

})

off_eye.addEventListener ("click" , function(){
    password.type="password"
    eye.style.display="block"
    off_eye.style.display="none"
})


document.getElementById("form").addEventListener("submit" , function(e){  //get formu ID ile cagir ve bunda olan (e)eventi dinle(EVENT HER HANSİ BİR HADİSEYE DEYİLİR) , eger submit olarsa(yeni form da yerlesen button type submute click edildikde)
    e.preventDefault();  // her hansi meselcun A tegine klik etdinkde refresh gedir .bu refresh in gabagin alir

    if(email.value.trim()=== ""){  //trim yeni sag ve sol hissedeki space(probeli silir) ve bir deyer kimi qebul etmir


        mesage_mail.textContent = "Zəhmət olmasa xanani boş buraxmayin"  //errror verdikde bu metn elave olunur
        mesage_mail.style.color="red"
        email_border.style.border="1px solid red"
    //    return;   //bunu eger uxardan asagi yoxlaya yoxlaya geldikde hansisa birinde error tapsa asagi inputlara kecmesin
    }else{

        mesage_mail.textContent = ""   // burda bow deyer veririkki probel olmuyanda if e girmiyende elsede o errorun sms i gostermesin
        email_border.style.border="1px solid black"
        if(!email.value.includes("@")){    //burada qeyd edirikki @ isaresi olmadan melumattdar qeyde alinmasin
            mesage_mail.textContent = "Meselen:hesab@hesab.az və ya 994 00 123 4567"
            mesage_mail.style.color="red"
            email_border.style.border="1px solid red"


        }
    }


    var password = document.getElementById("password").value // BURDA ISE id SI password olan inputun icindeki yazilanlari gore bilirik

    var mesage_password = document.getElementById("mesage_password")



var password_border = document.getElementById("password")

    if(password.trim()=== ""){  //trim yeni sag ve sol hissedeki space(probeli silir) ve bir deyer kimi qebul etmir


        mesage_password.textContent = "Zəhmət olmasa xanani boş buraxmayin";
        mesage_password.style.color="red"
        password_border.style.border="1px solid red"
    //    return;   //bunu eger нuxardan asagi yoxlaya yoxlaya geldikde hansisa birinde error tapsa asagi inputlara kecmesin
    }
    else{
        mesage_password.textContent = "";  // burda bow deyer veririkki probel olmuyanda if e girmiyende elsede o errorun sms i gostermesin
        password_border.style.border="1px solid black"
    }

    // if(password.lenght)

    // console.log(password.length);



})









