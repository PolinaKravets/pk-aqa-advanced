// Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
// У функції треба поділити numerator на denominator і повернути результат.
// Додайте валідацію в функції. У разі,
// якщо denominator дорівнює 0
// або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
// Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0 або один з аргументів не є числом.
// Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.

//Функція
function divide (numerator, denominator)
{
    if (denominator === 0)
        {
            throw new Error('Діленні на 0 неможливе')
        }
    if  (typeof numerator != 'number' || typeof denominator != 'number')
        {
        throw new Error('Математична операція ділення можлива тільки з числами')
        }
    return  numerator / denominator   

}

/// перший визов з валідними данними
 try {

     let result = divide(10,3)
     console.log(`Результат: ${result}`);  
  } catch (error) {

    console.error('Сталася помилка:', error.message)
  }
  finally {
        console.log("Робота завершена");
  }
  ///другий визов з 0

  try {

    let result = divide(10,0)
    console.log(`Результат: ${result}`);  
 } catch (error) {

   console.error('Сталася помилка:', error.message);
 }
 finally {
    console.log("Робота завершена");
 }
 /// третій визов зі стрінгой
 try {

    let result = divide(10,'a')
    console.log(`Результат: ${result}`);  
 } catch (error){

   console.error('Сталася помилка:', error.message);
 }
   finally {
    console.log("Робота завершена");
   }
