export function checkRestaurant(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name === 'Nargiz') reject(new Error(`${name} is closed`));
      else resolve(`${name} is open`);
    }, 800);
  });
}


const openRestaurants = () => {
  return Promise.allSettled([
    checkRestaurant("Firuza"),
    checkRestaurant("Nargiz"),
    checkRestaurant("Khazar"),
  ]).then((arr) => {
    const newList = arr.filter((result) => result.status === "fulfilled");

    return newList.map((data) => data.value);
  });
};

export default openRestaurants;
