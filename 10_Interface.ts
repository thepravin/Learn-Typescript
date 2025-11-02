interface User2 {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: () => string
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

// reopening the interfaces (adding new field )
interface User2 {
  githubToken: string;
}

// inheritance of interfaces
interface Admin2 extends User2 {
  role: "admin" | "ta" | "learner";
}

const hitesh: Admin2 = {
  dbId: 22,
  email: "h@h.com",
  userId: 2211,
  role: "admin",
  githubToken: "github",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "hitesh10", off: 10) => {
    return 10;
  },
};
hitesh.email = "h@hc.com";
// hitesh.dbId = 33 // error : readonly
