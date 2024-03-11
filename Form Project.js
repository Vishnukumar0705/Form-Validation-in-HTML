var A = 0;
var B = 0;
function previewCheck() {
    A = 0;
    B = 0;
    check("FirstName", "firsterror", "*Fill the First Name")
    check("LastName", "lasterror", "*Fill the Last Name")
    check("date", "dateerror", "*Fill your Date of Birth")
    check("email", "emailerror", "*Fill the Email")
    check("password", "passworderror", "*Enter the Password")
    check("Address", "Addresserror", "*Fill the  Address")
    check("course", "courseerror", "*Fill your course")
    check("Qualification", "qualierror", "*Choose your Qualification")
    check("Photo", "photoerror", "*Upload your photo")
    GenderVerify()
    Timing()
    if (A == 0) {
        PreviewDisplay()
        document.getElementById("preview").style = "visibility:visible"
        document.getElementById("previewbox").style = "visibility:visible"

    }
    if (B == 0) {
        document.getElementById("sub").disabled = false;
    }
}
function check(inputId, errorId, errorMessage) {
    var first = document.getElementById(inputId).value
    if (first == "") {
        document.getElementById(errorId).innerHTML = errorMessage
        A++
        B++
    }
    else {
        document.getElementById(errorId).innerHTML = ""
    }
}

function GenderVerify() {
    var Gen = regform.Gender.value
    if (Gen == "") {
        document.getElementById("Gendererror").innerHTML = "*Select your Gender"
        A++
        B++
    }
    else {
        document.getElementById("Gendererror").innerHTML = ""
    }
}
function Timing() {
    var Ten = document.getElementById("timeten").checked
    var Two = document.getElementById("timetwo").checked
    var Five = document.getElementById("timefive").checked
    var Any = document.getElementById("timeany").checked
    if (Ten == false) {


        if (Two == false) {


            if (Five == false) {

                if (Any == false) {
                    document.getElementById("timeerror").innerHTML = "*Select Timing"
                    A++
                    B++
                }
                else {
                    document.getElementById("timeerror").innerHTML = ""
                }
            }
            else {
                document.getElementById("timeerror").innerHTML = ""
            }
        }
        else {
            document.getElementById("timeerror").innerHTML = ""
        }
    }
    else {
        document.getElementById("timeerror").innerHTML = ""
    }
}
function birth() {
    var date = document.getElementById("date").value
    if (date == "") {
        check('date', 'dateerror', '*Fill your Date of Birth')

    }
    else {
        dateCheck();
    }
}
function dateCheck() {
    var d = document.getElementById("date")
    var e = new Date(d.value)
    var year = e.getFullYear()
    if (year > 2006 || year < 1980) {
        document.getElementById("dateerror").innerHTML = "You are not eligible to apply"
    }
    else {
        document.getElementById("dateerror").innerHTML = ""
    }

}
var a;
function passeye() {
    if (a == 1) {
        document.getElementById("password").type = 'password';
        document.getElementById("eye").src = 'eye1.svg';
        a = 0;
    }
    else {
        document.getElementById("password").type = 'text';
        document.getElementById("eye").src = 'eye.svg';
        a = 1;
    }
}
function PreviewDisplay() {
    document.getElementById("preview").innerHTML = ""
    PreviewBox("FirstName", "First Name    : ")
    PreviewBox("LastName", "Last Name     : ")
    PreviewBox("date", "Date of Birth : ")
    Gender()
    PreviewBox("email", "Email             : ")
    PreviewBox("password", "Password       : ")
    PreviewBox("Address", "Address         : ")
    course()
    PreviewBox("Qualification", "Qualification  :")
    classtiming()
}
function PreviewBox(inputId, Message) {
    var PreviewBox = document.getElementById(inputId).value
    if (PreviewDisplay == "") {
        document.getElementById("preview").innerHTML = ""
    }
    else {
        document.getElementById("preview").innerHTML += Message + PreviewBox + "<br><br>";
    }
}
function course() {
    var selectedOptions = [];
    var select = document.getElementById("course")
    document.getElementById("preview").innerHTML += "Course           : "
    for (const option of select.options) {
        if (option.selected) {
            selectedOptions.push(option.value);
        }
    }
    document.getElementById("preview").innerHTML += selectedOptions + "<br><br>"
}
function Gender() {
    var Gender = regform.Gender.value
    if (Gender == "") {
        document.getElementById("Gendererror").innerHTML = ""
    }
    else {

        document.getElementById("preview").innerHTML += "Gender          : " + Gender + "<br><br>";
    }
}
function classtiming() {
    var TimingA = document.getElementById("timeten").value
    var ten = document.getElementById("timeten").checked
    document.getElementById("preview").innerHTML += "Class Timing  : "
    if (ten == true) {
        document.getElementById("preview").innerHTML += TimingA + "   ";
    }


    var TimingB = document.getElementById("timetwo").value
    var two = document.getElementById("timetwo").checked
    if (two == true) {
        document.getElementById("preview").innerHTML += TimingB + "   ";
    }
    var TimingC = document.getElementById("timefive").value
    var five = document.getElementById("timefive").checked
    if (five == true) {
        document.getElementById("preview").innerHTML += TimingC + "   ";
    }


    var TimingD = document.getElementById("timeany").value
    var Any = document.getElementById("timeany").checked
    if (Any == true) {
        document.getElementById("preview").innerHTML += TimingD;
    }
}
// function reload() {
//     location.reload();
// }
function Successfull() {
    var Message = document.getElementById('thanku').innerHTML = "***Submited Successfully***";
    alert(Message)

}
