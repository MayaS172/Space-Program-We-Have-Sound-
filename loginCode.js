function checkCreds() {
    console.log("checkCreds() function started");
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNum = document.getElementById("badgeID").value;

    document.getElementById("loginStatus").innerHTML = "First name is: " + firstName + ", Last name is: " + lastName + ", and the Badge Id is: " + badgeNum;
}