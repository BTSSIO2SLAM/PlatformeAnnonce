import { Photo } from '../class/photo';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private photoUrl = 'http://localhost:59825/api/Photos'; // URL to web api

  constructor(private http: HttpClient) {}

  getPhotos() {
    return this.http
      .get<Photo[]>(this.photoUrl)
      .pipe(map(data => data), catchError(this.handleError));
  }

  getPhoto(id: number): Observable<Photo> {
    return this.getPhotos().pipe(
      map(Photos => Photos.find(photo => photo.Id === id))
    );
  }

  save(photo: Photo) {
    if (photo.Id) {
      return this.put(photo);
    }
    return this.post(photo);
  }

  getPhotoList(): Observable<any> {
    return this.http.get('http://localhost:59825/api/Photos');
  }

  // Add new Photo
  private post(photo: Photo) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<Photo>(this.photoUrl, Photo)
      .pipe(catchError(this.handleError));
  }

  // Update existing Photo
  private put(photo: Photo) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const url = `${this.photoUrl}/${photo.Id}`;
    return this.http.put<Photo>(url, photo).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
