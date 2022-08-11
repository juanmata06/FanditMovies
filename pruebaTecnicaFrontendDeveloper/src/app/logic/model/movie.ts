export class Movie {
    adult: boolean = false;
    backdrop_path: String = "";
    genres: Array<any> = [];
    id: number = -1;
    original_language: String = "";
    original_title: String = "";
    overview: String = "";
    popularity: number = -1;
    poster_path: String = "";
    release_date: Date = new Date();
    title: String = "";
    video: boolean = false;
    vote_average: number = -1;
    vote_count: number = -1;
    status: String = "";
    budget: number = -1;
    revenue: number = -1;



    constructor
        (
            adult: boolean = false, backdrop_path: String = "",
            genres: Array<any> = [], id: number = -1,
            original_language: String = "", original_title: String = "",
            overview: String = "", popularity: number = -1,
            poster_path: String = "", release_date: Date = new Date(),
            title: String = "", video: boolean = false,
            vote_average: number = -1, vote_count: number = -1,
            status: String = "", budget: number = -1,
            revenue: number = -1
        ) {
        this.adult = adult;
        this.backdrop_path = backdrop_path;
        this.genres = genres;
        this.id = id;
        this.original_language = original_language;
        this.original_title = original_title;
        this.overview = overview;
        this.popularity = popularity;
        this.poster_path = poster_path;
        this.release_date = release_date;
        this.title = title;
        this.video = video;
        this.vote_average = vote_average;
        this.vote_count = vote_count;
        this.status = status;
        this.budget = budget;
        this.revenue = revenue;
    }
}