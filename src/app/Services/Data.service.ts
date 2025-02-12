import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root' 
})
export class DataService {

    private apiUrl = 'https://jsonplaceholder.typicode.com';

    constructor(private http: HttpClient) { } 

    getPosts(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/posts`);
      }
    
      getPostById(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/posts/${id}`);
      }
}
