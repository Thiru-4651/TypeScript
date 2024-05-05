let userIDautoincreament=1000;
let medicineIDautoincreament=2000;
let orderIDautoincreament=3000;

let currentUserID: string;
let currentUserName: string;

class UserDetails
{
    userID:string;
    username:string;
    userage:number;
    userphonenumber:number;

    constructor(username:string,userage:number,userphonenumber:number)
    {
        userIDautoincreament++;
        this.userID="UID"+userIDautoincreament;
        this.username=username;
        this.userage=userage;
        this.userphonenumber=userphonenumber;
    }
}

class MedicineDetails
{
    MedicineId: string;
    MedicineName: string;
    MedicineCount: number;
    MedicinePrice: number;

    constructor(paramMedicineName: string, paramMedicineCount: number, paramMedicinePrice: number) {
        medicineIDautoincreament++;

        this.MedicineId = "MD" + medicineIDautoincreament.toString();
        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
        this.MedicinePrice = paramMedicinePrice;
    }
}

class OrderDetails
{
    OrderId: string;
    MedicineId: string;
    UserId: string;

    MedicineName: string;
    MedicineCount: number;

    constructor(paramMedicineId: string, paramUserId: string, paramMedicineName: string, paramMedicineCount: number) {
        orderIDautoincreament++;

        this.OrderId = "OI" + orderIDautoincreament.toString();
        this.MedicineId = paramMedicineId;
        this.UserId = paramUserId;

        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
    }
}

let UserArrayList: Array<UserDetails> = new Array<UserDetails>();

UserArrayList.push(new UserDetails("Hemanth", 23, 9789011226));
UserArrayList.push(new UserDetails("Harish", 23, 9445153060));

let MedicineList: Array<MedicineDetails> = new Array<MedicineDetails>();

MedicineList.push(new MedicineDetails("Paracetomol", 5, 50));
MedicineList.push(new MedicineDetails("Colpal", 5, 60));
MedicineList.push(new MedicineDetails("Stepsil", 5, 70));
MedicineList.push(new MedicineDetails("Iodex", 5, 80));
MedicineList.push(new MedicineDetails("Acetherol", 5, 100));

let OrderList: Array<OrderDetails> = new Array<OrderDetails>();

function newuserpage()
{
    let homepage=document.getElementById("homepage")as HTMLDivElement;
    let newuser=document.getElementById("newuserpage")as HTMLDivElement;
    homepage.style.display="none";
    newuser.style.display="block";
}

function signup()
{
    // alert("SIgnup successfull--1");
    
    // let username=(document.getElementById("newusername")as HTMLInputElement).value;
    // let userage=(document.getElementById("newuserage")as HTMLInputElement).value;
    // let userphonenumber=(document.getElementById("number")as HTMLInputElement).value;

    // UserArrayList.push(new UserDetails(username,+userage,+userphonenumber));

    // alert("SIgnup successfull");
    displayHomepage();
}

function existinguserpage()
{
    let homepage=document.getElementById("homepage")as HTMLDivElement;
    let existinguser=document.getElementById("existinguserpage")as HTMLDivElement;
    let availableusers=document.getElementById("availableuser") as HTMLLabelElement;

    homepage.style.display="none";
    existinguser.style.display="block";

    availableusers.innerHTML="<h2>Available Users</h2>";

    for(let i=0;i<UserArrayList.length;i++)
        {
            availableusers.innerHTML+=`User ID:${UserArrayList[i].userID} |  User Name:${UserArrayList[i].username}<br>`;
        }
}

function signin()
{
    let useridcheck=true;
    let existinguserid=(document.getElementById("existinguserid")as HTMLInputElement).value;

    for(let i=0;i<UserArrayList.length;i++)
        {
            if(existinguserid==UserArrayList[i].userID)
                {
                    useridcheck=false;
                    currentUserID=existinguserid;
                    currentUserName=UserArrayList[i].username;
                    medicinepage();
                    break;
                }
        }
        if(useridcheck)
            {
                alert("Enter valid userid");
            }
}

