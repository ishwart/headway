document.addEventListener("DOMContentLoaded", function () {
    var hidebutton = document.getElementById("hidebutton");
    var studentcontainer = document.getElementById("studentcontainer");
    var registercontainer = document.getElementById("registercontainer");
    var emailinput = document.getElementById("emailinput");
    var passwordinput = document.getElementById("passwordinput");
    var conpasswordinput = document.getElementById("conpasswordinput");
    var selectrole = document.getElementById("selectrole");
    var companycontainer = document.getElementById("companycontainer")
    var passworddoesntmatch = document.getElementById("passworddoesntmatch");

    hidebutton.addEventListener("click", function () {
        var selectedRole = selectrole.value;

        if (selectedRole === "student") {
            if (!isValidEmail(emailinput.value.trim())) {
                alert("Invalid Email");
                return;
            }


            if (passwordinput.value.trim() === "" || conpasswordinput.value.trim() === "" || conpasswordinput.value.trim() !== passwordinput.value.trim()) {
                passworddoesntmatch.style.display = "flex";
                conpasswordinput.style.border = "3px solid #EA4335";
                return;
            }

            studentcontainer.style.display = "flex";
            registercontainer.style.display = "none";
        }

        else if (selectedRole === "company") {
            if (passwordinput.value.trim() === "" || conpasswordinput.value.trim() === "" || conpasswordinput.value.trim() !== passwordinput.value.trim()) {
                alert("Password Doesn't Match");
                return;
            }
            companycontainer.style.display = "flex";
            registercontainer.style.display = "none";

        }

        else {
            alert("Please Select Your Role");
        }
    });

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
