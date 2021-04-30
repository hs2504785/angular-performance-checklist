import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChecklistModule } from './checklist/checklist.module';
import { CustomMaterialModule } from './custom-material.module';
import { ProjectsModule } from './projects/projects.module';
import { META_REDUCERS, ROOT_REDUCER } from './state/app.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-checklist' }),
    BrowserAnimationsModule,
    StoreModule.forRoot(ROOT_REDUCER, { metaReducers: META_REDUCERS }),
    ProjectsModule,
    ChecklistModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    AppRoutingModule,
    StoreRouterConnectingModule.forRoot(),
    CustomMaterialModule,
    FontAwesomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
