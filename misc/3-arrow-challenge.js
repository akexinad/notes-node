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

  getTasksToDo() {
    // console.log(this.tasks);
    const completedTasks = this.tasks.filter( task => task.completed === true );
    console.log(completedTasks[0].text);
  }

}

console.log(tasks.getTasksToDo())
