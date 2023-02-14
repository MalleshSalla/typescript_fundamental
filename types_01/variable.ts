// let greeting:String = "hello salla"
// greeting.toLocaleLowerCase()

// let price:number = 24
// price.toExponential()
// console.log(greeting)

// console.log(price)
// console.log(typeof(price))


//TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.

// let hero:any;

// function getHero() {
//     return "spidy";
// }

// hero=getHero()
// console.log(hero)

/* /////////////
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
  printCoord({ x: 3, y: 7 });

  function printName(obj: { first: string; last?: string }) {
    if (obj.last !=null) {
        console.log("first name : " +obj.first );
        console.log("last name " + obj.last)
    } else {
        console.log("first name " + obj.first)
    }
  }

  function signUp(name:string,email:string,isPaid : boolean = false) {
    console.log("signup success")
  }
  // Both OK
  printName({ first: "Bob" });
  printName({ first: "Alice", last: "Alisson" });

  signUp("salla","salla@g.com")

  ///////////
  */

  let getHello = (s:string): string=>{
    return `hello ${s}`
  }

  let greetSalla = getHello("salla")
  console.log(greetSalla)
const heros = ["thor","spiderman","iron man"]
//const heros = [1,2,3]

  heros.map((hero):String =>{
    return `hero is ${hero}`
  })

  console.log(heros)

  function consoleError(errmsg: string ) : void{
    console.log(errmsg)
  }

  function handleError(errmsg: string ) : never{
    throw new Error(errmsg)
  }

