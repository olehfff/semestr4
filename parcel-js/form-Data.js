const formData = [];

function addData(data) {
  formData.push(data);
  console.log('Наявні дані:', formData);
}

module.exports = { addData };