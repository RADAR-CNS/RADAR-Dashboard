import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { ENV } from '../../../environments/environment'
import { Study } from '../../shared/models/study.model'

@Injectable()
export class StudyService {
  constructor(private http: HttpClient) {}

  getById(name) {
    return this.http.get<Study>(`${ENV.API_URI}/projects/${name}`)
  }
}
