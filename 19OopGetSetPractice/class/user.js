class User {
    constructor(argId, argName, argTown) {
        this.id = argId;
        this.name = argName;
        this.town = argTown;
    }
}

// geteris
get id() {
    return
}

//tureti id, name, town
const u1 = new User(123, 'James', 'Vilnius');
u1.id = 500;
console.log('u1 ===', u1);