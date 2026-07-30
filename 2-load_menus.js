export function getMenuFromRestaurant(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${name} menu is ready`);
    }, 1000);
  });
}

const loadAllMenus = () => {
  return Promise.all([
    getMenuFromRestaurant("Firuza"),
    getMenuFromRestaurant("Shirvanshah"),
    getMenuFromRestaurant("Khazar"),
  ])
    .then((arr) => {
      return arr;
    })
    .catch((err) => {
      console.log(`Menus failed to load: ${err.message}`);
    });
};

export default loadAllMenus;