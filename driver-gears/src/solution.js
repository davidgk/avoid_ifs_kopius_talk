
class Driver {
    static FIRST_GEAR = "First gear";
    static SECOND_GEAR= "Second gear";
    static THIRD_GEAR= "Third gear";
    static FOURTH_GEAR= "Fourth gear";

    changeGear(gear) {
        const car = new Car()
        return car.move(gear);
    }
}

class Car {
    static MAXIMUM_FIRST_GEAR = 20;
    static MAXIMUM_SECOND_GEAR = 50;
    static MAXIMUM_THIRD_GEAR = 80;
    static MAXIMUM_FOURTH_GEAR = 110;
    static ZERO_SPEED = 0;
    static moving_scale = {
        [Driver.FIRST_GEAR]: Car.MAXIMUM_FIRST_GEAR,
        [Driver.SECOND_GEAR]: Car.MAXIMUM_SECOND_GEAR,
        [Driver.THIRD_GEAR]: Car.MAXIMUM_THIRD_GEAR,
        [Driver.FOURTH_GEAR]: Car.MAXIMUM_FOURTH_GEAR,
    };

    move(gear) {
        return Car.moving_scale[gear] || Car.ZERO_SPEED
    }
}



function solutionGears (gear) {
    const driver = new Driver()
    return driver.changeGear(gear)
}

module.exports = {solutionGears, Car, Driver}
