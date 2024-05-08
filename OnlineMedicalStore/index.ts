let UserIdAutoIncrement = 1000;
let MedicineIdAutoIncrement = 2000;
let OrderIdAutoIncrement = 3000;
// let DefaultBalance=50;

let currentuser: UserDetails;
let currentusername: string;
let currentuserid: string;

//enum OrderStatus {Ordered="Ordered",Cancelled="Cancelled"}

interface UserDetails {
    userID: number;
    userName: String;
    userEmail: string;
    userPassword: string;
    userPhoneNumber: string;
    balance: number

    // constructor(UserName:String,paramUserEmail: string, paramUserPassword: string, paramUserPhoneNumber: string,Balance: number) {

    //     UserIdAutoIncrement++;

    //     //this.UserID = "UI" + UserIdAutoIncrement.toString();
    //     this.UserName=UserName;
    //     this.UserEmail = paramUserEmail;
    //     this.UserPassword = paramUserPassword;
    //     this.UserPhoneNumber = paramUserPhoneNumber;
    //     this.Balance = Balance;
    // }
}

interface MedicineDetails {

    medicineID: number;
    medicineName: string;
    medicineCount: number;
    medicinePrice: number;
    expiryDate: string;

    // constructor(paramMedicineName: string, paramMedicineCount: number, paramMedicinePrice: number, paramExpiryDate: Date) {
    //     MedicineIdAutoIncrement++;

    //     this.MedicineId = "MD" + MedicineIdAutoIncrement.toString();
    //     this.MedicineName = paramMedicineName;
    //     this.MedicineCount = paramMedicineCount;
    //     this.MedicinePrice = paramMedicinePrice;
    //     this.ExpiryDate = paramExpiryDate;
    // }

}

interface OrderDetails {
    orderID: number;
    //medicineID: number;
    userID: number
    medicineName: string;
    medicineCount: number;
    totalPrice: number;
    orderStatus: string

    // constructor(paramMedicineId: string, paramUserId: string, paramMedicineName: string, paramMedicineCount: number, paramTotalPrice: number, paramOrderStatus: OrderStatus) {
    //     OrderIdAutoIncrement++;

    //     this.OrderId = "OI" + OrderIdAutoIncrement.toString();
    //     this.MedicineId = paramMedicineId;
    //     this.UserId = paramUserId;

    //     this.MedicineName = paramMedicineName;
    //     this.MedicineCount = paramMedicineCount;
    //     this.TotalPrice = paramTotalPrice;
    //     this.Status = paramOrderStatus
    // }
}

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


