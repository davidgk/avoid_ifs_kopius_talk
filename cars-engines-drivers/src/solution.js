
class Car {
    static FIRST_GEAR = "first_gear" ;
    static SECOND_GEAR = "second gear" ;
    static THIRD_GEAR = "third gear" ;
    static FOURTH_GEAR = "fourth gear" ;
    static DEFAULT = "default" ;

    constructor() {
        this.gearsMapSpeed = {
            [Car.FIRST_GEAR]: this.getMaxSpeedAtFirstGear,
            [Car.SECOND_GEAR]: this.getMaxSpeedAtSecondGear,
            [Car.THIRD_GEAR]: this.getMaxSpeedAtThirdGear,
            [Car.FOURTH_GEAR]: this.getMaxSpeedAtFourthGear,
            [Car.DEFAULT]: () => 0,
        }
    }


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
        const action = this.car.gearsMapSpeed[gear] || this.car.gearsMapSpeed[Car.DEFAULT]
        return action()
    }
}

function solutionGears (gear) {
    const driver = new Driver(new Car())
    return driver.checkMaxSpeedWith(gear)

}

function solutionEngines (driverType, fuelType) {


}

module.exports = {Driver, Car,  solutionGears, solutionEngines}
