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

 ////Ось вам приклад як можна організувати ваш код через клас який орієнтується на конкретне апі + 
 //клас який є "ютілзом" для виконання запитів
 export class FetchHandler1 {
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }
    // config is {headers ={}, body = {}, method = 'GET'}
    async #fetchUrl(url, config){
        const response = await fetch(url, config);
        return response.json();
    }

    async handleFetchUrl(url, config){
        try {
            return this.#fetchUrl(url, config)
        } catch (err) {
            return err
        }
    }
}


export class StarWarsApi extends FetchHandler1{
    constructor(baseUrl){
        super(baseUrl)
        this.usersApiUrl = `${this.baseUrl}/api/people`
        this.planetsApiUrl = `${this.baseUrl}/api/planets`
    }
  
    async getUserById(id){
        return this.handleFetchUrl(`${this.usersApiUrl}/${id}`, {method: 'GET'})
    };


    async getPlanetById(id){
        return this.handleFetchUrl(`${this.planetsApiUrl}/${id}`, {method: 'GET'})
    };
}

const swApi = new StarWarsApi('https://swapi.dev')
console.log(await swApi.getUserById(1));
console.log(await swApi.getPlanetById(3));
