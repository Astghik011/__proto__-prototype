// Airplane TASK:
// Write an Airplane object that initializes name.
// Give airplanes the ability to .takeOff() and .land():
// If a plane takes off, its isFlying property is set to true.
// If a plane lands, its isFlying property is set to false

const Airplane = {
    name: "Fifi",
    isFlying:false,

    takeOff(){
        return this.isFlying = true; 
        // the editor automatically changes the name to this, so I left it as it is
    },

    land(){
        return this.isFlying = false;
    }
}

console.log(Airplane.takeOff());
console.log(Airplane.land());