
class Car {
    static FIRST_GEAR = "first_gear" ;
    static SECOND_GEAR = "second gear" ;
    static THIRD_GEAR = "third gear" ;
    static FOURTH_GEAR = "fourth gear" ;



    getMaxSpeedAtFirstGear(){
        // a 20 of logic
        return 20
    }

    getMaxSpeedAtSecondGear(){
        // a 50 of logic
        return 50
    }
    getMaxSpeedAtThirdGear(){
        // a 50 of logic
        return 80
    }
    getMaxSpeedAtFourthGear(){
        // a 520 of logic
        return 100
    }
}

class Driver {
    constructor(car) {
        this.car = car
    }

    checkMaxSpeedWith(gear) {
        if ( gear === Car.FIRST_GEAR) {
            return this.car.getMaxSpeedAtFirstGear();
        }
        if ( gear === Car.SECOND_GEAR) {
          return this.car.getMaxSpeedAtSecondGear();
        }
        if ( gear === Car.THIRD_GEAR) {
            return this.car.getMaxSpeedAtThirdGear();
        }
        if ( gear === Car.FOURTH_GEAR) {
            return this.car.getMaxSpeedAtFourthGear();
        }
        return 0;
    }
}

function solutionGears (gear) {
    const driver = new Driver(new Car())
    return driver.checkMaxSpeedWith(gear)

}

function solutionEngines (driverType, fuelType) {


}

module.exports = {Driver, Car,  solutionGears, solutionEngines}
