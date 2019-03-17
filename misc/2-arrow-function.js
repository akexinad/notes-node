// const square = function (x) {
//   return x * x;
// }

// const square = (x) => {
//   return x * x;
// }

// const square = (x) => x * x;

// console.log(square(2));

const event = {
  name: 'Movie Night',

  attendeeList: ['Fellini', 'Benigni', 'Germi'],


  // NOTE: ARROW FUNCTIONS DO NOT BIND THEIR OWN THIS [OBJECT] VALUE. THEREFORE IT CANNOT READ THE PROPERTY OF NAME IN this.name. It returns undefined. Below is an alternative syntax that will bind the this object to the function.

  printAttendeeList() {
    console.log('Guest list for', this.name);

    // NOTE: AGAIN, Arrow functions donot bind their own this.value, they access the 'this' value in the context in which they're created, which, in this case, is inside the printAttendeeList() function.

    this.attendeeList.forEach( guest => {
      console.log(guest, 'will be at the', this.name);
    })
  }
}

// NOTE: ARROW FUNCTIONS ARE NOT USEFUL WHEN THEY ARE USED AS OBJECT METHODS.

event.printAttendeeList();
