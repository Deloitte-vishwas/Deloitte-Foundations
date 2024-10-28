class User {
    constructor(uname, email) {
        this.uname = uname;
        this.email = email;
    }

    greet(){
        console.log(`Hello, my name is ${this.uname}`);
    }
}

const u1 = new User("Vishwas", "vishwas@cloudthat.com");
u1.greet();

const u2 = new User("Neelesh","neelesh@deloitte.com");
u2.greet();