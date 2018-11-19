import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageManager {
    addCardToCollection(id, card) {
        let collections = this.getCollections()

        collections[id].cards.push(card)

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
                    {question: 'Simple', answer: 'Basic', color: 'black'},
                ]
            }, 
            {
                name: 'English', 
                cards: [
                    {question: 'Yes', answer: 'oui', color: 'blue'},
                    {question: 'No', answer: 'non', color: 'blue'},
                ]
            },
            {
                name: 'Japanese', 
                cards: [
                    {question: 'はい', answer: 'oui', color: 'red'},
                    {question: 'いいえ', answer: 'non', color: 'red'},
                ]
            },
            {
                name: 'Emptyccnjsncksdnjkcsnjkcnsdjkcnsjkcnkdsncjksncjkndsjkcnjskdnck', 
                cards: []
            }
        ]

        window.localStorage.setItem('collections', JSON.stringify(collections))
    }
}