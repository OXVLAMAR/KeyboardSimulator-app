import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

import { Exercise } from '@app/model/exercise';
import { Dificulty } from './models/dificulty';
import { KeyboardArea } from './models/keyboardArea';

const BASE_PATH = 'http://localhost:8080/exercise';
const BASE_PATH_DIFF = 'http://localhost:8080/dificulty_lvl';
const BASE_PATH_AREA = 'http://localhost:8080/keyboard_area';

@Injectable()
export class ExerciseService {

    constructor(private http: HttpClient) { }

    public getExerciseList(id_level: number): Observable<Exercise[]> {
        return this.http.get<Exercise[]>(`${BASE_PATH}/${id_level}`);
    }

    public getExercise(id_exercise: number): Observable<Exercise> {
        return this.http.get<Exercise>(`${BASE_PATH}/getExercise/${id_exercise}`);
    }

    public getDiff(id: number) {
        return this.http.get<Dificulty>(`${BASE_PATH_DIFF}/${id}`);
    }

    public getAllExercise(){
        return this.http.get<Exercise[]>(`${BASE_PATH}`);
    }

    public deleteExercise(id:number){
        return this.http.delete<Exercise[]>(`${BASE_PATH}/${id}`);
    }

    public generateExercise(diff_id: number){
        return this.http.post<Exercise>(`${BASE_PATH}/generate`,diff_id);
    }

    public saveExercise(exercise: Exercise){
        return this.http.put<Exercise>(`${BASE_PATH}`,exercise);
    }

    public newExercise(textF: string, textE: string, diff_id: number){
        if (textE == ""){textE =" "}
        return this.http.get<Exercise>(`${BASE_PATH}/newExercise/${textF}/${textE}/${diff_id}`);
    }

    public getKeyboardArea(diff_id: number){
        return this.http.get<KeyboardArea[]>(`${BASE_PATH}/getExercise/${diff_id}`);
    }

    public setKeyboardArea(diff_id: number, keyboardArea : KeyboardArea[]){
        return this.http.get<KeyboardArea[]>(`${BASE_PATH}/${diff_id}/${keyboardArea}`);
    }

    public getAllKeyboardArea(){
        return this.http.get<KeyboardArea[]>(`${BASE_PATH_AREA}`);
    }
}
