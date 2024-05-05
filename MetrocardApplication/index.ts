let cardnumberIncreament = 1000;
let travelidAutoIncreament = 2000;
let ticketidAutoIncreament = 3000;
let defaultuserbalance:number = 50;

let currentusercardnumber: string;
let currentusername: string;

class UserDetails {
    Cardnumber: string;
    Username: string;
    Phonenumber: number;
    Balance: number;
    constructor(username: string, phonenumber: number, balance: number) {
        cardnumberIncreament++;
        this.Cardnumber = "CMRL" + cardnumberIncreament;
        this.Username = username;
        this.Phonenumber = phonenumber;
        this.Balance = balance;
    }
}


class TravelDetails {
    TravelID: string;
    Cardnumber: string;
    Fromlocation: string;
    Tolocation: string;
    Date: string;
    Travelcost: number;

    constructor(cardnumber: string, fromlocation: string, tolocation: string, date: string, travelcost: number) {
        travelidAutoIncreament++;
        this.TravelID = "TID" + travelidAutoIncreament;
        this.Cardnumber = cardnumber;
        this.Fromlocation = fromlocation;
        this.Tolocation = tolocation;
        this.Date = date;
        this.Travelcost = travelcost;
    }
}


class TicketfairDetails {
    TicketID: string;
    Fromlocation: string;
    Tolocation: string;
    Ticketprice: number;
    constructor(fromlocation: string, tolocation: string, ticketprice: number) {
        ticketidAutoIncreament++;
        this.TicketID = "MR" + ticketidAutoIncreament;
        this.Fromlocation = fromlocation;
        this.Tolocation = tolocation;
        this.Ticketprice = ticketprice;
    }
}

let UserList: Array<UserDetails> = new Array<UserDetails>();
UserList.push(new UserDetails("Ravi", 9848812345, 1000));
UserList.push(new UserDetails("Baskaran", 9848854321, 1000));


let TravelList: Array<TravelDetails> = new Array<TravelDetails>();
TravelList.push(new TravelDetails("CMRL1001", "Airport", "Egmore", "10/10/2023", 55));
TravelList.push(new TravelDetails("CMRL1001", "Egmore", "Koyambedu", "10/10/2023", 32));
TravelList.push(new TravelDetails("CMRL1002", "Alandur", "Koyambedu", "10/11/2023", 25));
TravelList.push(new TravelDetails("CMRL1002", "Egmore", "Thirumangalam", "10/11/2023", 25));


let TicketfairList: Array<TicketfairDetails> = new Array<TicketfairDetails>();
TicketfairList.push(new TicketfairDetails("Airport", "Egmore", 55));
TicketfairList.push(new TicketfairDetails("Airport", "Koyambedu", 25));
TicketfairList.push(new TicketfairDetails("Alandur", "Koyambedu", 25));
TicketfairList.push(new TicketfairDetails("Koyambedu", "Egmore", 32));
TicketfairList.push(new TicketfairDetails("Vadapalani", "Egmore", 45));
TicketfairList.push(new TicketfairDetails("Arumbakkam", "Egmore", 25));
TicketfairList.push(new TicketfairDetails("Vadapalani", "Koyambedu", 25));
TicketfairList.push(new TicketfairDetails("Arumbakkam", "Koyambedu", 16));


//Individual page id's 

const homepage = document.getElementById("homepage") as HTMLDivElement;
const newuserpage = document.getElementById("newuserpage") as HTMLDivElement;
const reigistereduserpage = document.getElementById("reigistereduserpage") as HTMLDivElement;
const mainmenu = document.getElementById("mainmenu") as HTMLDivElement;
const greetingspage = document.getElementById("greetingspage") as HTMLDivElement;
const balancecheck = document.getElementById("balancecheck") as HTMLDivElement;
const recharge = document.getElementById("recharge") as HTMLDivElement;
const viewtravelhistory = document.getElementById("viewtravelhistory") as HTMLDivElement;
const travel = document.getElementById("travel") as HTMLDivElement;
const exit = document.getElementById("exit") as HTMLDivElement;

