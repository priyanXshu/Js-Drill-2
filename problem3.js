// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

const problem3 = (inventory) => {
  const result = inventory.map((car) => car.car_model);
  return result.sort();
};

module.exports = problem3;
