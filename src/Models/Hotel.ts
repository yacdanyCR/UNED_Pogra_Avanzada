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
}

export {Hotel}