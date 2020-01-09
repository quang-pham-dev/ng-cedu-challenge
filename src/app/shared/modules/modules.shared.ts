import { NgModule } from '@angular/core';
import { AmplifyAngularModule, AmplifyService, AmplifyModules } from 'aws-amplify-angular';
import Auth from '@aws-amplify/auth';
@NgModule({
    declarations: [],
    imports: [],
    providers: [
        {
            provide: AmplifyService,
            useFactory:  () => {
              return AmplifyModules({
                Auth
              });
            }
          }
    ],
    exports: [
        AmplifyAngularModule
    ],
    bootstrap: []
})
export class AppSharedModulesModule { }
