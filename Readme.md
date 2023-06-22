# What if we start avoiding ifs ?


## First Example (driver-gears):
We have a car and a driver wants to changes gears

When driver go first gear the car will return 20, as maximum velocity
When driver go second gear the car will return 50, as maximum velocity
When driver go third gear the car will return 80, as maximum velocity
When driver go fourth gear the car will return 110, as maximum velocity
When driver go to any other situation will return 0

## Second Example (driver-motors):
We have two drivers with different expertise. They want to test a motor with different kinds of fuel

When the driver is an expert:
* And it tests the motor with Eco Fuel the motor will have a performance of 100%
* And it tests the motor with Semi Eco Fuel the motor will have a performance of 80%
* And it tests the motor with Standard Fuel the motor will have a performance of 60%

When the driver is a common person:
* And it tests the motor with Eco Fuel the motor will have a performance of 80%
* And it tests the motor with Semi Eco Fuel the motor will have a performance of 60%
* And it tests the motor with Standard Fuel the motor will have a performance of 40%

Any other situation the motor will have a performance of 30%