import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { globalVars } from "src/app/logic/global/globals";

@Injectable({
    providedIn: "root"
})
export class MoviesService {
    constructor(private conexHttp: HttpClient) { }
    getNowPlayingMovies(page: number): Observable<any> {
        return this.conexHttp.get(
            "/3/movie/now_playing?api_key=" + globalVars.apiKey + "&page=" + page,
            {
                headers: new HttpHeaders(
                    { 'Content-Type': 'application/json' })
            }
        );
    }

    getMovieDetails(id: number): Observable<any> {
        return this.conexHttp.get(
            "/3/movie/" + id + "?api_key=" + globalVars.apiKey,
            {
                headers: new HttpHeaders(
                    { 'Content-Type': 'application/json' })
            }
        );
    }

    getCastByMovieId(id: number) {
        return this.conexHttp.get(
            "/3/movie/" + id + "/credits?api_key=" + globalVars.apiKey,
            {
                headers: new HttpHeaders(
                    { 'Content-Type': 'application/json' })
            }
        );
    }

    getTotalPages(){
        return this.conexHttp.get(
            "/3/movie/now_playing?api_key=" + globalVars.apiKey,
            {
                headers: new HttpHeaders(
                    { 'Content-Type': 'application/json' })
            }
        );
    }
}