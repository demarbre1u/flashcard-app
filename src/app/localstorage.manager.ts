import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageManager {
    addCardToCollection(id, card) {
        let collections = this.getCollections()

        collections[id].cards.push(card)

        window.localStorage.setItem('collections', JSON.stringify(collections))
    }

    getCardsFromCollection(id) {
        let collections = this.getCollections()

        let cards = collections[id].cards;

        return cards;
    }

    getCollectionName(id) {
        let collections = this.getCollections()

        return collections[id].name
    }

    deleteCardFromCollection(idCol, idCard) {
        let collections = this.getCollections()

        collections[idCol].cards.splice(idCard, 1)

        window.localStorage.setItem('collections', JSON.stringify(collections))
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

    getCollections() {
        let collections = window.localStorage.getItem('collections')

        if(collections === null)
            return []
        else
            return JSON.parse(collections)
    }

    resetStorage() {
        let collections =  [
            {
                name: 'Basic', 
                cards: [
                    {question: 'Simple', answer: 'Basic', color: '#2c3e50'},
                ]
            }, 
            {
                name: 'English', 
                cards: [
                    {question: 'Welcome', answer: 'Bienvenue', color: '#2980b9'},
                ]
            },
            {
                name: 'Japanese', 
                cards: [
                    {question: 'こんにちは', answer: 'Bonjour', color: '#c0392b'},
                ]
            },
        ]

        window.localStorage.setItem('collections', JSON.stringify(collections))
    }
}