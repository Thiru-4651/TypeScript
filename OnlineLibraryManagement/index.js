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
var count = 3;
var homepage = document.getElementById("homepage");
var register = document.getElementById("register");
var login = document.getElementById("login");
var mainmenu = document.getElementById("mainmenu");
var welcome = document.getElementById("welcome");
var borrowbook = document.getElementById("borrowbook");
var showBorrowedhistory = document.getElementById("showBorrowedhistory");
var returnbooks = document.getElementById("returnbooks");
var walletRecharge = document.getElementById("walletRecharge");
function CloseAll() {
    homepage.style.display = "none";
    register.style.display = "none";
    login.style.display = "none";
    mainmenu.style.display = "none";
    welcome.style.display = "none";
    borrowbook.style.display = "none";
    showBorrowedhistory.style.display = "none";
    returnbooks.style.display = "none";
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
    var newuser = {
        userID: count++,
        userName: newusername,
        department: newdepartment,
        mobileNumber: newmobilenumber,
        balance: 0
    };
    addUsers(newuser);
    alert("Registered Successfully");
    CloseAll();
    homepage.style.display = "block";
}
function ExcistingUser() {
    return __awaiter(this, void 0, void 0, function () {
        var userlist, availableusers, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    CloseAll();
                    login.style.display = "block";
                    return [4 /*yield*/, fetchUsers()];
                case 1:
                    userlist = _a.sent();
                    availableusers = document.getElementById("availableusers");
                    availableusers.innerHTML = "";
                    for (i = 0; i < userlist.length; i++) {
                        availableusers.innerHTML += "UserID:".concat(userlist[i].userID, " |  UserName: ").concat(userlist[i].userName, " <br>");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function Login() {
    return __awaiter(this, void 0, void 0, function () {
        var newuserid;
        return __generator(this, function (_a) {
            newuserid = document.getElementById("newuserid").value;
            return [2 /*return*/];
        });
    });
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
                case 0: return [4 /*yield*/, fetch('http://localhost:5043/api/bookdetails', {
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
