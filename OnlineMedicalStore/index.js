var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var UserIdAutoIncrement = 1000;
var MedicineIdAutoIncrement = 2000;
var OrderIdAutoIncrement = 3000;
// let DefaultBalance=50;
var currentuser;
var currentusername;
var currentuserid;
// let UserList: Array<UserDetails> = new Array<UserDetails>();
// UserList.push(new UserDetails("Thiru","thiru@gmail.com", "thiru","9789011226",DefaultBalance));
// UserList.push(new UserDetails("Santhosh","santhosh@gmail.com", "santosh", "9445153060",DefaultBalance));
// //Medicine List
// let MedicineList: Array<MedicineDetails> = new Array<MedicineDetails>();
// MedicineList.push(new MedicineDetails("Paracetomol", 5, 50, new Date(2024,5,21)));
// MedicineList.push(new MedicineDetails("Colpal", 5, 60, new Date(2024,4,19)));
// MedicineList.push(new MedicineDetails("Stepsil", 5, 70, new Date(2024,5,5)));
// MedicineList.push(new MedicineDetails("Iodex", 5, 80, new Date(2024,8,21)));
// MedicineList.push(new MedicineDetails("Acetherol", 5, 100, new Date(2025,2,1)));
// //Order List
// let OrderList: Array<OrderDetails> = new Array<OrderDetails>();
// OrderList.push(new OrderDetails("MD2002","UI1001","Colpal",2,120,OrderStatus.Ordered));
// OrderList.push(new OrderDetails("MD2004","UI1001","Iodex",3,240,OrderStatus.Ordered));
var homepage = document.getElementById("homepage");
var signin = document.getElementById("signin");
var signup = document.getElementById("signup");
var mainmenu = document.getElementById("mainmenu");
var welcome = document.getElementById("welcome");
var purchaseMedicine = document.getElementById("purchaseMedicine");
//const buymedicine = document.getElementById("buymedicine") as HTMLDivElement;
var medicineeditpage = document.getElementById("medicineeditpage");
var medicinedetails = document.getElementById("medicinedetails");
var orderHistory = document.getElementById("orderHistory");
var cancelOrder = document.getElementById("cancelOrder");
var recharge = document.getElementById("recharge");
var showbalance = document.getElementById("showbalance");
var addmedicine = document.getElementById("addmedicine");
function CloseAll() {
    homepage.style.display = "none";
    signin.style.display = "none";
    signup.style.display = "none";
    mainmenu.style.display = "none";
    welcome.style.display = "none";
    purchaseMedicine.style.display = "none";
    //buymedicine.style.display = "none";
    medicinedetails.style.display = "none";
    medicineeditpage.style.display = "none";
    orderHistory.style.display = "none";
    cancelOrder.style.display = "none";
    recharge.style.display = "none";
    showbalance.style.display = "none";
    addmedicine.style.display = "none";
}
function Signup() {
    CloseAll();
    signup.style.display = "block";
}
function Signuppage() {
    var name = document.getElementById("newusername").value;
    var email = document.getElementById("newusermail").value;
    var pass = (document.getElementById("newuserpassword").value);
    var confirmpass = (document.getElementById("confirmpassword").value);
    var newuserphonenumber = document.getElementById("newuserphonenumber").value;
    if (pass != confirmpass && pass != null && confirmpass != null) {
        alert("Password Mismatch");
    }
    else {
        alert("SignUp Completed successfully");
        var newuser = {
            userID: 0,
            userName: name,
            userEmail: email,
            userPassword: pass,
            userPhoneNumber: newuserphonenumber,
            balance: 0
        };
        AddUser(newuser);
    }
    signup.style.display = "none";
    signin.style.display = "block";
}
function Signin() {
    return __awaiter(this, void 0, void 0, function () {
        var availableusers;
        return __generator(this, function (_a) {
            CloseAll();
            signin.style.display = "block";
            availableusers = document.getElementById("availableusers");
            return [2 /*return*/];
        });
    });
}
function Signinpage() {
    return __awaiter(this, void 0, void 0, function () {
        var newusermail, userenteredpassword, flag, UserList, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newusermail = document.getElementById("newuserid").value;
                    userenteredpassword = document.getElementById("userenteredpassword").value;
                    flag = true;
                    return [4 /*yield*/, fetchUserDetails()];
                case 1:
                    UserList = _a.sent();
                    for (i = 0; i < UserList.length; i++) {
                        if (newusermail == UserList[i].userEmail) {
                            if (UserList[i].userPassword == userenteredpassword) {
                                // currentusername = UserList[i].userName.toString();
                                // currentuserid = newusermail;
                                currentuser = UserList[i];
                                alert("Logged In Successfully");
                                Mainmenu();
                                //break;
                            }
                            else {
                                alert("Wrong Password");
                            }
                            flag = false;
                        }
                    }
                    if (flag) {
                        alert("Invalid UserID");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function Mainmenu() {
    CloseAll();
    mainmenu.style.display = "block";
    var welcomemessage = document.getElementById("welcomemessage");
    welcome.style.display = "block";
    welcomemessage.innerHTML = "Welcome ".concat(currentuser.userName);
}
function Home() {
    CloseAll();
    mainmenu.style.display = "block";
    welcome.style.display = "block";
    var welcomemessage = document.getElementById("welcomemessage");
    welcomemessage.innerText = "Welcome ".concat(currentuser.userName);
}
function PurchaseMedicine() {
    return __awaiter(this, void 0, void 0, function () {
        var tablebody, MedicineList, i, row;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    CloseAll();
                    mainmenu.style.display = "block";
                    purchaseMedicine.style.display = "block";
                    tablebody = document.querySelector("#table1 tbody");
                    tablebody.innerHTML = "";
                    return [4 /*yield*/, fetchMedicineDetails()];
                case 1:
                    MedicineList = _a.sent();
                    for (i = 0; i < MedicineList.length; i++) {
                        row = document.createElement("tr");
                        row.innerHTML = "<td>".concat(MedicineList[i].medicineName, "</td>\n            <td>").concat(MedicineList[i].medicineCount, "</td>\n            <td>").concat(MedicineList[i].medicinePrice, "</td>\n            <td>").concat(MedicineList[i].expiryDate, "</td>\n            <td><button onclick=\"Check(").concat(MedicineList[i].medicineID, ")\">Check</button></td>");
                        tablebody.appendChild(row);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function Check(id) {
    return __awaiter(this, void 0, void 0, function () {
        var flag, idcheck, count, MedicineList, i, neworder;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    CloseAll();
                    mainmenu.style.display = "block";
                    purchaseMedicine.style.display = "block";
                    flag = true;
                    idcheck = true;
                    count = document.getElementById("medicinecount").value;
                    return [4 /*yield*/, fetchMedicineDetails()];
                case 1:
                    MedicineList = _a.sent();
                    for (i = 0; i < MedicineList.length; i++) {
                        if (MedicineList[i].medicineID == id) {
                            idcheck = false;
                            if (parseInt(count) <= MedicineList[i].medicineCount) {
                                flag = false;
                                if (currentuser.balance >= MedicineList[i].medicinePrice) {
                                    currentuser.balance -= MedicineList[i].medicinePrice * parseInt(count);
                                    updateUser(currentuser.userID, currentuser);
                                    neworder = {
                                        orderID: 0,
                                        //medicineID:MedicineList[i].medicineID,
                                        userID: currentuser.userID,
                                        medicineName: MedicineList[i].medicineName,
                                        medicineCount: parseInt(count),
                                        totalPrice: parseInt(count) * MedicineList[i].medicinePrice,
                                        orderStatus: "Purchased"
                                    };
                                    AddOrder(neworder);
                                    MedicineList[i].medicineCount -= parseInt(count);
                                    updateMedicine(MedicineList[i].medicineID, MedicineList[i]);
                                    alert("You Have successfully buyed ".concat(count, " ").concat(MedicineList[i].medicineName));
                                }
                                else {
                                    alert("Low Balance Please Recharge and continue");
                                }
                                //break;
                            }
                        }
                        // else {
                        //     // let flag: boolean = confirm(`We have only ${MedicineList[i].medicineCount} ${MedicineList[i].medicineName}.Do you want buy ${MedicineList[i].medicineCount} ${MedicineList[i].medicineName} ?`);
                        //     // if (flag) {
                        //     //     alert(`You Have successfully buyed ${MedicineList[i].medicineCount} ${MedicineList[i].medicineName}`);
                        //     // }
                        //     // break;
                        // } 
                    }
                    if (flag) {
                        alert("Invaild Count");
                    }
                    if (idcheck) {
                        alert("Invalid MedicineID");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function MedicineDetails() {
    return __awaiter(this, void 0, void 0, function () {
        var MedicineList, tablebody, i, row;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    CloseAll();
                    // let medicinepage=document.getElementById("medicinedetails")as HTMLDivElement;
                    mainmenu.style.display = "block";
                    medicinedetails.style.display = "block";
                    return [4 /*yield*/, fetchMedicineDetails()];
                case 1:
                    MedicineList = _a.sent();
                    tablebody = document.querySelector("#table2 tbody");
                    tablebody.innerHTML = "";
                    for (i = 0; i < MedicineList.length; i++) {
                        row = document.createElement("tr");
                        row.innerHTML = "<td>".concat(MedicineList[i].medicineName, "</td>\n            <td>").concat(MedicineList[i].medicineCount, "</td>\n            <td>").concat(MedicineList[i].medicinePrice, "</td>\n            <td>").concat(MedicineList[i].expiryDate, "</td>\n            <td><img src=\"").concat('data:image/jpg;base64,' + MedicineList[i].image, "\"</td>\n            <td><button onclick=\"Edit(").concat(MedicineList[i].medicineID, ")\">Edit</button>\n            <button onclick=\"Delete(").concat(MedicineList[i].medicineID, ")\">Delete</button></td>\n            ");
                        tablebody.append(row);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
var editmedicineid;
// let MedicineList =  fetchMedicineDetails();
function Edit(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            editmedicineid = id;
            CloseAll();
            mainmenu.style.display = "block";
            medicinedetails.style.display = "block";
            medicineeditpage.style.display = "block";
            return [2 /*return*/];
        });
    });
}
function EditSubmit() {
    return __awaiter(this, void 0, void 0, function () {
        var editmedicinename, editmedicinecount, editmedicineprice, MedicineList, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    editmedicinename = document.getElementById("editmedicinename").value;
                    editmedicinecount = document.getElementById("editmedicinecount").value;
                    editmedicineprice = document.getElementById("editmedicineprice").value;
                    return [4 /*yield*/, fetchMedicineDetails()];
                case 1:
                    MedicineList = _a.sent();
                    for (i = 0; i < MedicineList.length; i++) {
                        if (editmedicineid == MedicineList[i].medicineID) {
                            if (editmedicinename != "") {
                                MedicineList[i].medicineName = editmedicinename;
                            }
                            if (editmedicinecount != "") {
                                MedicineList[i].medicineCount = parseInt(editmedicinecount);
                            }
                            if (editmedicineprice != "") {
                                MedicineList[i].medicinePrice = parseInt(editmedicineprice);
                            }
                            updateMedicine(editmedicineid, MedicineList[i]);
                            alert("Medicine Edited Successfully");
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function Delete(id) {
    deleteMedicine(id);
    alert("Medicine Deleted successfully");
}
function AddMedicine() {
    CloseAll();
    mainmenu.style.display = "block";
    medicinedetails.style.display = "block";
    addmedicine.style.display = "block";
}
function MedicineSubmit() {
    return __awaiter(this, void 0, void 0, function () {
        var newmedicinename, newmedicinecount, newmedicineprice, newexpirydate, newmedicineimage, file, data, newmedicine;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newmedicinename = document.getElementById("newmedicinename").value;
                    newmedicinecount = document.getElementById("newmedicinecount").value;
                    newmedicineprice = document.getElementById("newmedicineprice").value;
                    newexpirydate = document.getElementById("newexpirydate").value;
                    newmedicineimage = document.getElementById("newmedicineimage");
                    if (!newmedicineimage.files || newmedicineimage.files.length == 0) {
                        return [2 /*return*/];
                    }
                    file = newmedicineimage.files[0];
                    return [4 /*yield*/, ConvertToByteArr(file)];
                case 1:
                    data = _a.sent();
                    newmedicine = {
                        medicineID: 0,
                        medicineName: newmedicinename,
                        medicineCount: parseInt(newmedicinecount),
                        medicinePrice: parseInt(newmedicineprice),
                        expiryDate: newexpirydate,
                        image: data
                    };
                    AddMedicines(newmedicine);
                    alert("Medicine Added Successfully");
                    return [2 /*return*/];
            }
        });
    });
}
function ConvertToByteArr(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function () {
            var buffer = reader.result;
            var data = buffer.split(",")[1];
            resolve(data);
        };
        reader.onerror = function () {
            reject(new Error('Failed to read data'));
        };
        reader.readAsDataURL(file);
    });
}
function OrderHistory() {
    return __awaiter(this, void 0, void 0, function () {
        var flag, orderlist, tablebody, i, row;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    CloseAll();
                    mainmenu.style.display = "block";
                    orderHistory.style.display = "block";
                    flag = true;
                    return [4 /*yield*/, fetchOrderDetails()];
                case 1:
                    orderlist = _a.sent();
                    tablebody = document.querySelector("#ordertable tbody");
                    tablebody.innerHTML = "";
                    // let history = document.getElementById("history") as HTMLLabelElement;
                    // history.innerHTML = "";
                    for (i = 0; i < orderlist.length; i++) {
                        if (currentuser.userID == orderlist[i].userID) {
                            flag = false;
                            row = document.createElement("tr");
                            row.innerHTML = "<td>".concat(orderlist[i].orderID, "</td>\n                    <td>").concat(orderlist[i].userID, "</td>\n                    <td>").concat(orderlist[i].medicineName, "</td>\n                    <td>").concat(orderlist[i].medicineCount, "</td>\n                    <td>").concat(orderlist[i].totalPrice, "</td>\n                    <td>").concat(orderlist[i].orderStatus, "</td>\n                    ");
                            tablebody.appendChild(row);
                        }
                    }
                    if (flag) {
                        tablebody.innerHTML = "You have no order history";
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function tableToCSV() {
    // Variable to store the final csv data
    var csv_data = [];
    // Get each row data
    var rows = document.querySelectorAll('#ordertable tr');
    for (var i = 0; i < rows.length; i++) {
        // Get each column data
        var cols = rows[i].querySelectorAll('td,th');
        // Stores each csv row data
        var csvrow = [];
        for (var j = 0; j < cols.length; j++) {
            // Get the text data of each cell of
            // a row and push it to csvrow
            csvrow.push(cols[j].innerHTML);
        }
        // Combine each column value with comma
        csv_data.push(csvrow.join(","));
    }
    // Combine each row data with new line character
    csv_data = csv_data.join('\n');
    downloadCSVFile(csv_data);
    /* We will use this function later to download
    the data in a csv file downloadCSVFile(csv_data);
    */
}
function downloadCSVFile(csv_data) {
    // Create CSV file object and feed our
    // csv_data into it
    var CSVFile = new Blob([csv_data], { type: "text/csv" });
    // Create to temporary link to initiate
    // download process
    var temp_link = document.createElement('a');
    // Download csv file
    temp_link.download = "orderhistory.csv";
    var url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;
    // This link should not be displayed
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);
    // Automatically click the link to trigger download 
    temp_link.click();
    document.body.removeChild(temp_link);
}
function CancelOrder() {
    return __awaiter(this, void 0, void 0, function () {
        var flag, orderlist, tablebody, i, row;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    CloseAll();
                    mainmenu.style.display = "block";
                    cancelOrder.style.display = "block";
                    flag = true;
                    return [4 /*yield*/, fetchOrderDetails()];
                case 1:
                    orderlist = _a.sent();
                    tablebody = document.querySelector("#table3 tbody");
                    tablebody.innerHTML = "";
                    for (i = 0; i < orderlist.length; i++) {
                        if (orderlist[i].userID == currentuser.userID && orderlist[i].orderStatus == "Purchased") {
                            flag = false;
                            row = document.createElement("tr");
                            row.innerHTML = "<td>".concat(orderlist[i].orderID, "</td>\n                    <td>").concat(orderlist[i].userID, "</td>\n                    <td>").concat(orderlist[i].medicineName, "</td>\n                    <td>").concat(orderlist[i].medicineCount, "</td>\n                    <td>").concat(orderlist[i].totalPrice, "</td>\n                    <td>").concat(orderlist[i].orderStatus, "</td>\n                    <td><button onclick=\"Cancel(").concat(orderlist[i].orderID, ")\">Cancel</button></td>\n                    ");
                            tablebody.appendChild(row);
                        }
                    }
                    if (flag) {
                        tablebody.innerHTML = "You Have no order cancel";
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function Cancel(id) {
    return __awaiter(this, void 0, void 0, function () {
        var orderlist, medicinelist, i, j;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchOrderDetails()];
                case 1:
                    orderlist = _a.sent();
                    return [4 /*yield*/, fetchMedicineDetails()];
                case 2:
                    medicinelist = _a.sent();
                    for (i = 0; i < orderlist.length; i++) {
                        if (orderlist[i].orderID == id) {
                            orderlist[i].orderStatus = "Cancelled";
                            updateOrder(id, orderlist[i]);
                            for (j = 0; j < medicinelist.length; j++) {
                                if (orderlist[i].medicineName == medicinelist[j].medicineName) {
                                    medicinelist[j].medicineCount += orderlist[i].medicineCount;
                                    updateMedicine(medicinelist[j].medicineID, medicinelist[j]);
                                }
                            }
                            currentuser.balance += orderlist[i].totalPrice;
                            updateUser(currentuser.userID, currentuser);
                            alert("Order Cancelled Successfully");
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function Recharge() {
    CloseAll();
    recharge.style.display = "block";
    mainmenu.style.display = "block";
}
function AmountRecharge() {
    var rechargeamount = document.getElementById("rechargeamount").value;
    currentuser.balance += parseInt(rechargeamount);
    updateUser(currentuser.userID, currentuser);
    alert("Your Updated balance is: ".concat(currentuser.balance));
}
function Balance() {
    CloseAll();
    showbalance.style.display = "block";
    mainmenu.style.display = "block";
    var currentbalance = document.getElementById("currentbalance");
    currentbalance.innerHTML = "Your current balane is: ".concat(currentuser.balance);
}
function Exit() {
    CloseAll();
    homepage.style.display = "block";
}
function fetchUserDetails() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = 'http://localhost:5172/api/UserDetails';
                    return [4 /*yield*/, fetch(apiUrl)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to fetch contacts');
                    }
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function fetchMedicineDetails() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = 'http://localhost:5172/api/medicinedetails';
                    return [4 /*yield*/, fetch(apiUrl)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to fetch contacts');
                    }
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function fetchOrderDetails() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = 'http://localhost:5172/api/orderdetails';
                    return [4 /*yield*/, fetch(apiUrl)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to fetch contacts');
                    }
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function AddUser(users) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:5172/api/UserDetails', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(users)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to add contact');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function AddOrder(order) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:5172/api/orderdetails', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(order)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to add contact');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function AddMedicines(medicine) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:5172/api/medicinedetails', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(medicine)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to add contact');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function updateOrder(id, borrow) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5172/api/orderdetails/".concat(id), {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(borrow)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to update contact');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function updateUser(id, user) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5172/api/UserDetails/".concat(id), {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to update contact');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function updateMedicine(id, medicine) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5172/api/medicinedetails/".concat(id), {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(medicine)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to update contact');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function deleteMedicine(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5172/api/medicinedetails/".concat(id), {
                        method: 'DELETE'
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to delete contact');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// let select = document.getElementById("medicines") as HTMLSelectElement;
// let selectvalue = select.options[select.selectedIndex].value;
// //BuyMedicine(parseInt(count),selectvalue)
// let dum = document.getElementById("purchasing") as HTMLLabelElement;
// dum.innerHTML = "";
// //dum.innerHTML="<button onclick=`BuyMedicine('${id}')`>Check</button">
// dum.innerHTML = `<button onclick="BuyMedicine('${count},${selectvalue}')">Buy</button>`;
// // dum.innerHTML=`<button onclick="BuyMedicine('${count},${selectvalue}')">Buy</button>`;
// async function BuyMedicine(count1: number, value: string) {
//     // let value=prompt("Enter the Count");
//     // let count=parseInt(value);
//     //alert("Hi");
//     // // if(value >= medicineobject.medicineCount)
//     // //     {
//     // //     }
//     let MedicineList = await fetchMedicineDetails();
//     let medicineobject: MedicineDetails;
//     // let count=(document.getElementById("medicinecount")as HTMLInputElement).value;
//     for (let i = 0; i < MedicineList.length; i++) {
//         if (value == MedicineList[i].medicineName) {
//             if (count1 <= MedicineList[i].medicineCount) {
//                 if (currentuser.balance >= MedicineList[i].medicinePrice) {
//                     alert(`You Have successfully buyed ${MedicineList[i].medicineCount} ${MedicineList[i].medicineName}`);
//                 }
//                 else {
//                     alert("Low Balance Please Recharge and continue");
//                 }
//                 break;
//             }
//             else {
//                 let flag: boolean = confirm(`We have only ${MedicineList[i].medicineCount} ${MedicineList[i].medicineName}.Do you want buy ${MedicineList[i].medicineCount} ${MedicineList[i].medicineName} ?`);
//                 if (flag) {
//                     alert(`You Have successfully buyed ${MedicineList[i].medicineCount} ${MedicineList[i].medicineName}`);
//                 }
//                 break;
//             }
//         }
//     }
// }
