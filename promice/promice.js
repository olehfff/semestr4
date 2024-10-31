Д/З 1


const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const loggerOne = time => console.log(`Resolved after ${time}ms`);

delay(2000).then(() => logger(2000));
delay(1000).then(() => logger(1000));
delay(1500).then(() => logger(1500));



  const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];
  ​
  const toggleUserState = (allUsers, userName, callback) => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
  ​
    callback(updatedUsers);
  };
  ​
  const loggerTwo = updatedUsers => console.table(updatedUsers);
  ​
  toggleUserState(users, 'Mango', logger);
  toggleUserState(users, 'Lux', logger);
  ​
  
  toggleUserState(users, 'Mango', loggerTwo);
  toggleUserState(users, 'Lux', loggerTwo);



  const makeTransaction = transaction => {
    return new Promise((resolve, reject) => {
      const delay = randomIntegerFromInterval(200, 500);
    
      setTimeout(() => {
        const canProcess = Math.random() > 0.3;
    
        if (canProcess) {
          resolve({ id: transaction.id, time: delay });
        } else {
          reject(transaction.id);
        }
      }, delay);
    });
  };
  
  const logSuccess = ({ id, time }) => {
    console.log(`Transaction ${id} processed in ${time}ms`);
  };
  
  const logError = id => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
  };
  
  makeTransaction({ id: 70, amount: 150 })
    .then(logSuccess)
    .catch(logError);
  
  makeTransaction({ id: 71, amount: 230 })
    .then(logSuccess)
    .catch(logError);
  
  makeTransaction({ id: 72, amount: 75 })
    .then(logSuccess)
    .catch(logError);
  
  makeTransaction({ id: 73, amount: 100 })
    .then(logSuccess)
    .catch(logError);


    Д/З 2
    function delayedPromise(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

const promises = [
  delayedPromise('Проміс 1', 1000),
  delayedPromise('Проміс 2', 2000),
  delayedPromise('Проміс 3', 1500),
  delayedPromise('Проміс 4', 3000),
  delayedPromise('Проміс 5', 2500),
];

Promise.all(promises)
  .then((results) => {
    console.log('Результати всіх промісів:', results);
  })
  .catch((error) => {
    console.log('Сталася помилка:', error);
  });



  function randomDelay(value) {
    const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
  }
  
  const racePromises = [
    randomDelay('Проміс 1'),
    randomDelay('Проміс 2'),
    randomDelay('Проміс 3'),
    randomDelay('Проміс 4'),
    randomDelay('Проміс 5'),
  ];
  
  Promise.race(racePromises)
    .then((result) => {
      console.log('Найшвидший проміс:', result);
    })
    .catch((error) => {
      console.log('Сталася помилка:', error);
    });