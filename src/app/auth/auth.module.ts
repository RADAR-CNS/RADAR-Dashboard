import { CommonModule } from '@angular/common'
import { ModuleWithProviders, NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { MaterialModule } from '../material'
import { routes } from './auth.routing'
import { LoginFormComponent } from './component/login-form/login-form.component'
import { LoginPageComponent } from './containers/login-page/login-page.component'
import { AuthEffects } from './effects/auth.effects'
import * as fromAuth from './reducers'
import { AuthService } from './services/auth.service'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', fromAuth.reducers),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [LoginPageComponent, LoginFormComponent]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [AuthService]
    }
  }
}
