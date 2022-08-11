import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { globalVars } from "src/app/logic/global/globals";

@Injectable({
    providedIn: "root"
})
export class MoviesService {
    constructor(private conexHttp: HttpClient) { }
    getAllContacts(): Observable<any> {
        return this.conexHttp.get(
            "/3/movie/now_playing?api_key=" + globalVars.apiKey,
            {
                headers: new HttpHeaders(
                    { 'Content-Type': 'application/json' })
            }
        );
    }
}