
export class ImageService {
    constructor() { }
    getImage(imageName: String): String {
        return "https://image.tmdb.org/t/p/w220_and_h330_face/" + 
        imageName;
    }
}