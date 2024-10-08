const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise.then((response) => {
    const jsonPromise = response.json();
    jsonPromise.then((data) => {
      console.log(data[1].name);
    });
  });

  /*
  And we said that this "callback hell" made our code hard to understand? Isn't this just the same, only with then() calls?

It is, of course. But the elegant feature of promises is that then() itself returns a promise, which will be completed with the result of the function passed to it. This means that we can (and certainly should) rewrite the above code like this:
*/
const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise2
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0].name);
    });  

    // catching error
    const fetchPromise3 = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
      );
      
      fetchPromise3
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data[3].name);
        });
        
   //catching error with .catch()
   const fetchPromise4 = fetch(
    "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise4
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data[4].name);
    })
    .catch((error) => {
      console.error(`Could not get products: ${error}`);
    });

    //using Promise.all()

    const fetchPromise5 = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
      );
      const fetchPromise6 = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
      );
      const fetchPromise7 = fetch(
        "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
      );
      
      Promise.all([fetchPromise5, fetchPromise6, fetchPromise7])
        .then((responses) => {
          for (const response of responses) {
            console.log(`${response.url}: ${response.status}`);
          }
        })
        .catch((error) => {
          console.error(`Failed to fetch: ${error}`);
        });
      
     