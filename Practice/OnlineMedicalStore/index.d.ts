declare let UserIDautoincrement: number;
declare let MedicineIDautoincreament: number;
declare let OrderIDautoincreament: number;
declare let userbalance: number;
declare class User {
    UserID: string;
    Name: string;
    Email: string;
    Password: string;
    PhoneNumber: number;
    constructor(name: string, email: string, password: string, phonenumber: number);
}
declare class Medicineinfo {
    MedicineId: string;
    MedicineName: string;
    MedicineCount: number;
    MedicinePrice: number;
    constructor(medicineName: string, medicineCount: number, medicinePrice: number);
}
declare class Orderinfo {
    OrderId: string;
    UserID: string;
    MedicineId: string;
    MedicineName: string;
    MedicineCount: number;
    TotalAmount: number;
    constructor(userID: string, medicineId: string, medicineName: string, medicineCount: number, totalAmount: number);
}
declare let userList: Array<User>;
declare let medicineList: Array<Medicineinfo>;
declare let orderlist: Array<Orderinfo>;
declare let homepage: HTMLDivElement;
declare let signup: HTMLDivElement;
declare let signin: HTMLDivElement;
declare let signinheader: HTMLDivElement;
declare let medicinedetails: HTMLDivElement;
declare let purchase: HTMLDivElement;
declare let cancel: HTMLDivElement;
declare let topup: HTMLDivElement;
declare let showbalance: HTMLDivElement;
declare let orderhistory: HTMLDivElement;
declare function closetabs(): void;
declare function Signup(): void;
declare function Signin(): void;
declare function submit(): void;
declare function submitsignin(): void;
declare function home(): void;
declare function medicineDetails(): void;
declare function Purchase(): void;
declare function Cancel(): void;
declare function cancelorder(id: string): void;
declare function Topup(): void;
declare function Showbalance(): void;
declare function Orderhistory(): void;
