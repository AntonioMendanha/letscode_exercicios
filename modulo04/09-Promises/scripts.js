const button = document.querySelector('button');
const ul = document.querySelector('ul.results');

const generateRandomNumber = () => Math.floor(Math.random() * 10);

const randomTime = () => {
  let randomTime = generateRandomNumber();
  if (randomTime === 0) {
    randomTime = 1;
  } 
    return randomTime * 1000;
}

const createArray = () => {
  const randomArray = new Array(generateRandomNumber())
  for (i = 0; i < randomArray.length  ; i++) {
    randomArray[i] = generateRandomNumber();
  }
  return randomArray;
}

const createPromise = (time) =>  new Promise(
  (resolve) => {
    const delay = time();
    randomArray = createArray()
    setTimeout(resolve, delay, randomArray);
  }
);

const printResults = (resultToPrint) => {
  const createli = document.createElement('li');
  ul.appendChild(createli);
  const li = document.querySelector('li:last-child');
  li.innerText = resultToPrint;
};

button.onclick = () => {
  const promise1 = createPromise(randomTime);
  const promise2 = createPromise(randomTime);
  const promise3 = createPromise(randomTime);
  const promises = [promise1, promise2, promise3];
  
  function getResults() {
    alert('Calculando')
    let allPromisesArray = [];
    Promise.allSettled(promises).then(
      (results) => results.forEach( 
        (result) => {
          allPromisesArray = [...allPromisesArray, [result.value] ];
          printResults(allPromisesArray);
        }
      )
    )
  }

  getResults();
}
// criar função clear para limpar o resultado ao clicar no botão
