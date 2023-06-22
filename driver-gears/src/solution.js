

class Car {
    static MAXIMUM_FIRST_GEAR = 30;
    static MAXIMUM_SECOND_GEAR = 50;
    static MAXIMUM_THIRD_GEAR = 80;
    static MAXIMUM_FOURTH_GEAR = 110;
    static ZERO_SPEED = 0;

}

class Driver {
    static FIRST_GEAR = "First gear";
    static SECOND_GEAR= "Second gear";
    static THIRD_GEAR= "Third gear";
    static FOURTH_GEAR= "Fourth gear";

    changeGear(gear) {
        if (gear === Driver.FIRST_GEAR){
            return Car.MAXIMUM_FIRST_GEAR;
        }
        if (gear === Driver.SECOND_GEAR){
            return Car.MAXIMUM_SECOND_GEAR;
        }
        if (gear === Driver.THIRD_GEAR){
            return Car.MAXIMUM_THIRD_GEAR;
        }
        if (gear === Driver.FOURTH_GEAR){
            return Car.MAXIMUM_FOURTH_GEAR;
        }
        return Car.ZERO_SPEED
    }
}

function solutionGears (gear) {
    const driver = new Driver()
    return driver.changeGear(gear)
}

module.exports = {solutionGears, Car, Driver}
