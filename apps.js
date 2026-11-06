/*
  รายการเครื่องมือทั้งหมด — แก้ไฟล์นี้ไฟล์เดียวเพื่อเพิ่ม/ลบ/แก้เว็บ

  ฟิลด์ของแต่ละรายการ:
    name      ชื่อที่แสดงบนการ์ด (จำเป็น)
    url       ลิงก์เว็บ หรือพาธไฟล์ html ในรีโพ เช่น "apps/calculator.html" (จำเป็น)
    desc      คำอธิบายสั้นๆ
    icon      อีโมจิ 1 ตัว
    category  หมวดหมู่ (พิมพ์อะไรก็ได้ ระบบจะสร้างปุ่มกรองให้เอง)
    embed     true = เปิดในหน้า hub นี้เลย (เหมาะกับไฟล์ html ของตัวเอง)
              false หรือไม่ใส่ = เปิดแท็บใหม่
              หมายเหตุ: เว็บภายนอกบางเจ้าไม่ยอมให้ฝัง ถ้าเปิดไม่ขึ้นให้เอา embed ออก
*/

window.HUB_TITLE = "กล่องเครื่องมือของฉัน";

window.APPS = [
  // เพิ่มเครื่องมือของคุณต่อด้านล่างนี้ ↓
  {
  name: "EXPENSE",
  desc: "รายรับรายจ่าย",
  url: "https://sinnetpear.github.io/my-expense-app/",   // หรือ "apps/ไฟล์ของฉัน.html"
  icon: "🛠️",
  category: "MONEY",
  },
  {
  name: "จดหนี้",
  desc: "จดหนี้ กับการจ่ายแต่ละรอบ",
  url: "https://trackxx.my.canva.site/moneycheck/",   // หรือ "apps/ไฟล์ของฉัน.html"
  icon: "🛠️",
  category: "MONEY",
  },
  {
  name: "ค่าธรรมเนียม",
  desc: "คิดค่าธรรมเนียมขออนุญาตก่อสร้าง",
  url: "https://script.google.com/macros/s/AKfycbzdO8bJLkQwlWuNfdpsLyZBfhsUwAryBt2IOwDr8i4dKJgxMQX17iadfQSIr9kIOM_b8Q/exec",   // หรือ "apps/ไฟล์ของฉัน.html"
  icon: "🛠️",
  category: "work",
  },
    {
  name: "Weight",
  desc: "บันทึกน้ำหนัก",
  url: "https://ppbbeiei.my.canva.site/",   // หรือ "apps/ไฟล์ของฉัน.html"
  icon: "🛠️",
  category: "life",
  },
  {
    name: "วันลา",
    desc: "บันทึกวันลา",
    url: "https://sinnetpear.github.io/wanla/",
    icon: "📏",
    category: "work",
  },
  {
    name: "ใบเสนอราคา",
    desc: "ใบเสนอราคางานเขียนแบบ",
    url: "https://ppbbeiei.my.canva.site/chs9bapvyanngd0a",
    icon: "📏",
    category: "work",
  },
  {
    name: "calculator normal",
    desc: "test",
    url: "apps/calculator.html",
    icon: "📅",
    category: "จัดการงาน",
  },
  {
    name: "Home Buy List",
    desc: "สิ่งของที่ซื้อในบ้าน พร้อม งบ",
    url: "https://ppbbeiei.my.canva.site/home-buy-list",
    icon: "📏",
    category: "MONEY",
  },
  {
    name: "เครื่องคิดเลขงานตรวจแบบ",
    desc: "พื้นที่ ที่ว่าง เครื่องคิดเลข",
    url: "https://script.google.com/macros/s/AKfycbxnicY7UHL4GSdiYhPqNib3VJy5M7psNEexVtULq9dO0fIsmBbzKv07ju-EeJ2F0bZC/exec",
    icon: "📏",
    category: "work",
  },
];
