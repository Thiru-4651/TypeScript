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
var currentuser;
var count = 2;
var homepage = document.getElementById("homepage");
var register = document.getElementById("register");
var login = document.getElementById("login");
var mainmenu = document.getElementById("mainmenu");
var welcome = document.getElementById("welcome");
var borrowbook = document.getElementById("borrowbook");
var showBorrowedhistory = document.getElementById("showBorrowedhistory");
var returnbooks = document.getElementById("returnbooks");
var walletRecharge = document.getElementById("walletRecharge");
var buypage = document.getElementById("buypage");
var returnpage = document.getElementById("returnpage");
function CloseAll() {
    homepage.style.display = "none";
    register.style.display = "none";
    login.style.display = "none";
    mainmenu.style.display = "none";
    welcome.style.display = "none";
    borrowbook.style.display = "none";
    buypage.style.display = "none";
    showBorrowedhistory.style.display = "none";
    returnbooks.style.display = "none";
    returnpage.style.display = "none";
    walletRecharge.style.display = "none";
}
function NewUser() {
    CloseAll();
    register.style.display = "block";
}
function Register() {
    var newusername = document.getElementById("newusername").value;
    var newdepartment = document.getElementById("newdepartment").value;
    var newmobilenumber = document.getElementById("newmobilenumber").value;
    var newmail = document.getElementById("newmail").value;
    var newpassword = document.getElementById("newpassword").value;
    var newuser = {
        userID: 3,
        userName: newusername,
        department: newdepartment,
        email: newmail,
        password: newpassword,
        mobileNumber: newmobilenumber,
        balance: 100
    };
    addUsers(newuser);
    alert("Registered Successfully");
    CloseAll();
    //login.style.display="block";
    ExcistingUser();
}
function ExcistingUser() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            CloseAll();
            login.style.display = "block";
            return [2 /*return*/];
        });
    });
}
function Login() {
    return __awaiter(this, void 0, void 0, function () {
        var newusermail, signinpassword, userlist, flag, flag1, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newusermail = document.getElementById("newuserid").value;
                    signinpassword = document.getElementById("signinpassword").value;
                    return [4 /*yield*/, fetchUsers()];
                case 1:
                    userlist = _a.sent();
                    flag = true;
                    flag1 = true;
                    for (i = 0; i < userlist.length; i++) {
                        if (newusermail == userlist[i].email) {
                            flag = false;
                            if (signinpassword == userlist[i].password) {
                                flag1 = false;
                                currentuser = userlist[i];
                                alert("Logged In Successfully");
                                Mainmenu();
                            }
                        }
                    }
                    if (flag) {
                        alert("Invalid MailID");
                    }
                    if (flag1) {
                        alert("Invalid Password");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function Mainmenu() {
    CloseAll();
    mainmenu.style.display = "block";
    welcome.style.display = "block";
    var welcomemessage = document.getElementById("welcomemessage");
    welcomemessage.innerHTML = "Welcome ".concat(currentuser.userName);
}
function Home() {
    Mainmenu();
}
function Exit() {
    CloseAll();
    homepage.style.display = "block";
}
function Borrowbook() {
    return __awaiter(this, void 0, void 0, function () {
        var tablebody, booklist, i, row;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    CloseAll();
                    mainmenu.style.display = "block";
                    borrowbook.style.display = "block";
                    tablebody = document.querySelector("#table1 tbody");
                    tablebody.innerHTML = "";
                    return [4 /*yield*/, fetchBooks()];
                case 1:
                    booklist = _a.sent();
                    for (i = 0; i < booklist.length; i++) {
                        row = document.createElement("tr");
                        row.innerHTML += "<table><tr><td> ".concat(booklist[i].bookID, "</td>\n    <tr>").concat(booklist[i].bookName, "</tr>\n    <td>").concat(booklist[i].authorName, "</td>\n    <td>").concat(booklist[i].bookCount, "</td>\n    <td><button onclick=\"Check(").concat(booklist[i].bookID, ")\">Check</button></td></tr></table>");
                        tablebody.appendChild(row);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
var selectedbookid;
function Check(id) {
    selectedbookid = id;
    CloseAll();
    mainmenu.style.display = "block";
    borrowbook.style.display = "block";
    buypage.style.display = "block";
}
function Borrow() {
    return __awaiter(this, void 0, void 0, function () {
        var newbookcount, flag, booklist, i, newborrow;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newbookcount = document.getElementById("newbookcount").value;
                    flag = true;
                    return [4 /*yield*/, fetchBooks()];
                case 1:
                    booklist = _a.sent();
                    for (i = 0; i < booklist.length; i++) {
                        if (booklist[i].bookID == selectedbookid) {
                            flag = false;
                            if (booklist[i].bookCount >= parseInt(newbookcount)) {
                                booklist[i].bookCount -= parseInt(newbookcount);
                                updateBook(booklist[i].bookID, booklist[i]);
                                newborrow = {
                                    borrowID: 5,
                                    bookID: selectedbookid,
                                    userID: currentuser.userID,
                                    borrowedDate: new Date(),
                                    borrowBookCount: parseInt(newbookcount),
                                    status: "Borrowed",
                                    paidFineAmount: 0
                                };
                                addBorrows(newborrow);
                                alert("Book Borrowed Successfully");
                            }
                            else {
                                alert("Book count not available");
                            }
                        }
                    }
                    if (flag) {
                        alert("Invalid BookID");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function ShowBorrowedhistory() {
    return __awaiter(this, void 0, void 0, function () {
        var borrowdetails, borrowlist, flag, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    CloseAll();
                    mainmenu.style.display = "block";
                    showBorrowedhistory.style.display = "block";
                    borrowdetails = document.getElementById("borrowdetails");
                    return [4 /*yield*/, fetchBorrows()];
                case 1:
                    borrowlist = _a.sent();
                    flag = true;
                    borrowdetails.innerHTML = "";
                    for (i = 0; i < borrowlist.length; i++) {
                        if (currentuser.userID == borrowlist[i].userID) {
                            flag = false;
                            borrowdetails.innerHTML += "BorrowID: ".concat(borrowlist[i].borrowID, "  | BookID: ").concat(borrowlist[i].bookID, " UserID: ").concat(borrowlist[i].userID, " |BorrowDate:  ").concat(borrowlist[i].borrowedDate, " |BorrowBookCount: ").concat(borrowlist[i].borrowBookCount, "  |Status: ").concat(borrowlist[i].status, " | PaidFineAmount:").concat(borrowlist[i].paidFineAmount, "<br>");
                        }
                    }
                    if (flag) {
                        alert("You have no borrowed History");
                        borrowdetails.innerHTML = "You have no borrowed History";
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function ReturnBooks() {
    return __awaiter(this, void 0, void 0, function () {
        var inlinereturnbooks, borrowlist, flag, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    CloseAll();
                    mainmenu.style.display = "block";
                    returnbooks.style.display = "block";
                    inlinereturnbooks = document.getElementById("inlinereturnbooks");
                    inlinereturnbooks.innerHTML = "";
                    return [4 /*yield*/, fetchBorrows()];
                case 1:
                    borrowlist = _a.sent();
                    flag = true;
                    for (i = 0; i < borrowlist.length; i++) {
                        if (currentuser.userID == borrowlist[i].userID && borrowlist[i].status == "Borrowed") {
                            flag = false;
                            inlinereturnbooks.innerHTML += "BorrowID: ".concat(borrowlist[i].borrowID, "  | BookID: ").concat(borrowlist[i].bookID, " UserID: ").concat(borrowlist[i].userID, "  |BorrowBookCount: ").concat(borrowlist[i].borrowBookCount, "  |Status: ").concat(borrowlist[i].status, " <br>");
                            //Return();
                        }
                    }
                    if (flag) {
                        alert("You haven't buyed any book to return");
                        inlinereturnbooks.innerHTML = "You haven't buyed any book to return";
                    }
                    else {
                        CloseAll();
                        mainmenu.style.display = "block";
                        returnbooks.style.display = "block";
                        returnpage.style.display = "block";
                        // let borrowlist = await fetchBorrows();
                        // let newborrowedid = (document.getElementById("newborrowedid") as HTMLInputElement).value;
                        // let flag = true;
                        // for (let i = 0; i < borrowlist.length; i++) {
                        //   if (currentuser.userID == borrowlist[i].userID && borrowlist[i].status == "Borrowed" && parseInt(newborrowedid) == borrowlist[i].borrowID) {
                        //     flag = false;
                        //     borrowlist[i].status = "Returned";
                        //     updateBorrow(borrowlist[i].borrowID, borrowlist[i]);
                        //     alert("Book Returned Successfully");
                        //   }
                        // }
                        // if (flag) {
                        //   alert("Invalid BorrowID");
                        // }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function Return() {
    return __awaiter(this, void 0, void 0, function () {
        var borrowlist, newborrowedid, flag, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchBorrows()];
                case 1:
                    borrowlist = _a.sent();
                    newborrowedid = document.getElementById("newborrowedid").value;
                    flag = true;
                    for (i = 0; i < borrowlist.length; i++) {
                        if (currentuser.userID == borrowlist[i].userID && borrowlist[i].status == "Borrowed" && parseInt(newborrowedid) == borrowlist[i].borrowID) {
                            flag = false;
                            borrowlist[i].status = "Returned";
                            updateBorrow(borrowlist[i].borrowID, borrowlist[i]);
                            alert("Book Returned Successfully");
                        }
                    }
                    if (flag) {
                        alert("Invalid BorrowID");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function WalletRecharge() {
    CloseAll();
    mainmenu.style.display = "block";
    walletRecharge.style.display = "block";
}
function Recharge() {
    var rechargeamount = document.getElementById("rechargeamount").value;
    var rechargemessage = document.getElementById("rechargemessage");
    currentuser.balance += parseInt(rechargeamount);
    updateUser(currentuser.userID, currentuser);
    rechargemessage.innerHTML = "Your Updated Balance is: ".concat(currentuser.balance);
}
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = 'http://localhost:5043/api/userdetails';
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
function fetchBooks() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = 'http://localhost:5043/api/bookdetails';
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
function fetchBorrows() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = 'http://localhost:5043/api/borrowdetails';
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
function addUsers(user) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:5043/api/userdetails', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(user)
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
function addBorrows(borrow) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:5043/api/borrowdetails', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(borrow)
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
function updateBook(id, book) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5043/api/bookdetails/".concat(id), {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(book)
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
function updateBorrow(id, borrow) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5043/api/borrowdetails/".concat(id), {
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
function updateUser(id, book) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5043/api/userdetails/".concat(id), {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(book)
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
