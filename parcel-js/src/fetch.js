const url = 'https://api.harvardartmuseums.org'
fetch(url)
.then(response => response.json())
.then(commit => console.log(commit))