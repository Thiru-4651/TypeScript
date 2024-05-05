var cardnumberIncreament = 1000;
var travelidAutoIncreament = 2000;
var ticketidAutoIncreament = 3000;
var defaultuserbalance = 50;
var currentusercardnumber;
var currentusername;
var UserDetails = /** @class */ (function () {
    function UserDetails(username, phonenumber, balance) {
        cardnumberIncreament++;
        this.Cardnumber = "CMRL" + cardnumberIncreament;
        this.Username = username;
        this.Phonenumber = phonenumber;
        this.Balance = balance;
    }
    return UserDetails;
}());
var TravelDetails = /** @class */ (function () {
    function TravelDetails(cardnumber, fromlocation, tolocation, date, travelcost) {
        travelidAutoIncreament++;
        this.TravelID = "TID" + travelidAutoIncreament;
        this.Cardnumber = cardnumber;
        this.Fromlocation = fromlocation;
        this.Tolocation = tolocation;
        this.Date = date;
        this.Travelcost = travelcost;
    }
    return TravelDetails;
}());
var TicketfairDetails = /** @class */ (function () {
    function TicketfairDetails(fromlocation, tolocation, ticketprice) {
        ticketidAutoIncreament++;
        this.TicketID = "MR" + ticketidAutoIncreament;
        this.Fromlocation = fromlocation;
        this.Tolocation = tolocation;
        this.Ticketprice = ticketprice;
    }
    return TicketfairDetails;
}());
var UserList = new Array();
UserList.push(new UserDetails("Ravi", 9848812345, 1000));
UserList.push(new UserDetails("Baskaran", 9848854321, 1000));
var TravelList = new Array();
TravelList.push(new TravelDetails("CMRL1001", "Airport", "Egmore", "10/10/2023", 55));
TravelList.push(new TravelDetails("CMRL1001", "Egmore", "Koyambedu", "10/10/2023", 32));
TravelList.push(new TravelDetails("CMRL1002", "Alandur", "Koyambedu", "10/11/2023", 25));
TravelList.push(new TravelDetails("CMRL1002", "Egmore", "Thirumangalam", "10/11/2023", 25));
var TicketfairList = new Array();
TicketfairList.push(new TicketfairDetails("Airport", "Egmore", 55));
TicketfairList.push(new TicketfairDetails("Airport", "Koyambedu", 25));
TicketfairList.push(new TicketfairDetails("Alandur", "Koyambedu", 25));
TicketfairList.push(new TicketfairDetails("Koyambedu", "Egmore", 32));
TicketfairList.push(new TicketfairDetails("Vadapalani", "Egmore", 45));
TicketfairList.push(new TicketfairDetails("Arumbakkam", "Egmore", 25));
TicketfairList.push(new TicketfairDetails("Vadapalani", "Koyambedu", 25));
TicketfairList.push(new TicketfairDetails("Arumbakkam", "Koyambedu", 16));
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
    UserList.push(new UserDetails(username, +newuserphonenumber, defaultuserbalance));
    homepage.style.display = "block";
    newuserpage.style.display = "none";
}
function registereduser() {
    homepage.style.display = "none";
    reigistereduserpage.style.display = "block";
    var availableusers = document.getElementById("availableusers");
    for (var i = 0; i < UserList.length; i++) {
        availableusers.innerHTML += "CardNumber: ".concat(UserList[i].Cardnumber, " | UserName: ").concat(UserList[i].Username, " <br> ");
    }
}
function login() {
    var flag = true;
    var cardnumber = document.getElementById("cardnumber").value;
    for (var i = 0; i < UserList.length; i++) {
        if (cardnumber == UserList[i].Cardnumber) {
            alert("You are logged in successfully");
            flag = false;
            currentusercardnumber = cardnumber;
            currentusername = UserList[i].Username;
            Mainmenu();
            // break;
        }
    }
    if (flag) {
        alert("Enter the valid cardnumber");
    }
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
    balance.innerHTML = "Your account balance is: ".concat(defaultuserbalance);
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
        defaultuserbalance += rechargeamount;
        alert("Amount Recharged Successfully");
    }
    else {
        alert("Minimum Amount to be recharged is 1");
    }
}
function Viewtravelhistory() {
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
    var travelhistory = document.getElementById("travelhistory");
    travelhistory.innerHTML = "";
    var flag = true;
    for (var i = 0; i < TravelList.length; i++) {
        if (currentusercardnumber == TravelList[i].Cardnumber) {
            flag = false;
            travelhistory.innerHTML += "TravelID: ".concat(TravelList[i].TravelID, " | CardNumber: ").concat(TravelList[i].Cardnumber, "  |  FromLocation: ").concat(TravelList[i].Fromlocation, "  |  ToLocation: ").concat(TravelList[i].Tolocation, "  |  Date: ").concat(TravelList[i].Date, "  |    TravelCost: ").concat(TravelList[i].Travelcost, " <br>");
        }
    }
    if (flag) {
        travelhistory.innerHTML = "<h4>You Have No Travel History</h4>";
    }
}
function Travel() {
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
    var ticketfair = document.getElementById("ticketfair");
    ticketfair.innerHTML = "";
    for (var i = 0; i < TicketfairList.length; i++) {
        ticketfair.innerHTML += "TicketID: ".concat(TicketfairList[i].TicketID, " | FromLocation: ").concat(TicketfairList[i].Fromlocation, " | ToLocation: ").concat(TicketfairList[i].Tolocation, " | TicketPrice: ").concat(TicketfairList[i].Ticketprice, " <br>");
    }
}
function Check() {
    var flag = true;
    var newticketid = document.getElementById("newticketid").value;
    for (var i = 0; i < TicketfairList.length; i++) {
        if (newticketid == TicketfairList[i].TicketID) {
            flag = false;
            if (defaultuserbalance >= TicketfairList[i].Ticketprice) {
                defaultuserbalance -= TicketfairList[i].Ticketprice;
                alert("Ticket Purchased Successfully");
                TravelList.push(new TravelDetails(currentusercardnumber, TicketfairList[i].Fromlocation, TicketfairList[i].Tolocation, Date().toString("dd/MM/yyyy"), TicketfairList[i].Ticketprice));
            }
            else {
                alert("Low Balance!.Please Recharge and continue");
            }
        }
    }
    if (flag) {
        alert("Invalid Ticket id.");
    }
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
