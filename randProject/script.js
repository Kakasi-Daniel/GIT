const pallete = document.querySelector('.container');
const image = document.querySelector('.image');

pallete.addEventListener('click', e => {
  image.src = `${e.target.dataset.value}.jpg`;
});

const person = {
  firstName: 'Kakasi',
  lastName: 'Daniel',
  hobbies : {
    music: {
      songs: 25,
      instruments: {
        pian: '10 Years'
      }
    }
  },
  getName() {return this.firstName}
}

// const ins = prompt("Write down the instrument");
// if (ins !== 'pian'){
//   console.log('I don\'t play that.');
// }else{
//   console.log(person.hobbies.music.instruments[`${ins}`]);
// }

// console.log(person.getName());

// const birthday = new Date ('April 6 2002');
// const today = new Date();

// const calc = (bd,td) => {
//   console.log(`Years: ${td.getFullYear()-bd.getFullYear()}\nMonths: ${(12*(td.getFullYear()-bd.getFullYear())) + (td.getMonth()- bd.getMonth())}`);
// }

// calc(birthday,today);

// var sdt = new Date('2002-04-06');
// var difdt = new Date(new Date() - sdt);
// alert((difdt.toISOString().slice(0, 4) - 1970) + "Y " + (difdt.getMonth()+1) + "M " + difdt.getDate() + "D");

// console.log('String');

// console.log(window.outerHeight);
// console.log(window.navigator[`platform`]);

// const list = document.querySelector('.list');

// console.log(list.children[0]);


// function displayArr (){
//   arr.sort();
//   arr.forEach(e => {
//     console.log(e);
//   });
// }

// const arr = [1,2,3,45,32,32,32,32];
// displayArr();

