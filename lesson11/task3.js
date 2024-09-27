//Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити

async function fetchTodo() {
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const todo = await response.json();
    return todo
    }
    catch (error) {
        console.error('Error in Promise.race:', error)
    }
  }


   async function fetchUser() {
   try{const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    return user
    } 
    catch (error) {
        console.error('Error in Promise.race:', error)
    }
  }
 export {fetchTodo, fetchUser}