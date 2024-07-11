// Завдання 1
let result = 5 + 5 + '5';
console.log(result);
console.log(typeof result);

// Завдання 2
let email = 'example@example.com';
if (email.includes('@')) {
  console.log('Email contains @');
} else {
  console.log('Email does not contain @');
}
console.log('Total number of characters in email:', email.length);

// Завдання 3
let word1 = 'My';
let word2 = 'name';
let word3 = 'is';
let fullName = word1 + ' ' + word2 + ' ' + word3 + ' ' + 'Viktor';
console.log(fullName);

// Завдання 4
let userName = 'Олександро';
let payment = 300;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);