const homepage = document.getElementById("homepage") as HTMLDivElement;
const signin = document.getElementById("signin") as HTMLDivElement;
const signup = document.getElementById("signup") as HTMLDivElement;
const mainmenu = document.getElementById("mainmenu") as HTMLDivElement;
const welcome = document.getElementById("welcome") as HTMLDivElement;
const purchaseMedicine = document.getElementById("purchaseMedicine") as HTMLDivElement;
//const buymedicine = document.getElementById("buymedicine") as HTMLDivElement;
const medicineeditpage = document.getElementById("medicineeditpage") as HTMLDivElement;
const medicinedetails = document.getElementById("medicinedetails") as HTMLDivElement;
const orderHistory = document.getElementById("orderHistory") as HTMLDivElement;
const cancelOrder = document.getElementById("cancelOrder") as HTMLDivElement;
const recharge = document.getElementById("recharge") as HTMLDivElement;
const showbalance = document.getElementById("showbalance") as HTMLDivElement;
const addmedicine = document.getElementById("addmedicine") as HTMLDivElement;

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
    let name = (document.getElementById("newusername") as HTMLInputElement).value;
    let email = (document.getElementById("newusermail") as HTMLInputElement).value;
    let pass = ((document.getElementById("newuserpassword") as HTMLInputElement).value);
    let confirmpass = ((document.getElementById("confirmpassword") as HTMLInputElement).value);
    let newuserphonenumber = (document.getElementById("newuserphonenumber") as HTMLInputElement).value;

    if (pass != confirmpass && pass != null && confirmpass != null) {
        alert("Password Mismatch");
    }
    else {
        alert("SignUp Completed successfully");
        const newuser: UserDetails = {
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

async function Signin() {
    CloseAll();
    signin.style.display = "block";

    let availableusers = document.getElementById("availableusers") as HTMLLabelElement;

    // availableusers.innerHTML="";

    // let UserList=await fetchUserDetails();

    // for(let i=0;i<UserList.length;i++)
    //     {
    //         availableusers.innerHTML+=`UserID: ${UserList[i].userID} UserName: ${UserList[i].userName} <br>`;
    //     }

}

async function Signinpage() {
    let newusermail = (document.getElementById("newuserid") as HTMLInputElement).value;
    let userenteredpassword = (document.getElementById("userenteredpassword") as HTMLInputElement).value;

    let flag: boolean = true;

    let UserList = await fetchUserDetails();


    for (let i = 0; i < UserList.length; i++) {
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
}

function Mainmenu() {
    CloseAll();
    mainmenu.style.display = "block";
    let welcomemessage = document.getElementById("welcomemessage") as HTMLLabelElement;
    welcome.style.display = "block";
    welcomemessage.innerHTML = `Welcome ${currentuser.userName}`;
}

function Home() {
    CloseAll();
    mainmenu.style.display = "block";
    welcome.style.display = "block";

    let welcomemessage = document.getElementById("welcomemessage") as HTMLLabelElement;
    welcomemessage.innerText = `Welcome ${currentuser.userName}`;
}

async function PurchaseMedicine() {
    CloseAll();
    mainmenu.style.display = "block";
    purchaseMedicine.style.display = "block";

    let tablebody = document.querySelector("#table1 tbody") as HTMLTableSectionElement;
    tablebody.innerHTML = "";
    let MedicineList = await fetchMedicineDetails();

    for (let i = 0; i < MedicineList.length; i++) {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${MedicineList[i].medicineName}</td>
            <td>${MedicineList[i].medicineCount}</td>
            <td>${MedicineList[i].medicinePrice}</td>
            <td>${MedicineList[i].expiryDate}</td>
            <td><button onclick="Check(${MedicineList[i].medicineID})">Check</button></td>`;
        tablebody.appendChild(row);
    }
}

async function Check(id: number) {
    CloseAll();
    mainmenu.style.display = "block";
    purchaseMedicine.style.display = "block";
    let flag = true;
    let idcheck = true;
    //buymedicine.style.display = "block";

    let count = (document.getElementById("medicinecount") as HTMLInputElement).value;
    let MedicineList = await fetchMedicineDetails();

    for (let i = 0; i < MedicineList.length; i++) {
        if (MedicineList[i].medicineID == id) {
            idcheck = false;
            if (parseInt(count) <= MedicineList[i].medicineCount) {
                flag = false;

                if (currentuser.balance >= MedicineList[i].medicinePrice) {
                    currentuser.balance -= MedicineList[i].medicinePrice*parseInt(count);
                    updateUser(currentuser.userID, currentuser);

                    const neworder: OrderDetails = {
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
                    alert(`You Have successfully buyed ${count} ${MedicineList[i].medicineName}`);

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
}



async function MedicineDetails() {
    CloseAll();
    // let medicinepage=document.getElementById("medicinedetails")as HTMLDivElement;

    mainmenu.style.display = "block";
    medicinedetails.style.display = "block";

    let MedicineList = await fetchMedicineDetails();

    let tablebody = document.querySelector("#table2 tbody") as HTMLTableSectionElement;
    tablebody.innerHTML = "";

    for (let i = 0; i < MedicineList.length; i++) {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${MedicineList[i].medicineName}</td>
            <td>${MedicineList[i].medicineCount}</td>
            <td>${MedicineList[i].medicinePrice}</td>
            <td>${MedicineList[i].expiryDate}</td>
            <td><button onclick="Edit(${MedicineList[i].medicineID})">Edit</button>
            <button onclick="Delete(${MedicineList[i].medicineID})">Delete</button></td>
            `;
        tablebody.append(row);
    }
}

let editmedicineid: number;
// let MedicineList =  fetchMedicineDetails();


async function Edit(id: number) {
    editmedicineid = id;
    CloseAll();

    mainmenu.style.display = "block";
    medicinedetails.style.display = "block";
    medicineeditpage.style.display = "block";


}

async function EditSubmit() {
    let editmedicinename = (document.getElementById("editmedicinename") as HTMLInputElement).value;
    let editmedicinecount = (document.getElementById("editmedicinecount") as HTMLInputElement).value;
    let editmedicineprice = (document.getElementById("editmedicineprice") as HTMLInputElement).value;
    // let editmedicinename=(document.getElementById("editmedicinename")as HTMLInputElement).value;

    let MedicineList = await fetchMedicineDetails();
    for (let i = 0; i < MedicineList.length; i++) {
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
}


function Delete(id: number) {
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
    let newmedicinename = (document.getElementById("newmedicinename") as HTMLInputElement).value;
    let newmedicinecount = (document.getElementById("newmedicinecount") as HTMLInputElement).value;
    let newmedicineprice = (document.getElementById("newmedicineprice") as HTMLInputElement).value;
    let newexpirydate = (document.getElementById("newexpirydate") as HTMLInputElement).value;

    const newmedicine: MedicineDetails = {
        medicineID: 0,
        medicineName: newmedicinename,
        medicineCount: parseInt(newmedicinecount),
        medicinePrice: parseInt(newmedicineprice),
        expiryDate: newexpirydate
    };
    AddMedicines(newmedicine);
    alert("Medicine Added Successfully");
}

async function OrderHistory() {
    CloseAll();
    mainmenu.style.display = "block";
    orderHistory.style.display = "block";
    let flag = true;

    let orderlist = await fetchOrderDetails();
    let history = document.getElementById("history") as HTMLLabelElement;
    history.innerHTML = "";

    for (let i = 0; i < orderlist.length; i++) {
        if (currentuser.userID == orderlist[i].userID) {
            flag = false;
            history.innerHTML += `OrderID: ${orderlist[i].orderID} |  UserID: ${orderlist[i].userID} |    MedicineName: ${orderlist[i].medicineName} |    Medicine Count: ${orderlist[i].medicineCount} |    TotalPrice: ${orderlist[i].totalPrice} |    OrderStatus: ${orderlist[i].orderStatus} <br>`
        }
    }
    if (flag) {
        history.innerHTML = "You have no order history";
    }
}
// function tableToCSV() {

// 	// Variable to store the final csv data
// 	let csv_data = [];

// 	// Get each row data
// 	let rows = document.getElementsByTagName('tr');
// 	for (let i = 0; i < rows.length; i++) {

// 		// Get each column data
// 		let cols = rows[i].querySelectorAll('td,th');

// 		// Stores each csv row data
// 		let csvrow = [];
// 		for (let j = 0; j < cols.length; j++) {

// 			// Get the text data of each cell of
// 			// a row and push it to csvrow
// 			csvrow.push(cols[j].innerHTML);
// 		}

// 		// Combine each column value with comma
// 		csv_data.push(csvrow.join(","));
// 	}
// 	// Combine each row data with new line character
// 	csv_data = csv_data.join('\n');

// 	/* We will use this function later to download
// 	the data in a csv file downloadCSVFile(csv_data);
// 	*/
// }


async function CancelOrder() {
    CloseAll();
    mainmenu.style.display = "block";
    cancelOrder.style.display = "block";
    let flag = true;

    let orderlist = await fetchOrderDetails();

    let tablebody = document.querySelector("#table3 tbody") as HTMLTableSectionElement;
    tablebody.innerHTML = "";

    for (let i = 0; i < orderlist.length; i++) {
        if (orderlist[i].userID == currentuser.userID && orderlist[i].orderStatus == "Purchased") {
            flag = false;
            const row = document.createElement("tr");
            row.innerHTML = `<td>${orderlist[i].orderID}</td>
                    <td>${orderlist[i].userID}</td>
                    <td>${orderlist[i].medicineName}</td>
                    <td>${orderlist[i].medicineCount}</td>
                    <td>${orderlist[i].totalPrice}</td>
                    <td>${orderlist[i].orderStatus}</td>
                    <td><button onclick="Cancel(${orderlist[i].orderID})">Cancel</button></td>
                    `;
            tablebody.appendChild(row);
        }
    }
    if (flag) {
        tablebody.innerHTML = "You Have no order cancel";
    }

}

async function Cancel(id: number) {
    let orderlist = await fetchOrderDetails();
    let medicinelist = await fetchMedicineDetails();

    for (let i = 0; i < orderlist.length; i++) {
        if (orderlist[i].orderID == id) {
            orderlist[i].orderStatus = "Cancelled";
            updateOrder(id, orderlist[i]);

            for (let j = 0; j < medicinelist.length; j++) {
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
}

function Recharge() {
    CloseAll();
    recharge.style.display = "block";
    mainmenu.style.display = "block";

}

function AmountRecharge() {
    let rechargeamount = (document.getElementById("rechargeamount") as HTMLInputElement).value;

    currentuser.balance += parseInt(rechargeamount);

    updateUser(currentuser.userID, currentuser);
    alert(`Your Updated balance is: ${currentuser.balance}`);
}

function Balance() {
    CloseAll();
    showbalance.style.display = "block";
    mainmenu.style.display = "block";

    let currentbalance = document.getElementById("currentbalance") as HTMLLabelElement;
    currentbalance.innerHTML = `Your current balane is: ${currentuser.balance}`
}

function Exit() {
    CloseAll();
    homepage.style.display = "block";
}

async function fetchUserDetails(): Promise<UserDetails[]> {
    const apiUrl = 'http://localhost:5172/api/UserDetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch contacts');
    }
    return await response.json();
}

async function fetchMedicineDetails(): Promise<MedicineDetails[]> {
    const apiUrl = 'http://localhost:5172/api/medicinedetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch contacts');
    }
    return await response.json();
}

async function fetchOrderDetails(): Promise<OrderDetails[]> {
    const apiUrl = 'http://localhost:5172/api/orderdetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch contacts');
    }
    return await response.json();
}

async function AddUser(users: UserDetails): Promise<void> {
    const response = await fetch('http://localhost:5172/api/UserDetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(users)
    });
    if (!response.ok) {
        throw new Error('Failed to add contact');
    }
}

