import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

    constructor() {}
    getHeroes(){
            return [
                { 'id': 11, 'name': 'Chewbacca' },
                { 'id': 12, 'name': 'Rey' },
                { 'id': 13, 'name': 'Finn (FN2187)' },
                { 'id': 14, 'name': 'Han Solo' },
                { 'id': 15, 'name': 'Leia Organa' }
                ];
          }

}