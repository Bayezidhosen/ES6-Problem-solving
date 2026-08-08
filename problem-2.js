// let findUserById = (users, id) => {
//     let expectedUser = users.find(user => {
//         return user.id === id;
//     });

//     return expectedUser;
// };

// let users = [
//     { id: 1, name: "Rafi" },
//     { id: 2, name: "Karim" },
//     { id: 3, name: "Utso" },
//     { id: 4, name: "Utso" },
// ];

// console.log(findUserById(users, 3));


const createLifeCounter = () => {
    let lives = 3;

    return () => {
        if (lives > 0) {
            lives--;
        }

        return lives;
    };
};

const rahimLifeUpdate = createLifeCounter();
const karimLifeUpdate = createLifeCounter();
const johnLifeUpdate = createLifeCounter();
const akashLifeUpdate = createLifeCounter();

console.log(rahimLifeUpdate());
console.log(rahimLifeUpdate());
console.log(rahimLifeUpdate());
console.log(rahimLifeUpdate());
console.log(rahimLifeUpdate());
console.log(rahimLifeUpdate());