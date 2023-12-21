




document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    var email = document.getElementById("email").value;
    var message = document.getElementById("message");
    var email_border = document.getElementById("email")
    if (email.trim() === "") {
        message.textContent = "Zəhmət olmasa xanani boş buraxmayin";
        message.style.color = "red";
        email_border.style.border="1px solid red"
        return;
    } else {
        message.textContent = "";
    }


    if(!email.includes("@")){
        message.textContent = "Meselen:hesab@hesab.az";
        email_border.style.border="1px solid red"
    }
});
