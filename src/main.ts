import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// 부모 모듈을 가지며 AppModule 이 그것이다. 
// 브라우저에서 실행되면 파일은 index.html 을 호출한다. 
// Index.html 파일은 내부적으로 main.ts 를 참조하여 부모 모듈을 호출한다. 
// AppModule 가 호출되면 app.module.ts 를 호출하고, AppComponent 를 호출하며 이는 bootstrap: [AppComponent] 를 기반으로 호출한다. 
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
