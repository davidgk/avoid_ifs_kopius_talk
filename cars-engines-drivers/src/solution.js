
class Car {
    static FIRST_GEAR = "first_gear" ;
    static SECOND_GEAR = "second gear" ;
    static THIRD_GEAR = "third gear" ;
    static FOURTH_GEAR = "fourth gear" ;
    static DEFAULT = "default" ;
    static ECO_FUEL = "eco fuel" ;

    static SEMI_ECO_FUEL ="semi Eco fuel" ;
    static STD_FUEL = "std fuel";

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

    checkEnginePerformanceWithExpertDriver(){
        return 30
    }

    checkEnginePerformanceWithStandardDriver(){
        return 30
    }
}

class CarWithEcoFuel extends Car {
    checkEnginePerformanceWithExpertDriver() {
        // a bunch of logic
        return 100
    }

    checkEnginePerformanceWithStandardDriver(){
        // a bunch of logic
        return 80
    }
}

class CarSemiEcoFuel extends Car {
    checkEnginePerformanceWithExpertDriver(){
        // a bunch of logic
        return 80
    }
    checkEnginePerformanceWithStandardDriver(){
        // a bunch of logic
        return 60
    }
}

class CarStandardFuel extends Car {
    checkEnginePerformanceWithExpertDriver(){
        // a bunch of logic
        return 60
    }
    checkEnginePerformanceWithStandardDriver(){
        // a bunch of logic
        return 40
    }
}

const carClassFactory = {
    [Car.ECO_FUEL]: CarWithEcoFuel,
    [Car.SEMI_ECO_FUEL]: CarSemiEcoFuel,
    [Car.STD_FUEL]: CarStandardFuel,
    [Car.DEFAULT]: Car,
}

class Driver {
    static EXPERT = "expert" ;
    static STANDARD = "standard";
    static DEFAULT = "default";
    constructor(car) {
        this.car = car
    }

    checkMaxSpeedWith(gear) {
        const action = this.car.gearsMapSpeed[gear] || this.car.gearsMapSpeed[Car.DEFAULT]
        return action()
    }

    checkPerformance() {
        return 30
    }
}

class ExpertDriver extends Driver {
    checkPerformance() {
        return this.car.checkEnginePerformanceWithExpertDriver()
    }
}

class StandardDriver extends Driver {
    checkPerformance() {
        return this.car.checkEnginePerformanceWithStandardDriver()
    }
}

const driverClassDriver = {
    [Driver.EXPERT]: ExpertDriver,
    [Driver.STANDARD]: StandardDriver,
    [Driver.DEFAULT]: Driver,
}


function solutionGears (gear) {
    const driver = new Driver(new Car())
    return driver.checkMaxSpeedWith(gear)

}

function solutionEngines (driverType, fuelType) {
    const classDriver = driverClassDriver[driverType] || driverClassDriver[Driver.DEFAULT]
    const classCarr = carClassFactory[fuelType] || carClassFactory[Car.DEFAULT]
    const driver = new classDriver(new classCarr())
    return driver.checkPerformance()
}

module.exports = {Driver, Car,  solutionGears, solutionEngines}
