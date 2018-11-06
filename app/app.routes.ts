import { RouterConfig } from '@angular/router';

import { RegisterComponent } from './components/register.component';
import { RootComponent } from './root.component';
import { TweetsComponent } from './components/tweets.component'

export const routes: RouterConfig = [
    { path: '', component: RootComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'tweets', component: TweetsComponent }
];