
 const enum SeatChoice {
    AISLE = "aisle",
    MIDDLE = 3,
    WINDOW,
    FOURTH
}

const hcSeat = SeatChoice.AISLE;

enum Status{
    PENDING = 100,
    SERVED, // 101
    CANCELLED // 102
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai (type:ChaiType){
    console.log(`Making: ${type}`)
}

makeChai(ChaiType.GINGER)
// makeChai("masala") //Error




export {}