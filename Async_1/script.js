document.querySelector('button').addEventListener('click', e =>{

  const xhr = new XMLHttpRequest();

  xhr.open('GET','data.txt');

  xhr.onprogress = function() {
    document.querySelector('body').style.background = 'red';
  }

  xhr.onload = function () {
    if(this.status === 200){
      document.querySelector('body').style.background = 'white';
      document.querySelector('p').innerHTML = `${xhr.response}`;
    }
  }

  xhr.send();

})