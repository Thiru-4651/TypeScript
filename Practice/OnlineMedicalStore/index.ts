let UserIDautoincrement = 100;
let MedicineIDautoincreament = 200;
let OrderIDautoincreament=300;
// let NewUserName = false;
// let NewUserMail = false;
// let NewUserPassword = false;

let userbalance:number=0;

class User {
    UserID: string;
    Name: string;
    Email: string;
    Password: string;
    PhoneNumber:number;
    // ConfirmPassword:number;
    constructor(name: string, email: string, password: string,phonenumber:number)//,confirmPassword:number)
    {
        UserIDautoincrement++;
        this.UserID = "UI" + UserIDautoincrement.toString();
        this.Name = name;
        this.Email = email;
        this.Password = password;
        this.PhoneNumber=phonenumber;
        // this.ConfirmPassword=confirmPassword;
    }
}

class Medicineinfo {
    MedicineId: string;
    MedicineName: string;
    MedicineCount: number;
    MedicinePrice: number;

    constructor(medicineName: string, medicineCount: number, medicinePrice: number) {
        MedicineIDautoincreament++;
        this.MedicineId = "MI" + MedicineIDautoincreament;
        this.MedicineName = medicineName;
        this.MedicineCount = medicineCount;
        this.MedicinePrice = medicinePrice;
    }
}

class Orderinfo{
    OrderId:string;
    UserID:string;
    MedicineId:string
    MedicineName:string;
    MedicineCount:number;
    TotalAmount:number;

    constructor(userID:string,medicineId:string,medicineName:string,medicineCount:number,totalAmount:number)
    {
        OrderIDautoincreament++;
        this.OrderId="OID"+OrderIDautoincreament;
        this.UserID=userID;
        this.MedicineId=medicineId;
        this.MedicineName=medicineName;
        this.MedicineCount=medicineCount;
        this.TotalAmount=totalAmount;
    }
}

let userList: Array<User> = new Array<User>();

userList.push(new User("thiru", "thirucse2002@gmail.com", "12345",9894583822));
userList.push(new User("Santhosh", "santhosh@gmail.com", "67890",1234567890));

let medicineList: Array<Medicineinfo> = new Array<Medicineinfo>();

medicineList.push(new Medicineinfo("Paracetomol", 5, 50));
medicineList.push(new Medicineinfo("Colpal", 5, 60));
medicineList.push(new Medicineinfo("Stepsil", 5, 70));
medicineList.push(new Medicineinfo("Iodex", 5, 80));
medicineList.push(new Medicineinfo("Acetherol", 5, 100));

let orderlist:Array<Orderinfo>=new Array<Orderinfo>();

orderlist.push(new Orderinfo("UI101","MI201","Paracetemol",50,300))

let homepage=document.getElementById("homepage") as HTMLDivElement;
let signup=document.getElementById("sign-up") as HTMLDivElement;
let signin=document.getElementById("sign-in") as HTMLDivElement;
let signinheader=document.getElementById("sign-in-header") as HTMLDivElement;
let medicinedetails=document.getElementById("medicine-details") as HTMLDivElement;
let purchase=document.getElementById("purchase") as HTMLDivElement;
let cancel=document.getElementById("cancel") as HTMLDivElement;
let topup=document.getElementById("top-up") as HTMLDivElement;
let showbalance=document.getElementById("showbalance") as HTMLDivElement;
let orderhistory=document.getElementById("order-history") as HTMLDivElement;

function closetabs()
{
    homepage.style.display="none";
    signup.style.display="none";
    signin.style.display="none";
    signinheader.style.display="none";
    medicinedetails.style.display="none";
    purchase.style.display="none";
    cancel.style.display="none";
    topup.style.display="none";
    showbalance.style.display="none";
    orderhistory.style.display="none";
}


