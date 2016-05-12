import {Component} from '@angular/core';
import { HeroesComponent} from './heroes/heroes.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular 2 App</h1>
    <toh-heroes></toh-heroes>`,
    directives: [HeroesComponent]
})
export class AppComponent { }
