let currentuser: UserDetails;
let count: number = 2;


interface UserDetails {
  userID: number,
  userName: string,
  department: string,
  email:string,
  password:string,
  mobileNumber: string,
  balance: number
}

interface BookDetails {
  bookID: number,
  bookName: string,
  authorName: string,
  bookCount: number
}

interface BorrowDetails {
  borrowID: number,
  bookID: number,
  userID: number,
  borrowedDate:Date,
  borrowBookCount: number,
  status: string,
  paidFineAmount:number
}

const homepage = document.getElementById("homepage") as HTMLDivElement;
const register = document.getElementById("register") as HTMLDivElement;
const login = document.getElementById("login") as HTMLDivElement;
const mainmenu = document.getElementById("mainmenu") as HTMLDivElement;
const welcome = document.getElementById("welcome") as HTMLDivElement;
const borrowbook = document.getElementById("borrowbook") as HTMLDivElement;
const showBorrowedhistory = document.getElementById("showBorrowedhistory") as HTMLDivElement;
const returnbooks = document.getElementById("returnbooks") as HTMLDivElement;
const walletRecharge = document.getElementById("walletRecharge") as HTMLDivElement;
const buypage = document.getElementById("buypage") as HTMLDivElement;
const returnpage = document.getElementById("returnpage") as HTMLDivElement;

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
  let newusername = (document.getElementById("newusername") as HTMLInputElement).value;
  let newdepartment = (document.getElementById("newdepartment") as HTMLInputElement).value;
  let newmobilenumber = (document.getElementById("newmobilenumber") as HTMLInputElement).value;
  let newmail=(document.getElementById("newmail")as HTMLInputElement).value;
  let newpassword=(document.getElementById("newpassword")as HTMLInputElement).value;
 
  const newuser: UserDetails = {
    userID: 3,
    userName: newusername,
    department: newdepartment,
    email:newmail,
    password:newpassword,
    mobileNumber: newmobilenumber,
    balance: 100
  }
  addUsers(newuser);
  alert("Registered Successfully");
  CloseAll();
  //login.style.display="block";
  ExcistingUser();
}

async function ExcistingUser() {
  CloseAll();
  login.style.display = "block";

  // let userlist = await fetchUsers();
  // let availableusers = document.getElementById("availableusers") as HTMLLabelElement;
  // availableusers.innerHTML = "";

  // for (let i = 0; i < userlist.length; i++) {
  //   availableusers.innerHTML += `UserID:${userlist[i].userID} |  UserName: ${userlist[i].userName} <br>`;
  // }
}

async function Login() {
  let newusermail = (document.getElementById("newuserid") as HTMLInputElement).value;
  let signinpassword = (document.getElementById("signinpassword")as HTMLInputElement).value;
  
  let userlist = await fetchUsers();

  let flag: boolean = true;
  let flag1=true;

  for (let i = 0; i < userlist.length; i++) {
    if (newusermail == userlist[i].email) {
      flag = false;
      if(signinpassword==userlist[i].password)
        {
          flag1=false;
          currentuser = userlist[i];
          alert("Logged In Successfully");
          Mainmenu();
        }
    }
  }
  if (flag) {
    alert("Invalid MailID");
  }
  if(flag1)
    {
      alert("Invalid Password");
    }

}

function Mainmenu() {
  CloseAll();
  mainmenu.style.display = "block";
  welcome.style.display = "block";
  let welcomemessage = document.getElementById("welcomemessage") as HTMLLabelElement;
  welcomemessage.innerHTML = `Welcome ${currentuser.userName}`;
}

function Home() {
  Mainmenu();
}

function Exit() {
  CloseAll();
  homepage.style.display = "block";
}

async function Borrowbook() {
  CloseAll();
  mainmenu.style.display = "block";
  borrowbook.style.display = "block";

  let tablebody = document.querySelector("#table1 tbody") as HTMLTableSectionElement;

  tablebody.innerHTML = "";

  // bookdetails.innerHTML=`<table><tr><th>BookID</th>
  // <th>BookName</th>
  // <th>AuthorName</th>
  // <th>BookCount</th>
  // <th>Action</th></tr></table>`

  let booklist = await fetchBooks();

  for (let i = 0; i < booklist.length; i++) {
    const row = document.createElement("tr");
    row.innerHTML += `<table><tr><td> ${booklist[i].bookID}</td>
    <tr>${booklist[i].bookName}</tr>
    <td>${booklist[i].authorName}</td>
    <td>${booklist[i].bookCount}</td>
    <td><button onclick="Check(${booklist[i].bookID})">Check</button></td></tr></table>`;
    tablebody.appendChild(row);
  }
}

let selectedbookid:number;

function Check(id:number) {
  selectedbookid=id; 
  CloseAll();
  mainmenu.style.display = "block";
  borrowbook.style.display = "block";
  buypage.style.display = "block";
}

