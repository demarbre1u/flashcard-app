import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageManager {
    addCard(card) {
        let cards = this.getCards()

        cards.push(card)

        window.localStorage.setItem('cards', JSON.stringify(cards))
    }
    
    getCard(index) {
	    return this.getCards()[index]
    }

	deleteCard(index) {
		let newCards = this.getCards()
		newCards.splice(index, 1)
		
		window.localStorage.setItem('cards', JSON.stringify(newCards) )
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