import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http' 
import { Observable, catchError, throwError } from 'rxjs';

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
  
  async getManipulate(id: number) {
    if (await this.checkFileExists(`./assets/data/manipulate/` + API_LESSON.get(Number(id))))
      return this.http.get(`./assets/data/manipulate/` + API_LESSON.get(Number(id)), {responseType: 'text'})
    return '<p>This is <strong>trusted</strong> HTML content.</p>'
  }
  async checkFileExists(filePath: string): Promise<boolean> {
    try {
      const response = await fetch(filePath);
      // Nếu mã trạng thái của response là 200, tức là file tồn tại
      return response.status === 200;
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error('Lỗi khi kiểm tra tập tin:', error);
      return false; // Giả sử file không tồn tại nếu có bất kỳ lỗi nào xảy ra
    }
  }

  constructor(
    private http: HttpClient
  ) { }
}
