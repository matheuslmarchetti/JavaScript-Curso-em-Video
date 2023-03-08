let friend = {
    name:"Matheus", 
    genero:"Male", 
    age: 25,
    weight: 100,
    fatten(w=0) {
        console.log("Fed up");
        this.weight += w
    }
};
friend.fatten(2);
console.log(`${friend.name} weighs ${friend.weight}Kg.`);