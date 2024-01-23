'use strict'

//Example_1
let numberRange = {
    from: 5,
    to: 10,
  
    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },
  
    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
  
  for (let num of numberRange) {
    alert(num); // 5, 6, 7, 8, 9, 10
  }

  //Example_2
  for (let char of "Sudamericano") {
    // Se dispara 12 veces: una vez por cada carácter
    alert( char ); // S, u, d, a, ... o
  }

  let phrase = 'El amorsh😍';
for (let char of phrase) {
    alert( char ); // E, l, ...😍
}

//Example_3
let user = {
  name: "Edisson Fierro",
  age: 50
};

// bucle sobre los valores
for (let value of Object.values(user)) {
  alert(value); // Edisson Fierro, 50
}

//Example_4
let menuRestaurant = {
  menu: "Cuycito con papita",
  pricex1: "$10,00",
  pricex2: "$15,00"
};

let {menu, pricex1, pricex2} = menuRestaurant;

alert(menu);  // Cuycito con papita
alert(pricex1);  // $10,00
alert(`Promoción: ${pricex2} solo para ti bro!`); // $15,00

//Example_5
let now = new Date();
alert( now ); // muestra en pantalla la fecha y la hora actuales