async function AddOrder(order: OrderDetails): Promise<void> {
    const response = await fetch('http://localhost:5172/api/orderdetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    });
    if (!response.ok) {
        throw new Error('Failed to add contact');
    }
}

async function AddMedicines(medicine: MedicineDetails): Promise<void> {
    const response = await fetch('http://localhost:5172/api/medicinedetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(medicine)
    });
    if (!response.ok) {
        throw new Error('Failed to add contact');
    }
}

async function updateOrder(id: number, borrow: OrderDetails): Promise<void> {
    const response = await fetch(`http://localhost:5172/api/orderdetails/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(borrow)
    });
    if (!response.ok) {
        throw new Error('Failed to update contact');
    }
}

async function updateUser(id: number, user: UserDetails): Promise<void> {
    const response = await fetch(`http://localhost:5172/api/UserDetails/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error('Failed to update contact');
    }
}

async function updateMedicine(id: number, medicine: MedicineDetails): Promise<void> {
    const response = await fetch(`http://localhost:5172/api/medicinedetails/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(medicine)
    });
    if (!response.ok) {
        throw new Error('Failed to update contact');
    }
}

  async function deleteMedicine(id: number): Promise<void> {
    const response = await fetch(`http://localhost:5172/api/medicinedetails/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed to delete contact');
    }
    //renderContacts();
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