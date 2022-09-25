import { Contact } from "../models/contact";

const CONTACTS: Contact[] = [
  { id: 0, name: "Kisan Network", phoneNumber: "+91 9810153260" },
  { id: 1, name: "Tashish Soni", phoneNumber: "+91 9115167580" },
  { id: 2, name: "Aarav Sharma", phoneNumber: "9046017177" },
  { id: 3, name: "Louella Schmidt", phoneNumber: "7392927942" },
  { id: 4, name: "Heidi Garrett", phoneNumber: "9611454186" },
  { id: 5, name: "Zack Meyer", phoneNumber: "8857711911" },
  { id: 6, name: "Jordan Reynolds", phoneNumber: "7277353642" },
  { id: 7, name: "Andrew Nichols", phoneNumber: "6408027111" },
  { id: 8, name: "Alan Owens", phoneNumber: "9462972275" },
  { id: 9, name: "Avery Newman", phoneNumber: "3565909727" },
  { id: 10, name: "Alma Perez", phoneNumber: "1844080824" },
  { id: 11, name: "Katie Graves", phoneNumber: "2532100344" },
  { id: 12, name: "Rakesh Verma", phoneNumber: "9625426549" },
  { id: 13, name: "Shubham Sharma", phoneNumber: "6099373468" },
  { id: 14, name: "Rahul Goel", phoneNumber: "9121005118" },
  { id: 15, name: "Arjun arora", phoneNumber: "5811087855" },
  { id: 16, name: "Manish Soni", phoneNumber: "8337080340" },
  { id: 17, name: "Khushboo Singhania", phoneNumber: "8746283710" },
  { id: 18, name: "Ravi Shastri", phoneNumber: "8867668617" },
  { id: 19, name: "Rohit Jaiswal", phoneNumber: "8868890258" },
];

export const getContactsData = (): Contact[] => {
  return CONTACTS;
};
