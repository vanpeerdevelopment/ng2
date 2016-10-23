import {Injectable}   from '@angular/core';
import {Http, Headers}           from "@angular/http";
import 'rxjs/add/operator/toPromise';

import {Hero}           from "./hero";

@Injectable()
export class HeroService {

    private heroesUrl = 'app/heroes';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http:Http) {
    }

    getHero(id:number):Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    getHeroesSlowly():Promise<Hero[]> {
        return new Promise<Hero[]>(resolve => setTimeout(resolve, 2000))
            .then(() => this.getHeroes());
    }

    getHeroes():Promise<Hero[]> {
        return this.http
            .get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    update(hero:Hero):Promise<Hero> {
        return this.http
            .put(`${this.heroesUrl}/${hero.id}`, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        return this.http
            .delete(`${this.heroesUrl}/${id}`, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error:any):Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
