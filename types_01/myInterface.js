var mallesh = { dbId: 22, email: "salla@g.com", userId: 2211,
    role: "admin",
    githubToken: "github",
    startTrail: function () {
        return "trail started";
    },
    getCoupon: function (name, off) {
        return 10;
    }
};
mallesh.email = "salla@g.com";
console.log(mallesh.startTrail());
console.log(mallesh.getCoupon("salla", 10));
