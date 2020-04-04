//SYNC CODE EXAMPLE:
//3.
// function otherFunction() {
    //4.
    // console.log('We are in another function!');
    //5.
    // console.log("Do some stuff here!");
// }
//1.
// console.log('Start');
//2.
// otherFunction();

// console.log('End');

// ****************************************************
// ****************************************************
// ****************************************************
// ****************************************************
// ****************************************************
// ****************************************************

//ASYNC CODE EXAMPLE:
// *** "() => {}" <- THIS IS A CALLBACK FUNCITON ***


// console.log("Start")
// CALLBACK WITH ASYNC
// setTimeout(() => {
//     console.log("We are in the timeout!")
// }, 10000)

// *** CALLBAKCS ARE NOT ALWAYS ASYNC ***
// CALLBACK WITH THATS NOT AN ASYNC
// const items = [1, 2, 3, 4, 5];
// items.forEach(item => {
//     console.log(item)
// })

// console.log("End")

// ****************************************************
// ****************************************************
// ****************************************************
// ****************************************************
// ****************************************************
// ****************************************************

// ISSUE HERE IS THAT LOGIN USER DATA DOES NOT RETURN THE DATA IN TIME FOR THE USER TO BE CONSOLE.LOG SO DATA IS UNDEFINED!
// console.log('Start')

// function loginUser(email, password) {
//     setTimeout(() => {
//         console.log("Now we have data to send back, I am to slow to send data back in time.")
//         return {userEmail: email}
//     }, 1500);
// }
// const user = loginUser('gustavo@gustavo.com', 123456)
// console.log(user)

// console.log('End')

// ****************************************************
// ****************************************************
// ****************************************************
// ****************************************************
// ****************************************************
// ****************************************************

// TO FIX THE CODE ABOVE AND MAKE IT WORK BY BEING ABLE TO GET THE DATA BACK IN TIME FOR CONSOLE.LOG TO SHOW THE DATA:

// console.log('Start')

// FUNCTION BELOW ACCEPTS AN EMAIL, PASSWORD, CALLBACK
// function loginUser(email, password, callback) {
//     setTimeout(() => {
//         console.log("Now we have data to send back, I am to slow to send data back in time.");
//         // CALL BACK DATA BELOW WILL SEND THE DATA BACK TO THE USER VARIABLE BEFORE THE SECONDS START FOR DELAY
//         callback( {userEmail: email }, "I am a callback!" );
//     }, 3000);
// }

// // GET VIDEOS AFTER GETTING USER DATA
// function getUserVideos(email, callback) {
//     setTimeout(() => {
//         callback( ["video1", "video2", "video3"] );
//     }, 2000)
// }

// // THE BELOW DOES AN ASYNC
// // EMAIL, PASSWORD, & A CALLBACK IS PASSED BELOW TO LOGINUSER
// const user = loginUser('gustavo@gustavo.com', 123456, (user) => { 
//     // THE BELOW CONSOLE.LOG WILL DISPLAY ALL THE USER DATA DUE TO THE CALLBACK, TAKES 3M.SECONDS
//     console.log(user);
//     // GETTING VIDEOS AFTER GETTING USER DATA, ACCEPTS EMAIL AND SENDS A CALLBACK
//     getUserVideos(user.userEmail, (videos) => {
//         // THE BELOW CONSOLE.LOG WILL DISPLAY ALL THE VIDEO DATA DUE TO THE CALLBACK, TAKES 2M.SECONDS
//         console.log(videos)
//     });
// });

// // THE BELOW CONSOLE.LOG WILL SHOW UNDEFINED, BECAUSE IT TAKES TIME FOR THE DATA TO RETURN
// console.log(user)

// console.log('End')

// ****************************************************
// ****************************************************
// ****************************************************
// ****************************************************
// ****************************************************
// ****************************************************

// CHECK PROMISE.APP FOR EXAMPLE, REFACTOR UPPER CODE WITH PROMISE INSTEAD OF CALLBACK:
// console.log('Start')

// function loginUser(email, password) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Now we have data to send back.");
//             resolve( {userEmail: email } );
//         }, 3000);
//     })
// }

// function getUserVideos(email) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve( ["video1", "video2", "video3"] );
//         }, 2000)
//     })
// }

// function videoDetails(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Title of the video");
//         }, 2000)
//     })
// }

// loginUser('Gustavo', 'password')
//     .then(user => getUserVideos(user.email))
//     .then(videos => videoDetails(videos[0]))
//     .then(detail => console.log(detail))

// console.log('End')

// ****************************************************
// ****************************************************
// ****************************************************
// ****************************************************
// ****************************************************
// ****************************************************

//SYNC
console.log('Start')

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Now we have data to send back.");
            resolve( {userEmail: email } );
        }, 3000);
    })
}

function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve( ["video1", "video2", "video3"] );
        }, 2000)
    })
}

function videoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Title of the video");
        }, 5000)
    })
}

async function displayUser() {
    try {
        const user = await loginUser('gustavo@gustavo.com', 'password');
        const videos = await getUserVideos(user.emails);
        // const details = await videoDetails(videos[0]);
        // TO TRIGGER THE ERROR: 
        const details = await videoDetails(videossss[0]);
        console.log(user);
        console.log(videos);
        console.log(details);

    } catch (err) {

        console.log("We could not get the videos!")

    }
}

displayUser();

console.log('End')


