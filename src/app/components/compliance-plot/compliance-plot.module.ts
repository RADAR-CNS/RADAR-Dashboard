import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { CompliancePlotComponent } from './compliance-plot.component'
import { ChartsModule } from '../charts/charts.module'
import { ComplianceService } from '../../shared/store/compliance/compliance.service'

@NgModule({
  imports: [CommonModule, ChartsModule],
  declarations: [CompliancePlotComponent],
  providers: [ComplianceService],
  exports: [CompliancePlotComponent]
})
export class CompliancePlotModule {}
