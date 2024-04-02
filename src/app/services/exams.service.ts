import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http' 
import { Observable, catchError, map, of, throwError } from 'rxjs';

const API = new Map<number, string> ([
  [1, "three-law.json"],
  [2, "force.json"],
])

const API_LESSON = new Map<number, string> ([
  [1, "three-law.txt"],
  [2, "force.txt"],
])

@Injectable({
  providedIn: 'root'
})
export class ExamsService {
  getExams(id: number): Observable<any[]> {
    return this.http.get<any[]>(`./assets/data/exams/` + API.get(Number(id)))
  }

  getLesson(id: number) {
    return this.http.get(`./assets/data/lesson/` + API_LESSON.get(Number(id)), {responseType: 'text'})
  }

  
  getPractic(id: number) {
    return this.http.get(`./assets/data/practic/` + API.get(Number(id)))
  }
  
  getManipulate(id: number) {
    if (this.fileExists(`./assets/data/manipulate/` + API_LESSON.get(Number(id)))) {
      console.log('File exists.');
      return this.http.get(`./assets/data/manipulate/` + API_LESSON.get(Number(id)), {responseType: 'text'})
    } else {
      return this.http.get(`./assets/data/error.filePath.txt`, {responseType: 'text'})
    }
  }

  fileExists(filePath: string): Observable<boolean> {
    return this.http.head(filePath, { observe: 'response' }).pipe(
      map(response => response.ok), // Kiểm tra xem yêu cầu có thành công không
      catchError(error => of(false)) // Xử lý lỗi, trả về false nếu có lỗi xảy ra
    );
  }

  constructor(
    private http: HttpClient
  ) { }
}