function medicinepage()
{
    let existinguserpage=document.getElementById("existinguserpage")as HTMLDivElement;
    let medicinepage=document.getElementById("medicinepage")as HTMLDivElement;

    let greet=document.getElementById("greet")as HTMLDivElement;

    existinguserpage.style.display="none";
    medicinepage.style.display="block";

    greet.innerHTML=`<h2>Hello ${currentUserName}</h2>`;

}
function medicinelistcheck()
{
    let medicine=document.getElementById("medincineinfo") as HTMLLabelElement;
    let medicinelist=document.getElementById("medicinelist")as HTMLSelectElement;
    let medicinenname=medicinelist[medicinelist.selectedIndex].innerHTML;   
    
    for(let i=0;i<medicinelist.length;i++)
        {
            if(MedicineList[i].MedicineName==medicinenname)
                {
                    medicine.innerHTML=`Medicine Name: ${MedicineList[i].MedicineName}| Medicine Price: ${MedicineList[i].MedicinePrice} | Available Quantity: ${MedicineList[i].MedicineCount}`;
                    displayrequiredcount();
                }
        }

}

function displayrequiredcount()
{
    let requiredcount=document.getElementById("requiredcount")as HTMLDivElement;
    requiredcount.style.display="block";
    let medicineInfo = document.getElementById('medicineInfo') as HTMLLabelElement;
    medicineInfo.style.display = "block";

}

function buymedicine()
{
    let proceed:boolean=true;
    let requiredcount:Number=0;

    let medicinelist=document.getElementById("medicinelist")as HTMLSelectElement;
    let medicinerequiredcount=(document.getElementById("medicinerequiredcount")as HTMLInputElement).value;
    let medicinenname=medicinelist[medicinelist.selectedIndex].innerHTML;   
    
    if(+medicinerequiredcount>0)
        {
            for(let i=0;i<MedicineList.length;i++)
                {
                    if(MedicineList[i].MedicineName==medicinenname)
                        {
                            if(MedicineList[i].MedicineCount>=+medicinerequiredcount)
                                {
                                    requiredcount= +medicinerequiredcount;
                                }
                            else
                            {
                                proceed=confirm(`We have only ${MedicineList[i].MedicineCount} ${MedicineList[i].MedicineName}.Do you want to buy these medicines?`);
                                if(proceed)
                                    {
                                        requiredcount=MedicineList[i].MedicineCount;
                                    }
                            }
                            if(proceed)
                                {
                                    MedicineList[i].MedicineCount-= +requiredcount;

                                    OrderList.push(new OrderDetails(MedicineList[i].MedicineId,currentUserID,MedicineList[i].MedicineName,+requiredcount));
                                    alert("Purchase Success");
                                    displayHomepage();
                                }
                            else if(MedicineList[i].MedicineCount<=0)
                                {
                                    alert("Out of stock");
                                }
                        }
                }
        }
        else
        {
            alert("Enter valid required count");
        }
}

function showhistory()
{
    let history=document.getElementById("historyDisplay")as HTMLLabelElement;
    history.style.display="block";

    let number=0;
    history.innerHTML="<h3>Order History </h3>";

    for(let i=0;i<OrderList.length;i++)
        {
            if(currentUserID==OrderList[i].UserId)
                {
                    number=1;
                    history.innerHTML+=`Medicine Name :${OrderList[i].MedicineName} ----- Medicinecount: ${OrderList[i].MedicineCount}  <br>`;
                }
        }
    if(number==0)
        {
            history.innerHTML+="You have no order history<br>";
        }
}

function displayHomepage()
{
    // currentUserID = "";
    // currentUserName = "";

    // let medicineList = document.getElementById('medicineList') as HTMLSelectElement;
    // medicineList.selectedIndex = 0;
    
    
    let requiredCount = document.getElementById('requiredcount') as HTMLDivElement;
    let medicineInfo = document.getElementById('medincineinfo') as HTMLLabelElement;
    let historyDisplay = document.getElementById('historyDisplay') as HTMLLabelElement;

    let medicinePage = document.getElementById('medicinepage') as HTMLDivElement;
    let newUserPage = document.getElementById('newuserpage') as HTMLDivElement;
    let existingUserPage = document.getElementById('existinguserpage') as HTMLDivElement;
    let homePage = document.getElementById('homepage') as HTMLDivElement;

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

