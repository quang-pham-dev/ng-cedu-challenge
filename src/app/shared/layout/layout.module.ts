import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './layout.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SignInComponent } from 'src/app/routes/auth/pages/sign-in/sign-in.component';
import { ContainerComponent } from './components/container/container.component';
@NgModule({
    declarations: [
        NavbarComponent,
        SidebarComponent,
        LayoutComponent,
        LoadingComponent,
        SignInComponent,
        ContainerComponent
    ],
    providers: [
    ],
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule
    ],
    exports: [
        // Modules
        CommonModule,
        FlexLayoutModule,

        // Components
        NavbarComponent,
        SidebarComponent,
        LayoutComponent,
        SignInComponent,
        LoadingComponent
    ]
})

export class AppSharedLayoutModule {
}
