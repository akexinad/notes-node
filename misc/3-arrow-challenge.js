//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
  tasks: [{
    text: 'Grocery shopping',
    completed: true
  },{
    text: 'Clean yard',
    completed: false
  }, {
    text: 'Film course',
    completed: false
  }],

  // NOTE: so the object method, getTasksToDo() does the 'this' BINDING for whatever arrow function you put inside this object method.
  // NOTE: REMEMBER, instead of the normal getTasksToDo: function () syntax, we can use the ES6 syntax below:

  getTasksToDo() {
    // console.log(this.tasks);
    return this.tasks.filter( task => task.completed === false );
  }

}

console.log(tasks.getTasksToDo())
