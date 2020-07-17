document.querySelector('button').addEventListener('click', (e) => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'data.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      const result = `
      <ol>
        <li>Name: ${data.name}</li>
        <li>Age: ${data.age}</li>
        <li>Gendre: ${data.sex}</li>
      <ol>
      `;
      document.querySelector('.content').innerHTML = result;
    }
  };

  xhr.send();
});
