// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

const problem5 = (inventory, year) => {
  const result = inventory.filter((car) => car.car_year < 2000);
  return result;
};

module.exports = problem5;
