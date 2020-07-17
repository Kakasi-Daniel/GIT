document.querySelector('button').addEventListener('click', e =>{
  fetch('https://api.github.com/users/Kakasi-Daniel')
    .then(res => res.json())
    .then(result => {
      document.querySelector('div').innerHTML = 
      `
        <img src="${result.avatar_url}">
      `
    })
    .catch(err => console.log(err));
})