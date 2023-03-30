// Airplane TASK:
// Write an Airplane object that initializes name.
// Give airplanes the ability to .takeOff() and .land():
// If a plane takes off, its isFlying property is set to true.
// If a plane lands, its isFlying property is set to false

const airplain = {
    name: "Fifi",
    isFlying:false,
    
    takeOff(){
        return this.isFlying = true;
    },

    land(){
        return this.isFlying = false;
    }
}

console.log(airplain.takeOff());
console.log(airplain.land());