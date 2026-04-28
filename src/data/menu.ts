import soup from "@/assets/food-soup.jpg";
import main from "@/assets/food-main.jpg";
import salad from "@/assets/food-salad.jpg";
import box from "@/assets/food-box.jpg";
import dessert from "@/assets/food-dessert.jpg";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  tag?: "Populārs" | "Jaunums" | "Līdzņemšanai";
  image?: string;
};

export const categories = [
  "Visi",
  "Kompleksās pusdienas",
  "Zupas",
  "Pamatēdieni",
  "Piedevas",
  "Salāti",
  "Uzkodas",
  "Mērces",
  "Dzērieni",
  "Deserti",
] as const;

export const menuItems: MenuItem[] = [
  { id: "1", name: "Komplekss Nr.1", description: "Zupa, pamatēdiens, piedeva, salāti un dzēriens", price: "6.50 €", category: "Kompleksās pusdienas", tag: "Populārs", image: box },
  { id: "2", name: "Komplekss Nr.2", description: "Pamatēdiens, piedeva un salāti", price: "5.20 €", category: "Kompleksās pusdienas", tag: "Līdzņemšanai", image: main },
  { id: "3", name: "Borščs ar gaļu", description: "Sātīga sarkanrāceņu zupa ar skābo krējumu", price: "2.20 €", category: "Zupas", image: soup },
  { id: "4", name: "Vistas nūdeļu zupa", description: "Mājīga zupa ar svaigām nūdelēm un dārzeņiem", price: "2.00 €", category: "Zupas" },
  { id: "5", name: "Cūkgaļas karbonāde", description: "Klasiskā karbonāde panējumā ar garšaugiem", price: "3.80 €", category: "Pamatēdieni", tag: "Populārs", image: main },
  { id: "6", name: "Mājās gatavotas kotletes", description: "Sulīgas gaļas kotletes ar mērci", price: "3.20 €", category: "Pamatēdieni", tag: "Populārs" },
  { id: "7", name: "Vistas šnicele", description: "Krāšņā kraukšķīgā panējumā", price: "3.50 €", category: "Pamatēdieni" },
  { id: "8", name: "Ceptie kartupeļi", description: "Ar svaigām garšvielām un sviestu", price: "1.20 €", category: "Piedevas" },
  { id: "9", name: "Kartupeļu biezenis", description: "Krēmīgs un mājīgs", price: "1.20 €", category: "Piedevas" },
  { id: "10", name: "Griķi ar sviestu", description: "Sātīga un veselīga piedeva", price: "1.10 €", category: "Piedevas" },
  { id: "11", name: "Svaigo dārzeņu salāti", description: "Tomāti, gurķi, paprika ar olīveļļu", price: "2.20 €", category: "Salāti", image: salad },
  { id: "12", name: "Grieķu salāti", description: "Ar feta sieru un olīvām", price: "2.80 €", category: "Salāti", tag: "Jaunums", image: salad },
  { id: "13", name: "Pildītas olas", description: "Klasiskā uzkoda ar majonēzi", price: "1.50 €", category: "Uzkodas" },
  { id: "14", name: "Siera nūjiņas", description: "Cepšanā kraukšķīgas, iekšā kūstošas", price: "2.50 €", category: "Uzkodas" },
  { id: "15", name: "Ķiploku mērce", description: "Krēmīgā mājās gatavotā mērce", price: "0.50 €", category: "Mērces" },
  { id: "16", name: "Tatāru mērce", description: "Skābena ar garšaugiem", price: "0.50 €", category: "Mērces" },
  { id: "17", name: "Svaiga sula", description: "Apelsīnu vai ābolu", price: "1.50 €", category: "Dzērieni" },
  { id: "18", name: "Tēja / Kafija", description: "Karsts dzēriens ar cukuru pēc izvēles", price: "1.00 €", category: "Dzērieni" },
  { id: "19", name: "Medus kūka", description: "Mājās ceptā tradicionālā kūka", price: "2.20 €", category: "Deserti", tag: "Populārs", image: dessert },
  { id: "20", name: "Šokolādes kēkss", description: "Bagātīgs un mitrs šokolādes baudījums", price: "2.00 €", category: "Deserti", image: dessert },
];

export const dailyOffer = [
  { type: "Zupa", name: "Borščs ar gaļu", description: "Ar skābo krējumu un melno maizi", price: "2.20 €", image: soup },
  { type: "Pamatēdiens", name: "Cūkgaļas karbonāde", description: "Klasiskā receptē ar garšaugiem", price: "3.80 €", image: main },
  { type: "Piedevas", name: "Ceptie kartupeļi", description: "Ar rozmarīnu un sviestu", price: "1.20 €" },
  { type: "Salāti", name: "Svaigo dārzeņu salāti", description: "Tomāti, gurķi un paprika", price: "2.20 €", image: salad },
  { type: "Dzēriens / deserts", name: "Medus kūka + tēja", description: "Saldais nobeigums pusdienām", price: "3.00 €", image: dessert },
];

export const reviews = [
  { name: "Anna L.", text: "Paldies, ļoti garšīgas karbonādes." },
  { name: "Jānis K.", text: "Ļoti garšīgi, silti, svaigi, ērta piegāde." },
  { name: "Līga M.", text: "Super garšīgas vakariņas!" },
  { name: "Inese B.", text: "Ļoooooti garšīgām pusdienām." },
];
