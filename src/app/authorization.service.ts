import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { tap, shareReplay, mergeMap } from 'rxjs/operators';

const BASE_PATH = 'http://localhost:8080/userKS';

@Injectable()
export class AuthorizationsService {

    currentUser$: Observable<User>;

    constructor(private http: HttpClient) { }

    public authorization(login: string, password: string) {
        const userRequest = this.http.get(`${BASE_PATH}/authorization/${login}/${password}`).pipe(shareReplay(1));

        this.currentUser$ = userRequest.pipe(
            mergeMap(id => this.getUser(`${id}`)),
            shareReplay(3)
        );

        return userRequest;
    }

    public registration(login: string, password: string) {
        const userRequest = this.http.get(`${BASE_PATH}/registration/${login}/${password}`);

        this.currentUser$ = userRequest.pipe(
            mergeMap(id => this.getUser(`${id}`)),
            shareReplay(3)
        );

        return userRequest;
    }

    public getUser(id: string) {
        return this.http.get<User>(`${BASE_PATH}/${id}`);
    }

    public changeData(user: User) {
        return this.http.put<User>(`${BASE_PATH}`,user);
    }

    public deleteUser(id: number){
        return this.http.delete<User[]>(`${BASE_PATH}/${id}`);
    }

    public getUsers() {
        return this.http.get<User[]>(`${BASE_PATH}`);
    }
}
