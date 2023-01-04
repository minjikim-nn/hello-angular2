import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// indexP 파일을 받고 가장 먼저 실행 -> appModule 실행
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
