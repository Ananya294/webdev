let data = "secret info";

class User {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data = ",data);
    }
}

class admin extends User {
    constructor(name,email) {
        super(name,email);
    }
    editData() {
        data = "some new data";
    }
}


let s1 = new User("ananaya","ananya@gmail.com");
let s2 = new User("ritika","ritik@gamil.com");
let admin1 = new admin("a1","a1@gmail.com");