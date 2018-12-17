import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ChangeTextDirective } from './change-text.directive';

@NgModule({
  // declaration 에서는 저장된 컴포넌트를 참조한다. 
  // AppComponent 는 기본 컴포넌트로 새로운 프로젝트가 초기화 되면 생성이 된다. 
  declarations: [
    AppComponent,
    NewCmpComponent,
    ChangeTextDirective
  ],
  // 이것은 위에서 보여준 임포트된 모듈이 들어간다. 
  // BrowserModule 은 임포트 파트에서 정의한 것으로 @angular/platform-browser 모듈이 들어간다.
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // 이것은 생성된 서비스를 참조한다.
  providers: [],
  // 이는 기본 생성된 컴포넌트를 참조한다. 
  bootstrap: [AppComponent]
})
export class AppModule { }
