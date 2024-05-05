var currentUser;
let userIdAuto = 1000;
let medicineIDAuto = 100;
let orderIDAuto = 200;
let defaultBalance: number = 0;

class UserDetails {
    userId: string;
    name: string;
    mail: string;
    phone: string;
    password: string;
    confirmpassword: string;
    balance: number

    constructor(name: string, mail: string, phone: string, password: string, confirmpassword: string, balance: number) {
        userIdAuto++;
        this.userId = "UID" + userIdAuto;
        this.name = name;
        this.mail = mail;
        this.phone = phone;
        this.password = password;
        this.confirmpassword = confirmpassword;
        this.balance = balance;
    }
}

class MedicineDetails {
    medicineId: string;
    medicineName: string;
    medicinePrice: number;
    quantity: number;

    constructor(medicineName: string, medicinePrice: number, quantity: number) {
        medicineIDAuto++;
        this.medicineId = "MID" + medicineIDAuto;
        this.medicineName = medicineName;
        this.medicinePrice = medicinePrice;
        this.quantity = quantity;
    }
}

class OrderDetails {
    orderID: string;
    medicineID: string;
    userID: string;
    medicineName: string;
    count: number;
    totalAmount: number;

    constructor(medicineID: string, userID: string, medicineName: string, count: number, totalAmount: number) {
        orderIDAuto++;
        this.orderID = "OID" + orderIDAuto;
        this.medicineID = medicineID;
        this.userID = userID;
        this.medicineName = medicineName;
        this.count = count;
        this.totalAmount = totalAmount;
    }
}

let userList: Array<UserDetails> = new Array<UserDetails>;

let user1 = new UserDetails("Thiru", "thiru@gmail.com", "1234567890", "abcd", "abcd", defaultBalance);
let user2 = new UserDetails("Santhosh", "santhosh@gmail.com", "1234567890", "xyz", "xyz", defaultBalance);

userList.push(user1);
userList.push(user2);

let medicineList: Array<MedicineDetails> = new Array<MedicineDetails>;

medicineList.push(new MedicineDetails("Paracetomol", 5, 50));
medicineList.push(new MedicineDetails("Colpal", 5, 60));
medicineList.push(new MedicineDetails("Stepsil", 5, 70));
medicineList.push(new MedicineDetails("Iodex", 5, 80));
medicineList.push(new MedicineDetails("Acetherol", 5, 100));

let orderList: Array<OrderDetails> = new Array<OrderDetails>;

orderList.push(new OrderDetails(medicineList[0].medicineId, userList[0].userId, "Paracetomol", 2, 100));
orderList.push(new OrderDetails(medicineList[1].medicineId, userList[1].userId, "Iodex", 2, 160));


let loginpage=document.getElementById("loginpage") as HTMLDivElement;
let signUp=document.getElementById("signUp") as HTMLDivElement;
let signIn=document.getElementById("signIn") as HTMLDivElement;
let menu=document.getElementById("menu") as HTMLDivElement;
let medicinedetails=document.getElementById("medicine-details") as HTMLDivElement;
let purchase=document.getElementById("purchase") as HTMLDivElement;
let cancel=document.getElementById("cancel") as HTMLDivElement;
let topup=document.getElementById("top-up") as HTMLDivElement;
let showbalance=document.getElementById("showbalance") as HTMLDivElement;
let orderhistory=document.getElementById("order-history") as HTMLDivElement;

function closetabs()
{
    loginpage.style.display="none";
    signUp.style.display="none";
    signIn.style.display="none";
    menu.style.display="none";
    medicinedetails.style.display="none";
    purchase.style.display="none";
    cancel.style.display="none";
    topup.style.display="none";
    showbalance.style.display="none";
    orderhistory.style.display="none";
}

function SignInPage() {
    let signin = document.getElementById("signIn") as HTMLDivElement;
    let login = document.getElementById("loginpage") as HTMLDivElement;
    let excistinguser = document.getElementById("existinguser") as HTMLLabelElement;

    signin.style.display = "block";
    login.style.display = "none";

    excistinguser.innerHTML = "<h2>Available Users</h2>";

    for (let i = 0; i < userList.length; i++) {
        excistinguser.innerHTML += `UserID: ${userList[i].userId}     `;
    }
}

function SignUpPage() {
    let signup = document.getElementById("signUp") as HTMLDivElement;
    let login = document.getElementById("loginpage") as HTMLDivElement;

    signup.style.display = "block";
    login.style.display = "none";
}

function SignUp() {
    let name = (document.getElementById("name") as HTMLInputElement).value;
    let email = (document.getElementById("newmail") as HTMLInputElement).value;
    let phone = (document.getElementById("phone") as HTMLInputElement).value;
    let password = (document.getElementById("newpassword") as HTMLInputElement).value;
    let confirmpassword = (document.getElementById("confirmpassword") as HTMLInputElement).value;

    let user = new UserDetails(name, email, phone, password, confirmpassword, defaultBalance);

    let signup = document.getElementById("signUp") as HTMLDivElement;
    let login = document.getElementById("loginpage") as HTMLDivElement;

    signup.style.display = "none";
    login.style.display = "block";
}

function SignIn() {
    let mail = (document.getElementById("mail") as HTMLInputElement).value;
    let SignIn = (document.getElementById("signIn")as HTMLDivElement);
    let password=(document.getElementById("pass")as HTMLInputElement).value;
    let menu =document.getElementById("menu")as HTMLDivElement;
    let valid:boolean=false;

    // userList.forEach(element =>{
    // for(let i=0;i<userList.length;i++)
    //     {
    //         if(userList[i].mail==mail && userList[i].password==password)
    //             {
                    valid=true;
                    menu.style.display="flex";
                    SignIn.style.display="none";
                   // break;
        //         }
        //     else
        //     {
        //         alert("Wrong mail id or wrong password");
        //         break;
        //     }
        // }
}

function DisplayMedicine()
{
    let medicine=document.getElementById("medicine")as HTMLLabelElement;
    let menu=document.getElementById("menu")as HTMLDivElement;

    menu.style.display="none";
    medicine.style.display="block";

    medicine.innerHTML="<h2>Medicine Details</h2><br>";

    for(let i=0;i<medicineList.length;i++)
        {
            medicine.innerHTML+=`Medicine Name: ${medicineList[i].medicineName}  |       MedicinePrice: ${medicineList[i].medicinePrice}     AvailableQuantity: ${medicineList[i].quantity}<br> `;
        }

    //  medicine.innerHTML+="<button onclick='SignIn()'>Home</button>";
}
function Purchase()
{
    // let table=document.getElementById("table")as HTMLDivElement;
    // let menu=document.getElementById("menu")as HTMLDivElement;
    // let medicine=document.getElementById("medicine")as HTMLLabelElement;
    
    
    let purchase=document.getElementById("purchase")as HTMLDivElement;
    purchase.style.display="block";
    
    
    const tablebody=document.querySelector("#table #rows")as HTMLTableSectionElement;
    tablebody.innerHTML="";

    for(let i=0;i=medicineList.length;i++)
        {
            const row=document.createElement("tr");
            row.innerHTML=`
            <td>${medicineList[i].medicineName}</td>
            <td>${medicineList[i].medicinePrice}</td>
            <td>${medicineList[i].quantity}</td>
            <td><button onclick="add(${medicineList[i].medicineId})">Add</button></td>
            `;
            tablebody.appendChild(row);
        }
}






