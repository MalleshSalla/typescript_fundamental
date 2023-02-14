interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
 
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const mallesh: Admin = { dbId: 22, email: "salla@g.com", userId: 2211,
role: "admin",
githubToken: "github",
startTrail: () => {
    return "trail started"
},
getCoupon: (name: "salla", off: 10) => {
    return 10
}
}
mallesh.email = "salla@g.com"
console.log(mallesh.startTrail())
console.log(mallesh.getCoupon("salla",10))