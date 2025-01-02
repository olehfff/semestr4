 const getData = data => {
    return Data.map(data => data.maponth);
  };
  
  console.log(getData(data));


 const getDataWithMonth = (data, month) => {
    return Data.filter(data => data.month === month);
  };
  
  console.log(getDataWithMonth(users, 'December'));


 const getDataWithYear = (users, year) => {
    return users.filter(data => data.year === year).map(data => data.year);
  };
  
  console.log(getDataWithYear(data, '2024'));


  // const getInactiveUsers = users => {
  //   return users.filter(user => !user.isActive);
  // };
  
  // console.log(getInactiveUsers(users));


  // const getUserWithEmail = (users, email) => {
  //   return users.find(user => user.email === email);
  // };
  
  // console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
  // console.log(getUserWithEmail(users, 'elmahead@omatom.com'));


  // const getUsersWithAge = (users, min, max) => {
  //   return users.filter(user => user.age >= min && user.age <= max);
  // };
  
  // console.log(getUsersWithAge(users, 20, 30));
  // console.log(getUsersWithAge(users, 30, 40));


  // const calculateTotalBalance = users => {
  //   return users.reduce((total, user) => total + user.balance, 0);
  // };
  
  // console.log(calculateTotalBalance(users));


  // const getUsersWithFriend = (users, friendName) => {
  //   return users
  //     .filter(user => user.friends.includes(friendName))
  //     .map(user => user.name);
  // };
  
  // console.log(getUsersWithFriend(users, 'Briana Decker'));
  // console.log(getUsersWithFriend(users, 'Goldie Gentry'));


  // const getNamesSortedByFriendsCount = users => {
  //   return users
  //     .slice()
  //     .sort((a, b) => a.friends.length - b.friends.length)
  //     .map(user => user.name);
  // };
  
  // console.log(getNamesSortedByFriendsCount(users));


  // const getSortedUniqueSkills = users => {
  //   const skills = users.flatMap(user => user.skills);
  //   const uniqueSkills = [...new Set(skills)];
  //   return uniqueSkills.sort();
  // };
  
  // console.log(getSortedUniqueSkills(users));