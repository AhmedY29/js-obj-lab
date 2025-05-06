let book = {
  title: "رسائل من القرآن",
  author: "أحمد الصالح",
  year: "2024",
  isAvailable: false,
  borrow: () => {
    book.isAvailable = !book.isAvailable;
    return "Not Available";
  },
  publisher: {
    name: "Ahmed Alsaleh",
    location: {
      city: "Al Ahsa",
    },
  },
};

// المخرجات

// - اطبع الكائن `Book`.
console.log("=================Print Book Object===============");

console.log(book);

// - اطبع الخاصية `title`.
console.log("=================Print Title===============");

console.log(book.title);

// - قم بتعديل قيمة الخاصية `year` إلى السنة الحالية واطبع الكائن.
console.log("=================Change Year Property===============");
book.year = "2025";
console.log(book.year);

// - احذف الخاصية `author` واطبع الكائن.
console.log("=================Delete Author Property===============");
delete book.author;
console.log(book);

console.log(
  "=================Call Borrow Fun To Change IsAvailable==============="
);

book.borrow();
console.log(book);

// - اطبع الخاصية `publisher`.
console.log("=================Print Publisher Property===============");

console.log(book.publisher);

// - اطبع الخاصية `city` من داخل `location` obj .
console.log(
  "=================Print City Property form Location Property==============="
);

console.log(book.publisher.location.city);
