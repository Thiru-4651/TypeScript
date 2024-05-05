var currentUser;
var userIdAuto = 1000;
var medicineIDAuto = 100;
var orderIDAuto = 200;
var defaultBalance = 0;
var UserDetails = /** @class */ (function () {
    function UserDetails(name, mail, phone, password, confirmpassword, balance) {
        userIdAuto++;
        this.userId = "UID" + userIdAuto;
        this.name = name;
        this.mail = mail;
        this.phone = phone;
        this.password = password;
        this.confirmpassword = confirmpassword;
        this.balance = balance;
    }
    return UserDetails;
}());
var MedicineDetails = /** @class */ (function () {
    function MedicineDetails(medicineName, medicinePrice, quantity) {
        medicineIDAuto++;
        this.medicineId = "MID" + medicineIDAuto;
        this.medicineName = medicineName;
        this.medicinePrice = medicinePrice;
        this.quantity = quantity;
    }
    return MedicineDetails;
}());
var OrderDetails = /** @class */ (function () {
    function OrderDetails(medicineID, userID, medicineName, count, totalAmount) {
        orderIDAuto++;
        this.orderID = "OID" + orderIDAuto;
        this.medicineID = medicineID;
        this.userID = userID;
        this.medicineName = medicineName;
        this.count = count;
        this.totalAmount = totalAmount;
    }
    return OrderDetails;
}());
var userList = new Array;
var user1 = new UserDetails("Thiru", "thiru@gmail.com", "1234567890", "abcd", "abcd", defaultBalance);
var user2 = new UserDetails("Santhosh", "santhosh@gmail.com", "1234567890", "xyz", "xyz", defaultBalance);
userList.push(user1);
userList.push(user2);
var medicineList = new Array;
medicineList.push(new MedicineDetails("Paracetomol", 5, 50));
medicineList.push(new MedicineDetails("Colpal", 5, 60));
medicineList.push(new MedicineDetails("Stepsil", 5, 70));
medicineList.push(new MedicineDetails("Iodex", 5, 80));
medicineList.push(new MedicineDetails("Acetherol", 5, 100));
var orderList = new Array;
orderList.push(new OrderDetails(medicineList[0].medicineId, userList[0].userId, "Paracetomol", 2, 100));
orderList.push(new OrderDetails(medicineList[1].medicineId, userList[1].userId, "Iodex", 2, 160));
function SignInPage() {
    var signin = document.getElementById("signIn");
    var login = document.getElementById("loginpage");
    var excistinguser = document.getElementById("existinguser");
    signin.style.display = "block";
    login.style.display = "none";
    excistinguser.innerHTML = "<h2>Available Users</h2>";
    for (var i = 0; i < userList.length; i++) {
        excistinguser.innerHTML += "UserID: ".concat(userList[i].userId, "     ");
    }
}
function SignUpPage() {
    var signup = document.getElementById("signUp");
    var login = document.getElementById("loginpage");
    signup.style.display = "block";
    login.style.display = "none";
}
function SignUp() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("newmail").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("newpassword").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    var user = new UserDetails(name, email, phone, password, confirmpassword, defaultBalance);
    var signup = document.getElementById("signUp");
    var login = document.getElementById("loginpage");
    signup.style.display = "none";
    login.style.display = "block";
}
function SignIn() {
    var mail = document.getElementById("mail").value;
    var SignIn = document.getElementById("signIn");
    var password = document.getElementById("pass").value;
    var menu = document.getElementById("menu");
    var valid = false;
    // userList.forEach(element =>{
    // for(let i=0;i<userList.length;i++)
    //     {
    //         if(userList[i].mail==mail && userList[i].password==password)
    //             {
    valid = true;
    menu.style.display = "flex";
    SignIn.style.display = "none";
    // break;
    //         }
    //     else
    //     {
    //         alert("Wrong mail id or wrong password");
    //         break;
    //     }
    // }
}
function DisplayMedicine() {
    var medicine = document.getElementById("medicine");
    var menu = document.getElementById("menu");
    menu.style.display = "none";
    medicine.style.display = "block";
    medicine.innerHTML = "<h2>Medicine Details</h2><br>";
    for (var i = 0; i < medicineList.length; i++) {
        medicine.innerHTML += "Medicine Name: ".concat(medicineList[i].medicineName, "  |       MedicinePrice: ").concat(medicineList[i].medicinePrice, "     AvailableQuantity: ").concat(medicineList[i].quantity, "<br> ");
    }
    //  medicine.innerHTML+="<button onclick='SignIn()'>Home</button>";
}
function Purchase() {
    // let table=document.getElementById("table")as HTMLDivElement;
    // let menu=document.getElementById("menu")as HTMLDivElement;
    // let medicine=document.getElementById("medicine")as HTMLLabelElement;
    var purchase = document.getElementById("purchase");
    purchase.style.display = "block";
    const tablebody = document.querySelector("#table #rows");
    tablebody.innerHTML = "";
    for (var i = 0; i = medicineList.length; i++) {
        var row = document.createElement("tr");
        row.innerHTML = "\n            <td>".concat(medicineList[i].medicineName, "</td>\n            <td>").concat(medicineList[i].medicinePrice, "</td>\n            <td>").concat(medicineList[i].quantity, "</td>\n            <td><button onclick=\"add(").concat(medicineList[i].medicineId, ")\">Add</button></td>\n            ");
        tablebody.appendChild(row);
    }
}