function Signup() {
    
        // let homepage = document.getElementById("homepage") as HTMLInputElement;
        // let signup = document.getElementById("sign-up") as HTMLElement;
        // homepage.style.display = "none";
        closetabs();
        signup.style.display = "block";
   
}
function Signin() {
    closetabs();
    signin.style.display = "block";
}
function submit() {
    closetabs();
    (document.getElementById("homepage") as HTMLInputElement).style.display = "block";
    // let signup = document.getElementById("sign-up") as HTMLElement;
    // signup.style.display = "none";
}
function submitsignin() {
    
    closetabs();
    
    //(document.getElementById("sign-in") as HTMLDivElement).style.display = "none";
    // signin.style.display = "none";
    (document.getElementById("sign-in-header")as HTMLElement).style.display="block";
}

function home()
{
    closetabs();
    
    // (document.getElementById("sign-in-header")as HTMLElement).style.display="none";
    (document.getElementById("welcome") as HTMLElement).style.display="block";
    (document.getElementById("newpage") as HTMLLabelElement).innerText="Welcome";

}

function medicineDetails()
{
    closetabs();

    (document.getElementById("medicine-details")as HTMLElement).style.display="block";
    (document.getElementById("newpage") as HTMLLabelElement).innerText="Medicine Details";

    for(let i=0;i<medicineList.length;i++)
        {
            `newpage+=${medicineList[i].MedicineName}    |   ${medicineList[i].MedicineCount}   |    ${medicineList[i].MedicinePrice}`
        }
    // (document.getElementById("sign-in-header")as HTMLElement).style.display="none";
    
}
function Purchase()
{
    closetabs();
    //(document.getElementById("cancel")as HTMLElement).style.display="none";
    (document.getElementById("purchase")as HTMLElement).style.display="block";
    (document.getElementById("newpage") as HTMLLabelElement).innerText="Purchase page";
}
function Cancel()
{
    closetabs();
    const tableBody=document.querySelector("#canceltable #rows") as HTMLTableSectionElement;
   // (document.getElementById("purchase")as HTMLElement).style.display="none";
    (document.getElementById("cancel")as HTMLElement).style.display="block";
    // (document.getElementById("newpage") as HTMLLabelElement).innerText="Cancel Page";

    tableBody.innerHTML="";
    for(let i=0;i<orderlist.length;i++)
        {
            const row=document.createElement("tr");
            row.innerHTML=`
            <td>${orderlist[i].OrderId}</td>
            <td>${orderlist[i].UserID}</td>
            <td>${orderlist[i].MedicineName}</td>
            <td>${orderlist[i].MedicineCount}</td>
            <td>${orderlist[i].TotalAmount}</td>
            <td> <button onclick="cancelorder(${orderlist[i].MedicineId})">Cancel</button>
            `;
            tableBody.appendChild(row);
        }
}

function cancelorder(id:string)
{
    for(let i=0;i<medicineList.length;i++)
        {
            if(id==medicineList[i].MedicineId)
                {
                    for(let j=0;j<orderlist.length;j++)
                        {
                            if(id==orderlist[j].MedicineId)
                                {
                                    medicineList[i].MedicineCount+=orderlist[j].MedicineCount;
                                    userbalance+=orderlist[j].TotalAmount
                                    
                                }
                        }
                }
        }
}
function Topup()
{
    closetabs();
    //(document.getElementById("purchase")as HTMLElement).style.display="none";
    (document.getElementById("top-up")as HTMLElement).style.display="block";
    (document.getElementById("newpage") as HTMLLabelElement).innerText="Top-Up Page";

}
function Showbalance()
{
    closetabs();
    //(document.getElementById("cancel")as HTMLElement).style.display="none";
    (document.getElementById("showbalance")as HTMLElement).style.display="block";
    (document.getElementById("newpage") as HTMLLabelElement).innerText="Balance Page";

}
function Orderhistory()
{
    closetabs();
    //(document.getElementById("purchase")as HTMLElement).style.display="none";
    (document.getElementById("order-history")as HTMLElement).style.display="block";
    (document.getElementById("newpage") as HTMLLabelElement).innerText="Order History Page";
}


// function signin()
// {
//     let userIdChecker: boolean=false;
//     let existingUserId=(document.getElementById("existingMail") as HTMLInputElement).value;
//     let existingMail=/^UI\d{4}$/;
    
// }

// function displayHomePage() {

// }


