declare let UserIdAutoIncrement: number;
declare let MedicineIdAutoIncrement: number;
declare let OrderIdAutoIncrement: number;
declare let currentuser: UserDetails;
declare let currentusername: string;
declare let currentuserid: string;
interface UserDetails {
    userID: number;
    userName: String;
    userEmail: string;
    userPassword: string;
    userPhoneNumber: string;
    balance: number;
}
interface MedicineDetails {
    medicineID: number;
    medicineName: string;
    medicineCount: number;
    medicinePrice: number;
    expiryDate: string;
    image: any;
}
interface OrderDetails {
    orderID: number;
    userID: number;
    medicineName: string;
    medicineCount: number;
    totalPrice: number;
    orderStatus: string;
}
declare const homepage: HTMLDivElement;
declare const signin: HTMLDivElement;
declare const signup: HTMLDivElement;
declare const mainmenu: HTMLDivElement;
declare const welcome: HTMLDivElement;
declare const purchaseMedicine: HTMLDivElement;
declare const medicineeditpage: HTMLDivElement;
declare const medicinedetails: HTMLDivElement;
declare const orderHistory: HTMLDivElement;
declare const cancelOrder: HTMLDivElement;
declare const recharge: HTMLDivElement;
declare const showbalance: HTMLDivElement;
declare const addmedicine: HTMLDivElement;
declare function CloseAll(): void;
declare function Signup(): void;
declare function Signuppage(): void;
declare function Signin(): Promise<void>;
declare function Signinpage(): Promise<void>;
declare function Mainmenu(): void;
declare function Home(): void;
declare function PurchaseMedicine(): Promise<void>;
declare function Check(id: number): Promise<void>;
declare function MedicineDetails(): Promise<void>;
declare let editmedicineid: number;
declare function Edit(id: number): Promise<void>;
declare function EditSubmit(): Promise<void>;
declare function Delete(id: number): void;
declare function AddMedicine(): void;
declare function MedicineSubmit(): void;
declare function OrderHistory(): Promise<void>;
declare function tableToCSV(): void;
declare function downloadCSVFile(csv_data: any): void;
declare function CancelOrder(): Promise<void>;
declare function Cancel(id: number): Promise<void>;
declare function Recharge(): void;
declare function AmountRecharge(): void;
declare function Balance(): void;
declare function Exit(): void;
declare function fetchUserDetails(): Promise<UserDetails[]>;
declare function fetchMedicineDetails(): Promise<MedicineDetails[]>;
declare function fetchOrderDetails(): Promise<OrderDetails[]>;
declare function AddUser(users: UserDetails): Promise<void>;
declare function AddOrder(order: OrderDetails): Promise<void>;
declare function AddMedicines(medicine: MedicineDetails): Promise<void>;
declare function updateOrder(id: number, borrow: OrderDetails): Promise<void>;
declare function updateUser(id: number, user: UserDetails): Promise<void>;
declare function updateMedicine(id: number, medicine: MedicineDetails): Promise<void>;
declare function deleteMedicine(id: number): Promise<void>;
