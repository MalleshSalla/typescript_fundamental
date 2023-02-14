var score = 33;
score = 44;
score = "55";
var mallesh = { name: "mallesh", id: 334 };
mallesh = { username: "hc", id: 334 };
// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
getDbId("54");
console.log(mallesh.id);
//array 
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", 3, true];
var seatAllotment;
seatAllotment = "aisle";
console.log(data);
console.log(data2);
console.log(data3);
console.log(seatAllotment);
