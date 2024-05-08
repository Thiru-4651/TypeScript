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
var cardnumberIncreament = 1000;
var travelidAutoIncreament = 2000;
var ticketidAutoIncreament = 3000;
//let defaultuserbalance:number = 50;
var autoincreament = 0;
var currentusercardnumber;
var currentusername;
var currentuser;
// let UserList: Array<UserDetails> = new Array<UserDetails>();
// UserList.push(new userDetails("Ravi", 9848812345, 1000));
// UserList.push(new UserDetails("Baskaran", 9848854321, 1000));
// let TravelList: Array<TravelDetails> = new Array<TravelDetails>();
// TravelList.push(new TravelDetails("CMRL1001", "Airport", "Egmore", "10/10/2023", 55));
// TravelList.push(new TravelDetails("CMRL1001", "Egmore", "Koyambedu", "10/10/2023", 32));
// TravelList.push(new TravelDetails("CMRL1002", "Alandur", "Koyambedu", "10/11/2023", 25));
// TravelList.push(new TravelDetails("CMRL1002", "Egmore", "Thirumangalam", "10/11/2023", 25));
// let TicketfairList: Array<TicketfairDetails> = new Array<TicketfairDetails>();
// TicketfairList.push(new TicketfairDetails("Airport", "Egmore", 55));
// TicketfairList.push(new TicketfairDetails("Airport", "Koyambedu", 25));
// TicketfairList.push(new TicketfairDetails("Alandur", "Koyambedu", 25));
// TicketfairList.push(new TicketfairDetails("Koyambedu", "Egmore", 32));
// TicketfairList.push(new TicketfairDetails("Vadapalani", "Egmore", 45));
// TicketfairList.push(new TicketfairDetails("Arumbakkam", "Egmore", 25));
// TicketfairList.push(new TicketfairDetails("Vadapalani", "Koyambedu", 25));
// TicketfairList.push(new TicketfairDetails("Arumbakkam", "Koyambedu", 16));
//Individual page id's 
var homepage = document.getElementById("homepage");
var newuserpage = document.getElementById("newuserpage");
var reigistereduserpage = document.getElementById("reigistereduserpage");
var mainmenu = document.getElementById("mainmenu");
var greetingspage = document.getElementById("greetingspage");
var balancecheck = document.getElementById("balancecheck");
var recharge = document.getElementById("recharge");
var viewtravelhistory = document.getElementById("viewtravelhistory");
var travel = document.getElementById("travel");
var exit = document.getElementById("exit");
function newuser() {
    homepage.style.display = "none";
    newuserpage.style.display = "block";
}
function register() {
    var username = document.getElementById("newusername").value;
    var newuserphonenumber = document.getElementById("newuserphonenumber").value;
    var user = {
        cardNumber: -1,
        userName: username,
        phoneNumber: newuserphonenumber,
        balance: 0
    };
    addUser(user);
    // UserList.push(new UserDetails(username, +newuserphonenumber, defaultuserbalance))
    homepage.style.display = "block";
    newuserpage.style.display = "none";
}
function registereduser() {
    return __awaiter(this, void 0, void 0, function () {
        var availableusers, UserList, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    homepage.style.display = "none";
                    reigistereduserpage.style.display = "block";
                    availableusers = document.getElementById("availableusers");
                    return [4 /*yield*/, fetchUserDetails()];
                case 1:
                    UserList = _a.sent();
                    availableusers.innerHTML = "";
                    for (i = 0; i < UserList.length; i++) {
                        availableusers.innerHTML += "CardNumber: ".concat(UserList[i].cardNumber, " | UserName: ").concat(UserList[i].userName, " | PhoneNumber: ").concat(UserList[i].phoneNumber, " <br> ");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function login() {
    return __awaiter(this, void 0, void 0, function () {
        var flag, cardnumber, UserList, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    flag = true;
                    cardnumber = document.getElementById("cardnumber").value;
                    return [4 /*yield*/, fetchUserDetails()];
                case 1:
                    UserList = _a.sent();
                    for (i = 0; i < UserList.length; i++) {
                        if (parseInt(cardnumber) == UserList[i].cardNumber) {
                            alert("You are logged in successfully");
                            flag = false;
                            currentusercardnumber = parseInt(cardnumber);
                            currentusername = UserList[i].userName;
                            currentuser = UserList[i];
                            Mainmenu();
                            // break;
                        }
                    }
                    if (flag) {
                        alert("Enter the valid cardnumber");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function Mainmenu() {
    mainmenu.style.display = "block";
    greetingspage.style.display = "block";
    reigistereduserpage.style.display = "none";
    homepage.style.display = "none";
    newuserpage.style.display = "none";
    recharge.style.display = "none";
    viewtravelhistory.style.display = "none";
    travel.style.display = "none";
    exit.style.display = "none";
    balancecheck.style.display = "none";
    var greet = document.getElementById("greetings");
    greet.innerHTML = "Welcome ".concat(currentusername);
}
function Home() {
    Mainmenu();
}
function Balancecheck() {
    mainmenu.style.display = "block";
    balancecheck.style.display = "block";
    homepage.style.display = "none";
    newuserpage.style.display = "none";
    reigistereduserpage.style.display = "none";
    greetingspage.style.display = "none";
    recharge.style.display = "none";
    viewtravelhistory.style.display = "none";
    travel.style.display = "none";
    exit.style.display = "none";
    var balance = document.getElementById("balance");
    balance.innerHTML = "Your account balance is: ".concat(currentuser.balance);
}
function Recharge() {
    mainmenu.style.display = "block";
    recharge.style.display = "block";
    homepage.style.display = "none";
    newuserpage.style.display = "none";
    reigistereduserpage.style.display = "none";
    greetingspage.style.display = "none";
    balancecheck.style.display = "none";
    viewtravelhistory.style.display = "none";
    travel.style.display = "none";
    exit.style.display = "none";
}
function amountrecharge() {
    var rechargeamount = parseInt(document.getElementById("rechargeamount").value);
    if (+rechargeamount > 0) {
        currentuser.balance += rechargeamount;
        updateBalance(currentusercardnumber, currentuser);
        alert("Amount Recharged Successfully");
    }
    else {
        alert("Minimum Amount to be recharged is 1");
    }
}
function Viewtravelhistory() {
    return __awaiter(this, void 0, void 0, function () {
        var travelhistory, flag, TravelList, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mainmenu.style.display = "block";
                    viewtravelhistory.style.display = "block";
                    homepage.style.display = "none";
                    newuserpage.style.display = "none";
                    reigistereduserpage.style.display = "none";
                    greetingspage.style.display = "none";
                    balancecheck.style.display = "none";
                    recharge.style.display = "none";
                    travel.style.display = "none";
                    exit.style.display = "none";
                    travelhistory = document.getElementById("travelhistory");
                    travelhistory.innerHTML = "";
                    flag = true;
                    return [4 /*yield*/, fetchTravelDetails()];
                case 1:
                    TravelList = _a.sent();
                    for (i = 0; i < TravelList.length; i++) {
                        if (+currentusercardnumber == TravelList[i].cardNumber) {
                            flag = false;
                            travelhistory.innerHTML += "TravelID: ".concat(TravelList[i].travelID, " | CardNumber: ").concat(TravelList[i].cardNumber, "  |  FromLocation: ").concat(TravelList[i].fromLocation, "  |  ToLocation: ").concat(TravelList[i].toLocation, "  |  Date: ").concat(TravelList[i].date.toString(), "  |    TravelCost: ").concat(TravelList[i].travelCost, " <br>");
                        }
                    }
                    if (flag) {
                        travelhistory.innerHTML = "<h4>You Have No Travel History</h4>";
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function Travel() {
    return __awaiter(this, void 0, void 0, function () {
        var ticketfair, TicketfairList, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mainmenu.style.display = "block";
                    travel.style.display = "block";
                    homepage.style.display = "none";
                    newuserpage.style.display = "none";
                    reigistereduserpage.style.display = "none";
                    greetingspage.style.display = "none";
                    balancecheck.style.display = "none";
                    recharge.style.display = "none";
                    viewtravelhistory.style.display = "none";
                    exit.style.display = "none";
                    ticketfair = document.getElementById("ticketfair");
                    ticketfair.innerHTML = "";
                    return [4 /*yield*/, fetchTicketfairDetails()];
                case 1:
                    TicketfairList = _a.sent();
                    for (i = 0; i < TicketfairList.length; i++) {
                        ticketfair.innerHTML += "TicketID: ".concat(TicketfairList[i].ticketID, " | FromLocation: ").concat(TicketfairList[i].fromLocation, " | ToLocation: ").concat(TicketfairList[i].toLocation, " | TicketPrice: ").concat(TicketfairList[i].ticketPrice, " <br>");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function Check() {
    return __awaiter(this, void 0, void 0, function () {
        var flag, newticketid, TicketfairList, i, travel_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    flag = true;
                    newticketid = document.getElementById("newticketid").value;
                    return [4 /*yield*/, fetchTicketfairDetails()];
                case 1:
                    TicketfairList = _a.sent();
                    //const TravelList=await fetchTravelDetails();
                    for (i = 0; i < TicketfairList.length; i++) {
                        if (+newticketid == TicketfairList[i].ticketID) {
                            flag = false;
                            if (currentuser.balance >= TicketfairList[i].ticketPrice) {
                                currentuser.balance -= TicketfairList[i].ticketPrice;
                                alert("Ticket Purchased Successfully");
                                travel_1 = {
                                    travelID: -1,
                                    cardNumber: currentusercardnumber,
                                    fromLocation: TicketfairList[i].fromLocation,
                                    toLocation: TicketfairList[i].toLocation,
                                    date: new Date(),
                                    travelCost: TicketfairList[i].ticketPrice
                                };
                                addTravel(travel_1);
                                break;
                            }
                            else {
                                alert("Low Balance!.Please Recharge and continue");
                            }
                        }
                    }
                    if (flag) {
                        alert("Invalid Ticket id.");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function Exit() {
    homepage.style.display = "block";
    newuserpage.style.display = "none";
    reigistereduserpage.style.display = "none";
    greetingspage.style.display = "none";
    balancecheck.style.display = "none";
    recharge.style.display = "none";
    viewtravelhistory.style.display = "none";
    exit.style.display = "none";
    mainmenu.style.display = "none";
    travel.style.display = "none";
}
function addUser(user) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:5093/api/UserDetails', {
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
function addTravel(travel) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:5093/api/TravelDetails', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(travel)
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
function fetchTravelDetails() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = 'http://localhost:5093/api/TravelDetails';
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
function fetchUserDetails() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = 'http://localhost:5093/api/UserDetails';
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
function fetchTicketfairDetails() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = 'http://localhost:5093/api/TicketfairDetails';
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
function updateBalance(id, user) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5093/api/UserDetails/".concat(id), {
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
