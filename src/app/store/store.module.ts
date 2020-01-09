import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user/user.effects';
import { reducers } from './store.index';
import { UserService } from '@cedu/services/user.service';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      },
    }),
    EffectsModule.forRoot([
      UserEffects
    ])
  ],
  providers: [
    UserService
  ],
  exports: []
})
export class AppStoreModule { }
