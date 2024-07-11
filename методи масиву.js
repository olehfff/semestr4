const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';

for (let i = 0; i < friends.length; i++) {
  if (i !== 0) {
    string += ', ';
  }
  string += friends[i];
}

console.log(string);


const friends2 = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

let string2 = friends.join(', ');

console.log(string);


const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];

  const cardToRemove = 'Карточка-3';
  const indexToRemove = cards.indexOf(cardToRemove);
  if (indexToRemove !== -1) {
    cards.splice(indexToRemove, 1);
  }
  
  console.log(cards);
  
  const cardToInsert = 'Карточка-6';
  const indexToInsert = 2;
  
  cards.splice(indexToInsert, 0, cardToInsert);
  
  console.log(cards);