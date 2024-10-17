class Hotel{
    private id: number = 0;
    private name: string = "";
    private address: string = "";
    private zip: string = "";

    
    constructor(id:number,name:string,address:string,zip:string) {
        this.id = id;
        this.address = address;
        this.name = name;
        this.zip = zip;
    }

    
    public get getId() : number {
        return this.id
    }
    
    public get getname() : string {
        return this.name
    }
    public get getaddress() : string {
        return this.address
    }
    public get getZip() : string {
        return this.zip
    }
}

export {Hotel}