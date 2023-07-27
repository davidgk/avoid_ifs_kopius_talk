
class Car {
    static FIRST_GEAR = "first_gear" ;
    static SECOND_GEAR = "second gear" ;
    static THIRD_GEAR = "third gear" ;
    static FOURTH_GEAR = "fourth gear" ;
    static DEFAULT = "default" ;
    static ECO_FUEL = "eco fuel" ;

    static SEMI_ECO_FUEL ="semi Eco fuel" ;
    static STD_FUEL = "std fuel";

    constructor(fuelType) {
        this.fuelType = fuelType
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

    isUsingFuel(fuel){
        return this.fuelType === fuel
    }
}

class Driver {
    static EXPERT = "expert" ;
    static STANDARD = "standard";
    constructor(car, driveType = Driver.EXPERT) {
        this.driveType = driveType
        this.car = car
    }

    checkMaxSpeedWith(gear) {
        const action = this.car.gearsMapSpeed[gear] || this.car.gearsMapSpeed[Car.DEFAULT]
        return action()
    }

    checkPerformance() {
        if (this.driveType === Driver.EXPERT){
            if(this.car.isUsingFuel(Car.ECO_FUEL)){
                // a bunch of logic
                return 100
            }
            if(this.car.isUsingFuel(Car.SEMI_ECO_FUEL)){
                // a bunch of logic
                return 80
            }
            if(this.car.isUsingFuel(Car.STD_FUEL)){
                // a bunch of logic
                return 60
            }
        }
        if (this.driveType === Driver.STANDARD){
            if(this.car.isUsingFuel(Car.ECO_FUEL)){
                // a bunch of logic
                return 80
            }
            if(this.car.isUsingFuel(Car.SEMI_ECO_FUEL)){
                // a bunch of logic
                return 60
            }
            if(this.car.isUsingFuel(Car.STD_FUEL)){
                // a bunch of logic
                return 40
            }
        }
        return 30
    }
}

function solutionGears (gear) {
    const driver = new Driver(new Car())
    return driver.checkMaxSpeedWith(gear)

}

function solutionEngines (driverType, fuelType) {
    const driver = new Driver(new Car(fuelType), driverType)
    return driver.checkPerformance()
}

module.exports = {Driver, Car,  solutionGears, solutionEngines}
