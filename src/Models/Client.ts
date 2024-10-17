class Client {
    private id: Number;
    private name: string;
    private email: string;
    private phone: string;

    constructor( id: Number,name: string,email: string,phone: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    
    public get getName() : string {
        return this.name;
    }

    
    public get getEmail() : string {
        return this.email;
    }
    
    
    public get getPhone() : string {
        return this.phone;
    }

    
    public get getId() : Number {
        return this.id;
    }
    
    
    public set setName(newName : string) {
        this.name = newName;
    }
    
}  

export  {Client}