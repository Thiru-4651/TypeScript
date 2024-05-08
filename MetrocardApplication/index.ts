let cardnumberIncreament = 1000;
let travelidAutoIncreament = 2000;
let ticketidAutoIncreament = 3000;
//let defaultuserbalance:number = 50;
const autoincreament=0;
let currentusercardnumber: number;
let currentusername: string;
let currentuser:UserDetails;

interface UserDetails {
    cardNumber: number;
    userName: string;
    phoneNumber: string;
    balance: number;
    // constructor(username: string, phonenumber: number, balance: number) {
    //     cardnumberIncreament++;
    //     this.cardnumber = "CMRL" + cardnumberIncreament;
    //     this.username = username;
    //     this.phonenumber = phonenumber;
    //     this.balance = balance;
    // }
}


interface TravelDetails {
    travelID: number;
    cardNumber: number;
    fromLocation: string;
    toLocation: string;
    date: Date;
    travelCost: number;

    // constructor(cardnumber: string, fromlocation: string, tolocation: string, date: string, travelcost: number) {
    //     travelidAutoIncreament++;
    //     this.travelID = "TID" + travelidAutoIncreament;
    //     this.cardnumber = cardnumber;
    //     this.fromlocation = fromlocation;
    //     this.tolocation = tolocation;
    //     this.date = date;
    //     this.travelcost = travelcost;
    // }
}


interface TicketfairDetails {
    ticketID: number;
    fromLocation: string;
    toLocation: string;
    ticketPrice: number;
    // constructor(fromlocation: string, tolocation: string, ticketprice: number) {
    //     ticketidAutoIncreament++;
    //     this.TicketID = "MR" + ticketidAutoIncreament;
    //     this.Fromlocation = fromlocation;
    //     this.Tolocation = tolocation;
    //     this.Ticketprice = ticketprice;
    // }
}

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
    
    const user:UserDetails={
        cardNumber:-1,
        userName:username,
        phoneNumber:newuserphonenumber,
        balance:0
    };
    addUser(user);
    // UserList.push(new UserDetails(username, +newuserphonenumber, defaultuserbalance))

    homepage.style.display = "block";
    newuserpage.style.display = "none";
}

async function registereduser() {
    homepage.style.display = "none";
    reigistereduserpage.style.display = "block";

    let availableusers = document.getElementById("availableusers") as HTMLLabelElement;

    const UserList=await fetchUserDetails();

    availableusers.innerHTML=""
    for (let i = 0; i < UserList.length; i++) {
        availableusers.innerHTML += `CardNumber: ${UserList[i].cardNumber} | UserName: ${UserList[i].userName} | PhoneNumber: ${UserList    [i].phoneNumber} <br> `
    }

}

async function login() {

    let flag: boolean = true;
    let cardnumber = (document.getElementById("cardnumber") as HTMLInputElement).value;

    const UserList=await fetchUserDetails();

    for (let i = 0; i < UserList.length; i++) {
        if (parseInt(cardnumber) == UserList[i].cardNumber) {
            alert("You are logged in successfully");
            flag = false;
            currentusercardnumber = parseInt(cardnumber);
            currentusername = UserList[i].userName;
            currentuser=UserList[i];
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

    balance.innerHTML = `Your account balance is: ${currentuser.balance}`;
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

        currentuser.balance+=rechargeamount;

        updateBalance(currentusercardnumber,currentuser);

        alert("Amount Recharged Successfully");
    }
    else
    {
        alert("Minimum Amount to be recharged is 1");
    }

}

async function Viewtravelhistory()
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

    const TravelList=await fetchTravelDetails();
    
    for(let i=0;i<TravelList.length;i++)
        {
            if(+currentusercardnumber==TravelList[i].cardNumber)
                {
                    flag=false;
                    travelhistory.innerHTML+=`TravelID: ${TravelList[i].travelID} | CardNumber: ${TravelList[i].cardNumber}  |  FromLocation: ${TravelList[i].fromLocation}  |  ToLocation: ${TravelList[i].toLocation}  |  Date: ${TravelList[i].date.toString()  }  |    TravelCost: ${TravelList[i].travelCost} <br>`;
                }
        }
        if(flag)
            {
                travelhistory.innerHTML="<h4>You Have No Travel History</h4>";
            }
}

async function Travel()
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

    const TicketfairList=await fetchTicketfairDetails();

    for(let i=0;i<TicketfairList.length;i++)
        {
            ticketfair.innerHTML+=`TicketID: ${TicketfairList[i].ticketID} | FromLocation: ${TicketfairList[i].fromLocation} | ToLocation: ${TicketfairList[i].toLocation} | TicketPrice: ${TicketfairList[i].ticketPrice} <br>`;
        }

    
}

async function Check()
{
    let flag:boolean=true;

    let newticketid=(document.getElementById("newticketid")as HTMLInputElement).value;
    
    const TicketfairList=await fetchTicketfairDetails();
    //const TravelList=await fetchTravelDetails();

    for(let i=0;i<TicketfairList.length;i++)
        {
            if(+newticketid==TicketfairList[i].ticketID)
                {
                    flag=false;
                    if(currentuser.balance>=TicketfairList[i].ticketPrice)
                        {
                            currentuser.balance-=TicketfairList[i].ticketPrice;
                            alert("Ticket Purchased Successfully");
                            //TravelList.push(new TravelDetails(currentusercardnumber,TicketfairList[i].fromlocation,TicketfairList[i].tolocation,Date(),TicketfairList[i].ticketprice))
                            const travel:TravelDetails={
                                travelID:-1,
                                cardNumber:currentusercardnumber,
                                fromLocation:TicketfairList[i].fromLocation,
                                toLocation:TicketfairList[i].toLocation,
                                date: new Date(),
                                travelCost:TicketfairList[i].ticketPrice
                            };
                            addTravel(travel);
                            break;
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

async function addUser  (user: UserDetails): Promise<void> {
    //user.cardNumber++;
    const response = await fetch('http://localhost:5093/api/UserDetails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    if (!response.ok) {
      throw new Error('Failed to add contact');
    }
  }

  async function addTravel  (travel: TravelDetails): Promise<void> {
    const response = await fetch('http://localhost:5093/api/TravelDetails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(travel)
    });
    if (!response.ok) {
      throw new Error('Failed to add contact');
    }
  }

  async function fetchTravelDetails(): Promise<TravelDetails[]> {
    const apiUrl = 'http://localhost:5093/api/TravelDetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch contacts');
    }
    return await response.json();
  }
  
  async function fetchUserDetails(): Promise<UserDetails[]> {
    const apiUrl = 'http://localhost:5093/api/UserDetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch contacts');
    }
    return await response.json();
  }
  
  async function fetchTicketfairDetails(): Promise<TicketfairDetails[]> {
    const apiUrl = 'http://localhost:5093/api/TicketfairDetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch contacts');
    }
    return await response.json();
  }

  async function updateBalance(id: number, user:UserDetails ): Promise<void> {
    const response = await fetch(`http://localhost:5093/api/UserDetails/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    if (!response.ok) {
      throw new Error('Failed to update contact');
    }
    // renderContacts();
  }
