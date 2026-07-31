export function driver(name, ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(name), ms);
  });
}

const fastestDriver = () => {
  return Promise.race([driver("Max", 1200), driver("Mike", 600), driver("Will", 900)]);
};

export default fastestDriver;