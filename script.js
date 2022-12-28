
// Exercise 1: Simple If/Else Statement

    //1 Create 2 variables, x and y. Each of them should have a different numeric value.
    let x = 5;
    let y = 2;

    //2 Write an if/else statement that checks which number is bigger.
    if (x>y) {
        console.log("x is the biggest number");
    } else {
        console.log("y is the biggest number");
    }



// Exercise 2: Chihuahua

    //1 Create a variable called newDog where it’s value is “Chihuahua”.
    let newDog ="Chihuahua";

    //2 Check and display how many letters are in newDog.
    console.log(newDog.length);

    /* 3 Display the newDog variable in uppercase and then
    in lowercase (no need to create new variables, just console.log twice). */


    console.log(newDog.toUpperCase());
    console.log(newDog.toLowerCase());


    // 4 Check if the variable newDog is equal to “Chihuahua”
    if (newDog=="Chihuahua") {
        console.log("I love Chihuahuas, it\’s my favorite dog breed");
    }else{
        console.log("I dont care, I prefer cats");
    }






//Exercise 3: Even Or Odd

    //1 Prompt the user for a number and save it to a variable.
    
    let userInput=prompt("Please enter a number");
    if(isNaN(userInput)){
        console.log("Please enter a number");
    }else{
    //2 Check whether the variable is even or odd.
        let checkValue=userInput%2;

        if(checkValue==0){
            console.log(userInput+" is an even number");
        }else{
            console.log(userInput+" is an odd number");
        }

    }



// Exercise 4: Group Chat

    const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000",];

    /* Using the array above, console.log the number of users that
    are connected to the group chat based on the following rules*/

    let numberUser=users.length;  

    if (numberUser>2) {

        console.log(users.slice(0,2).join(' ')+" and "+(numberUser-2)+" more are online");
    } else if (numberUser==2){
        console.log(users[0]+" and "+users[1]+" are online");
    }
    else if (numberUser==1){
        console.log(users+" is online");
    }
    else{
        console.log("no one is online");
    }
