//Створіть 2 класи, які будуть мати в собі методи що реалізують функції з попереднього завдання.

import {fetchTodo, fetchUser} from "./task2.js"


class TodoResult {
 async printTodo(){
 const res1 = await fetchTodo()
 console.log(res1)
 return res1
 }
}

class UserResult {
async printUser(){
const res2 = await fetchUser()
console.log(res2)
return res2
 }
}
 const todo1 = new TodoResult()
 todo1.printTodo()

 const user1 = new UserResult()
 user1.printUser()