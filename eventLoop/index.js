// TASK 1
setTimeout(() => {
    console.log('setTimeout');
  }, 0);
  
  const promise = new Promise((resolve) => {
    console.log('Promise');
    resolve();
  });
  
  promise.then(() => {
    console.log('Promise resolve');
  });
  
  console.log('End');

  /* ВЫВОД
  Promise
  End
  Promise resolve
  setTimeout
  */


  // TASK 2

  function runCode() {
    console.log('before promise');
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Zero Promise');
        resolve();
      }, 0);
    });
  }
  
  setTimeout(() => {
    console.log('Zero');
  }, 0);
  
  runCode().then(() => console.log('Zero Promise Invoked'));
  
  console.log('One');

  /* ВЫВОД
  before promise (ибо вызывается функция перед One)
  One (синхронный код)
  Zero (первая макрозадача, а внутри промиса еще одна)
  Zero Promise (вторая макрозадача и в ней резолв)
  Zero Promise Invoked (микрозадача)
  */


// TASK 3


  const getData = (callback) => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((user) => {
        console.log('Success');
        callback(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  getData(() => {
    console.log('user received');
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('promise resolved');
      }, 500);
      console.log('in promise');
      setTimeout(() => {
        console.log('last set timeout');
      }, 400);
    });
    promise.then((result) => {
      console.log(result);
    });
  });
  
  console.log('End');

  /* ВЫВОД
  End (единственный синхронный код)
  Success (ибо идет вызов и передается колбэк, который позже будет вызываться)
  user received (синхронный код в коллбэке)
  in promise (синхронный код между двумя макрозадачами)
  last set timeout (быстрее выполнилась макрозадача)
  promise resolved (вторая макрозадача -> передает резолв, который после получаем .then)
  */
  