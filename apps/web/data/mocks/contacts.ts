import { Contacts } from "@/types/contacts";
export const contacts: Contacts = {
  theater: "Театр «12 стульев»",
  email: "info@12stulyev-theater.ru",
  phone: "+7 (495) 123-45-67",
  socials: [
    {label:"VK", url:"https://vk.com/12stulyev"},
    {label:"YouTube", url:"https://youtube.com/@12stulyev"},
    {label:"Telegram", url:"https://t.me/stulyev12"},
    {label:"Instagram", url:"https://instagram.com/12stulyev"}
  ],
  partners: [
    { id: 1, name: "Московский театр", logo: "/images/partners/moscow-theater.png", url: "https://moscow-theater.ru" },
    { id: 2, name: "Культурный фонд", logo: "/images/partners/culture-fund.png", url: "https://culture-fund.ru" },
    { id: 3, name: "Театральная пресса", logo: "/images/partners/theater-press.png", url: "https://theater-press.ru" },
    { id: 4, name: "Гастрольное агентство", logo: "/images/partners/tour-agency.png", url: "https://tour-agency.ru" }
  ]
};