async function Borrow() {
  // let newbookid = (document.getElementById("newbookid") as HTMLInputElement).value;
  let newbookcount = (document.getElementById("newbookcount") as HTMLInputElement).value;
  let flag = true;
  let booklist = await fetchBooks();

  for (let i = 0; i < booklist.length; i++) {
    if (booklist[i].bookID == selectedbookid) {
      flag = false;
      if (booklist[i].bookCount >= parseInt(newbookcount)) {

        booklist[i].bookCount -= parseInt(newbookcount);

        updateBook(booklist[i].bookID, booklist[i])

        //alert("Book Borrowed successfully");

        const newborrow: BorrowDetails = {
          borrowID: 5,
          bookID: selectedbookid,
          userID: currentuser.userID,
          borrowedDate:new Date(),
          borrowBookCount: parseInt(newbookcount),
          status: "Borrowed",
          paidFineAmount:0
        }

        addBorrows(newborrow);
        alert("Book Borrowed Successfully")
      }
      else {
        alert("Book count not available");
      }
    }

  }
  if (flag) {
    alert("Invalid BookID");
  }
}

async function ShowBorrowedhistory() {
  CloseAll();
  mainmenu.style.display = "block";
  showBorrowedhistory.style.display = "block";

  let borrowdetails = document.getElementById("borrowdetails") as HTMLLabelElement;

  let borrowlist = await fetchBorrows();
  let flag = true;

  borrowdetails.innerHTML = "";

  for (let i = 0; i < borrowlist.length; i++) {
    if (currentuser.userID == borrowlist[i].userID) {
      flag = false;
      borrowdetails.innerHTML += `BorrowID: ${borrowlist[i].borrowID}  | BookID: ${borrowlist[i].bookID} UserID: ${borrowlist[i].userID} |BorrowDate:  ${borrowlist[i].borrowedDate} |BorrowBookCount: ${borrowlist[i].borrowBookCount}  |Status: ${borrowlist[i].status} | PaidFineAmount:${borrowlist[i].paidFineAmount}<br>`
    }
  }
  if (flag) {
    alert("You have no borrowed History");
    borrowdetails.innerHTML = "You have no borrowed History";
  }
}

async function ReturnBooks() {
  CloseAll();
  mainmenu.style.display = "block";
  returnbooks.style.display = "block";

  let inlinereturnbooks = document.getElementById("inlinereturnbooks") as HTMLLabelElement;
  inlinereturnbooks.innerHTML = "";

  let borrowlist = await fetchBorrows();
  let flag = true;

  for (let i = 0; i < borrowlist.length; i++) {
    if (currentuser.userID == borrowlist[i].userID && borrowlist[i].status == "Borrowed") {
      flag = false;
      inlinereturnbooks.innerHTML += `BorrowID: ${borrowlist[i].borrowID}  | BookID: ${borrowlist[i].bookID} UserID: ${borrowlist[i].userID}  |BorrowBookCount: ${borrowlist[i].borrowBookCount}  |Status: ${borrowlist[i].status} <br>`;
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
}

async function Return() {
  // CloseAll();
  // mainmenu.style.display = "block";
  // returnbooks.style.display = "block";
  // returnpage.style.display = "block";

  let borrowlist = await fetchBorrows();

  let newborrowedid = (document.getElementById("newborrowedid") as HTMLInputElement).value;

  let flag = true;

  for (let i = 0; i < borrowlist.length; i++) {
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
}

function WalletRecharge() {
  CloseAll();
  mainmenu.style.display = "block";
  walletRecharge.style.display = "block";

}
function Recharge() {
  let rechargeamount = (document.getElementById("rechargeamount") as HTMLInputElement).value;
  let rechargemessage = document.getElementById("rechargemessage") as HTMLLabelElement;
  currentuser.balance += parseInt(rechargeamount);
  updateUser(currentuser.userID,currentuser);

  rechargemessage.innerHTML = `Your Updated Balance is: ${currentuser.balance}`;
}

async function fetchUsers(): Promise<UserDetails[]> {
  const apiUrl = 'http://localhost:5043/api/userdetails';
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch contacts');
  }
  return await response.json();
}

async function fetchBooks(): Promise<BookDetails[]> {
  const apiUrl = 'http://localhost:5043/api/bookdetails';
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch contacts');
  }
  return await response.json();
}

async function fetchBorrows(): Promise<BorrowDetails[]> {
  const apiUrl = 'http://localhost:5043/api/borrowdetails';
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch contacts');
  }
  return await response.json();
}

async function addUsers(user: UserDetails): Promise<void> {
  const response = await fetch('http://localhost:5043/api/userdetails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  if (!response.ok) {
    throw new Error('Failed to add contact');
  }
  // renderContacts(); 
}

async function addBorrows(borrow: BorrowDetails): Promise<void> {
  const response = await fetch('http://localhost:5043/api/borrowdetails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(borrow)
  });
  if (!response.ok) {
    throw new Error('Failed to add contact');
  }
  // renderContacts(); 
}

async function updateBook(id: number, book: BookDetails): Promise<void> {
  const response = await fetch(`http://localhost:5043/api/bookdetails/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(book)
  });
  if (!response.ok) {
    throw new Error('Failed to update contact');
  }
  //renderContacts();
}

async function updateBorrow(id: number, borrow: BorrowDetails): Promise<void> {
  const response = await fetch(`http://localhost:5043/api/borrowdetails/${id}`, {
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

async function updateUser(id: number, book: UserDetails): Promise<void> {
  const response = await fetch(`http://localhost:5043/api/userdetails/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(book)
  });
  if (!response.ok) {
    throw new Error('Failed to update contact');
  }
  //renderContacts();
}