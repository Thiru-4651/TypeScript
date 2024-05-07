let currentuser:UserDetails;
let count:number=3;


interface UserDetails
{
    userID:number,
    userName:string,
    department:string,
    mobileNumber:string,
    balance:number
}

interface BookDetails
{
    bookID:number,
    bookName:string,
    authorName:string,
    bookCount:number
}

interface BorrowDetails 
{
    borrowID:number,
    bookID:number,
    userID:number,
    borrowBookCount:number,
    status:string
}

const homepage=document.getElementById("homepage")as HTMLDivElement;
const register=document.getElementById("register")as HTMLDivElement;
const login=document.getElementById("login")as HTMLDivElement;
const mainmenu=document.getElementById("mainmenu")as HTMLDivElement;
const welcome=document.getElementById("welcome")as HTMLDivElement;
const borrowbook=document.getElementById("borrowbook")as HTMLDivElement;
const showBorrowedhistory=document.getElementById("showBorrowedhistory")as HTMLDivElement;
const returnbooks=document.getElementById("returnbooks")as HTMLDivElement;
const walletRecharge=document.getElementById("walletRecharge")as HTMLDivElement;
 
function CloseAll()
{
    homepage.style.display="none";
    register.style.display="none";
    login.style.display="none";
    mainmenu.style.display="none";
    welcome.style.display="none";
    borrowbook.style.display="none";
    showBorrowedhistory.style.display="none";
    returnbooks.style.display="none";
    walletRecharge.style.display="none";
}

function NewUser()
{
    CloseAll();
    register.style.display="block";
}

function Register()
{
    let newusername=(document.getElementById("newusername")as HTMLInputElement).value;
    let newdepartment=(document.getElementById("newdepartment")as HTMLInputElement).value;
    let newmobilenumber=(document.getElementById("newmobilenumber")as HTMLInputElement).value;

    const newuser:UserDetails={
        userID:count++,
        userName:newusername,
        department:newdepartment,
        mobileNumber:newmobilenumber,
        balance:0
    }
    addUsers(newuser);
    alert("Registered Successfully");
    CloseAll();
    homepage.style.display="block";
}

async function ExcistingUser()
{
    CloseAll();
    login.style.display="block";   
    
    let userlist=await fetchUsers();
    let availableusers=document.getElementById("availableusers")as HTMLLabelElement;
    availableusers.innerHTML="";

    for(let i=0;i<userlist.length;i++)
        {
            availableusers.innerHTML+=`UserID:${userlist[i].userID} |  UserName: ${userlist[i].userName} <br>`;
        }
}

async function Login()
{
    let newuserid=(document.getElementById("newuserid")as HTMLInputElement).value;
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
    const response = await fetch('http://localhost:5043/api/bookdetails', {
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