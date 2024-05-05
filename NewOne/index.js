var userIDautoincreament = 1000;
var medicineIDautoincreament = 2000;
var orderIDautoincreament = 3000;
var currentUserID;
var currentUserName;
var UserDetails = /** @class */ (function () {
    function UserDetails(username, userage, userphonenumber) {
        userIDautoincreament++;
        this.userID = "UID" + userIDautoincreament;
        this.username = username;
        this.userage = userage;
        this.userphonenumber = userphonenumber;
    }
    return UserDetails;
}());
var MedicineDetails = /** @class */ (function () {
    function MedicineDetails(paramMedicineName, paramMedicineCount, paramMedicinePrice) {
        medicineIDautoincreament++;
        this.MedicineId = "MD" + medicineIDautoincreament.toString();
        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
        this.MedicinePrice = paramMedicinePrice;
    }
    return MedicineDetails;
}());
var OrderDetails = /** @class */ (function () {
    function OrderDetails(paramMedicineId, paramUserId, paramMedicineName, paramMedicineCount) {
        orderIDautoincreament++;
        this.OrderId = "OI" + orderIDautoincreament.toString();
        this.MedicineId = paramMedicineId;
        this.UserId = paramUserId;
        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
    }
    return OrderDetails;
}());
var UserArrayList = new Array();
UserArrayList.push(new UserDetails("Hemanth", 23, 9789011226));
UserArrayList.push(new UserDetails("Harish", 23, 9445153060));
var MedicineList = new Array();
MedicineList.push(new MedicineDetails("Paracetomol", 5, 50));
MedicineList.push(new MedicineDetails("Colpal", 5, 60));
MedicineList.push(new MedicineDetails("Stepsil", 5, 70));
MedicineList.push(new MedicineDetails("Iodex", 5, 80));
MedicineList.push(new MedicineDetails("Acetherol", 5, 100));
var OrderList = new Array();
function newuserpage() {
    var homepage = document.getElementById("homepage");
    var newuser = document.getElementById("newuserpage");
    homepage.style.display = "none";
    newuser.style.display = "block";
}
function signup() {
    // alert("SIgnup successfull--1");
    // let username=(document.getElementById("newusername")as HTMLInputElement).value;
    // let userage=(document.getElementById("newuserage")as HTMLInputElement).value;
    // let userphonenumber=(document.getElementById("number")as HTMLInputElement).value;
    // UserArrayList.push(new UserDetails(username,+userage,+userphonenumber));
    // alert("SIgnup successfull");
    displayHomepage();
}
function existinguserpage() {
    var homepage = document.getElementById("homepage");
    var existinguser = document.getElementById("existinguserpage");
    var availableusers = document.getElementById("availableuser");
    homepage.style.display = "none";
    existinguser.style.display = "block";
    availableusers.innerHTML = "<h2>Available Users</h2>";
    for (var i = 0; i < UserArrayList.length; i++) {
        availableusers.innerHTML += "User ID:".concat(UserArrayList[i].userID, " |  User Name:").concat(UserArrayList[i].username, "<br>");
    }
}
function signin() {
    var useridcheck = true;
    var existinguserid = document.getElementById("existinguserid").value;
    for (var i = 0; i < UserArrayList.length; i++) {
        if (existinguserid == UserArrayList[i].userID) {
            useridcheck = false;
            currentUserID = existinguserid;
            currentUserName = UserArrayList[i].username;
            medicinepage();
            break;
        }
    }
    if (useridcheck) {
        alert("Enter valid userid");
    }
}
function medicinepage() {
    var existinguserpage = document.getElementById("existinguserpage");
    var medicinepage = document.getElementById("medicinepage");
    var greet = document.getElementById("greet");
    existinguserpage.style.display = "none";
    medicinepage.style.display = "block";
    greet.innerHTML = "<h2>Hello ".concat(currentUserName, "</h2>");
}
function medicinelistcheck() {
    var medicine = document.getElementById("medincineinfo");
    var medicinelist = document.getElementById("medicinelist");
    var medicinenname = medicinelist[medicinelist.selectedIndex].innerHTML;
    for (var i = 0; i < medicinelist.length; i++) {
        if (MedicineList[i].MedicineName == medicinenname) {
            medicine.innerHTML = "Medicine Name: ".concat(MedicineList[i].MedicineName, "| Medicine Price: ").concat(MedicineList[i].MedicinePrice, " | Available Quantity: ").concat(MedicineList[i].MedicineCount);
            displayrequiredcount();
        }
    }
}
function displayrequiredcount() {
    var requiredcount = document.getElementById("requiredcount");
    requiredcount.style.display = "block";
    var medicineInfo = document.getElementById('medicineInfo');
    medicineInfo.style.display = "block";
}
function buymedicine() {
    var proceed = true;
    var requiredcount = 0;
    var medicinelist = document.getElementById("medicinelist");
    var medicinerequiredcount = document.getElementById("medicinerequiredcount").value;
    var medicinenname = medicinelist[medicinelist.selectedIndex].innerHTML;
    if (+medicinerequiredcount > 0) {
        for (var i = 0; i < MedicineList.length; i++) {
            if (MedicineList[i].MedicineName == medicinenname) {
                if (MedicineList[i].MedicineCount >= +medicinerequiredcount) {
                    requiredcount = +medicinerequiredcount;
                }
                else {
                    proceed = confirm("We have only ".concat(MedicineList[i].MedicineCount, " ").concat(MedicineList[i].MedicineName, ".Do you want to buy these medicines?"));
                    if (proceed) {
                        requiredcount = MedicineList[i].MedicineCount;
                    }
                }
                if (proceed) {
                    MedicineList[i].MedicineCount -= +requiredcount;
                    OrderList.push(new OrderDetails(MedicineList[i].MedicineId, currentUserID, MedicineList[i].MedicineName, +requiredcount));
                    alert("Purchase Success");
                    displayHomepage();
                }
                else if (MedicineList[i].MedicineCount <= 0) {
                    alert("Out of stock");
                }
            }
        }
    }
    else {
        alert("Enter valid required count");
    }
}
function showhistory() {
    var history = document.getElementById("historyDisplay");
    history.style.display = "block";
    var number = 0;
    history.innerHTML = "<h3>Order History </h3>";
    for (var i = 0; i < OrderList.length; i++) {
        if (currentUserID == OrderList[i].UserId) {
            number = 1;
            history.innerHTML += "Medicine Name :".concat(OrderList[i].MedicineName, " ----- Medicinecount: ").concat(OrderList[i].MedicineCount, "  <br>");
        }
    }
    if (number == 0) {
        history.innerHTML += "You have no order history<br>";
    }
}
function displayHomepage() {
    // currentUserID = "";
    // currentUserName = "";
    // let medicineList = document.getElementById('medicineList') as HTMLSelectElement;
    // medicineList.selectedIndex = 0;
    var requiredCount = document.getElementById('requiredcount');
    var medicineInfo = document.getElementById('medincineinfo');
    var historyDisplay = document.getElementById('historyDisplay');
    var medicinePage = document.getElementById('medicinepage');
    var newUserPage = document.getElementById('newuserpage');
    var existingUserPage = document.getElementById('existinguserpage');
    var homePage = document.getElementById('homepage');
    // (document.getElementById('medicineRequiredCount') as HTMLInputElement).value = "";
    // (document.getElementById('existingUserId') as HTMLInputElement).value = "";
    requiredCount.style.display = "none";
    historyDisplay.style.display = "none";
    medicinePage.style.display = "none";
    medicineInfo.style.display = "none";
    newUserPage.style.display = "none";
    existingUserPage.style.display = "none";
    homePage.style.display = "block";
}
