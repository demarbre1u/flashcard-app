import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageManager {
    addCard(card) {
        let cards = this.getCards()

        cards.push(card)

        window.localStorage.setItem('cards', JSON.stringify(cards))
    }

    getCards() {
        let data = window.localStorage.getItem('cards')

        if(data === null)
            return []
        else 
            return JSON.parse(data)
    }

    clearCards() {
        window.localStorage.removeItem('cards')
    }
}