function newuser() {
    homepage.style.display = "none";
    newuserpage.style.display = "block";
}

function register() {
    let username = (document.getElementById("newusername") as HTMLInputElement).value;
    let newuserphonenumber = (document.getElementById("newuserphonenumber") as HTMLInputElement).value;

    UserList.push(new UserDetails(username, +newuserphonenumber, defaultuserbalance))

    homepage.style.display = "block";
    newuserpage.style.display = "none";
}

function registereduser() {
    homepage.style.display = "none";
    reigistereduserpage.style.display = "block";

    let availableusers = document.getElementById("availableusers") as HTMLLabelElement;

    for (let i = 0; i < UserList.length; i++) {
        availableusers.innerHTML += `CardNumber: ${UserList[i].Cardnumber} | UserName: ${UserList[i].Username} <br> `
    }
}

function login() {

    let flag: boolean = true;
    let cardnumber = (document.getElementById("cardnumber") as HTMLInputElement).value;



    for (let i = 0; i < UserList.length; i++) {
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

    let greet = document.getElementById("greetings") as HTMLLabelElement;
    greet.innerHTML = `Welcome ${currentusername}`;
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

    let balance = document.getElementById("balance") as HTMLLabelElement;

    balance.innerHTML = `Your account balance is: ${defaultuserbalance}`;
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
    let rechargeamount = parseInt((document.getElementById("rechargeamount") as HTMLInputElement).value);

    if (+rechargeamount > 0) {

        defaultuserbalance+=rechargeamount;
        alert("Amount Recharged Successfully");
    }
    else
    {
        alert("Minimum Amount to be recharged is 1");
    }

}

function Viewtravelhistory()
{
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

    let travelhistory=document.getElementById("travelhistory")as HTMLLabelElement;
    travelhistory.innerHTML="";
    let flag:boolean=true;
    
    for(let i=0;i<TravelList.length;i++)
        {
            if(currentusercardnumber==TravelList[i].Cardnumber)
                {
                    flag=false;
                    travelhistory.innerHTML+=`TravelID: ${TravelList[i].TravelID} | CardNumber: ${TravelList[i].Cardnumber}  |  FromLocation: ${TravelList[i].Fromlocation}  |  ToLocation: ${TravelList[i].Tolocation}  |  Date: ${TravelList[i].Date}  |    TravelCost: ${TravelList[i].Travelcost} <br>`;
                }
        }
        if(flag)
            {
                travelhistory.innerHTML="<h4>You Have No Travel History</h4>";
            }
}

function Travel()
{
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

    let ticketfair=document.getElementById("ticketfair")as HTMLLabelElement;
    ticketfair.innerHTML="";

    for(let i=0;i<TicketfairList.length;i++)
        {
            ticketfair.innerHTML+=`TicketID: ${TicketfairList[i].TicketID} | FromLocation: ${TicketfairList[i].Fromlocation} | ToLocation: ${TicketfairList[i].Tolocation} | TicketPrice: ${TicketfairList[i].Ticketprice} <br>`;
        }

    
}

function Check()
{
    let flag:boolean=true;

    let newticketid=(document.getElementById("newticketid")as HTMLInputElement).value;
    
    for(let i=0;i<TicketfairList.length;i++)
        {
            if(newticketid==TicketfairList[i].TicketID)
                {
                    flag=false;
                    if(defaultuserbalance>=TicketfairList[i].Ticketprice)
                        {
                            defaultuserbalance-=TicketfairList[i].Ticketprice;
                            alert("Ticket Purchased Successfully");
                            TravelList.push(new TravelDetails(currentusercardnumber,TicketfairList[i].Fromlocation,TicketfairList[i].Tolocation,Date(),TicketfairList[i].Ticketprice))
                        }
                    else
                    {
                        alert("Low Balance!.Please Recharge and continue");
                    }
                }
        }
        if(flag)
            {
                alert("Invalid Ticket id.");
            }
}

function Exit()
{
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


