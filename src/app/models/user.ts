class OldUser{
    //private _id: number;
    //* with readonly we can make a property kinda private
    public readonly id: number;
    public name: string;
    public crew: string;

    //* with readnonly, we no longer need the get id(which is less efficient)
    /*
    get id(): number{
        return this._id;
    }*/

    //! this is kinda long
    constructor(id: number, name: string, crew: string){
        this.id = id;
        this.name = name;
        this.crew = crew;
    }
}

export class User{
    //* this instantiation does declaration + assignment in one shot
    constructor(
        public readonly id: number,
        public name: string,
        public crew: string,
        public hasDevilFruit: boolean,
        public bounty: number
    ){}
}