let overdue = [
    { text: 'Submit assignment 2023-12-02', isDone: false }
   ];
   
   let dueToday = [
    { text: 'Pay rent', isDone: true },
    { text: 'Service Vehicle', isDone: false }
   ];
   
   let dueLater = [
    { text: 'File taxes 2023-12-04', isDone: false },
    { text: 'Pay electric bill 2023-12-04', isDone: false }
   ];
   
   function displayTask(taskList) {
    taskList.forEach(task => {
       console.log(task.isDone ? '[x] ' : '[ ] ', task.text);
    });
   }
   
   console.log('Overdue');
   displayTask(overdue);
   
   console.log('\nDue Today');
   displayTask(dueToday);
   
   console.log('\nDue Later');
   displayTask(dueLater);