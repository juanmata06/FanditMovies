export class Actor {
    name: String = "";
    backdrop_path: String = "";
    character:String = "";

    constructor
        (
            name: String = "", backdrop_path: String = "", character:String = ""
        ) {
        this.name = name;
        this.backdrop_path = backdrop_path;
        this.character = character;
    }
}