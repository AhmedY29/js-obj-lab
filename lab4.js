// - airlineName – اسم الشركة (مثلاً: "الخطوط الجوية السعودية")
// - country – البلد الأساسي (مثلاً: "السعودية")
// - fleetSize – عدد الطائرات
// - destinations – مصفوفة تحتوي على الوجهات (مثلاً: ["الرياض", "جدة", "دبي", "نيويورك"])
// - inOperation – حالة الشركة (true/false)

const saudiaAirlines = {
  airlineName: "",
  country: "",
  fleetSize: "",
  destinations: [
    "الرياض",
    "جدة",
    "الدمام",
    "نيويورك",
    "دبي",
    "مدريد",
    "روما",
    "لندن",
  ],
  inOperation: true,
  bookFlight: (destination) => {
    return saudiaAirlines.destinations.includes(destination)
      ? `تم حجز رحلة الى ${destination}`
      : `عذرًا لا توجد رحلات الى ${destination} حاليًا`;
  },
  addDestination: (destination) => {
    saudiaAirlines.destinations.push(destination);
    return `تم اضافة ${destination} كـ وجهة جديدة`;
  },
  getSummary: () => {
    return "الخطوط الجوية السعودية تعمل في السعودية وتمتلك 120 طائرة وتطير إلى 20 وجهة";
  },
};

console.log(saudiaAirlines.bookFlight("دبي"));
console.log(saudiaAirlines.addDestination("فيينا"));
console.log(saudiaAirlines.getSummary());

// =================================================================================
// Functions
console.log("============================Func============================");

let sum = (num1, num2) => num1 + num2;

console.log(`Result of Sum is: ${sum(2, 8)}`);

let sub = (num1, num2) => num1 - num2;

console.log(`Result of Sub is: ${sub(10, 8)}`);

let mult = (num1, num2) => num1 * num2;

console.log(`Result of Multiplication is: ${mult(5, 5)}`);

let divide = (num1, num2) => num1 / num2;

console.log(`Result of Divide is: ${divide(10, 5)}`);
