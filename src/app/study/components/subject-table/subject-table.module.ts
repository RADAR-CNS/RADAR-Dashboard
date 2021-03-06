import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatPaginatorIntl } from '@angular/material'

import { MaterialModule } from '../../../material'
import { SimpleBarComponent } from '../simple-bar/simple-bar.component'
import { SubjectDetailComponent } from '../subject-detail/subject-detail.component'
import { SubjectPaginatorIntl } from './subject-paginator-intl'
import { SubjectTableComponent } from './subject-table.component'

const COMPONENTS = [
  SubjectTableComponent,
  SubjectDetailComponent,
  SimpleBarComponent
]

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [{ provide: MatPaginatorIntl, useClass: SubjectPaginatorIntl }]
})
export class SubjectTableModule {}
