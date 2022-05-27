export class Product{
    private _id:number;
    private _name:string;
    private _type:string;
    private _price:number;


    constructor(id: number, name: string, type: string, price: number, ) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._price = price;

    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

  }