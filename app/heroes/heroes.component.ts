import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';
import { HeroComponent} from './hero1.component';
import { HeroService} from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'toh-heroes',
    styleUrls: ['heroes.component.css'],
    templateUrl: 'heroes.component.html',
    directives:[HeroComponent],
    providers:[HeroService]
})
export class HeroesComponent implements OnInit {
    //constructor() { }
    heroes : Hero[];
    
    selectedHero : Hero;
    
    constructor( private heroService: HeroService){}
    ngOnInit() { 
        this.heroes = this.heroService.getHeroes();
        //this.heroes= [
         //   {"id":1, "name":"AA"},
          //  {"id":2, "name":"BB"}
        //];
    }
    
    onSelect(hero : Hero){
        console.log('hero clicked');
        this.selectedHero = hero;
    }

}