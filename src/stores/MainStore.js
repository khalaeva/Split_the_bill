import {defineStore} from 'pinia'

export const useMainStore = defineStore('MainStore', {
    state: () => ({
        friends: [],
        products: [],
        whoPay: []
    }),
    actions: {
        addInputFriend() {
            this.friends.push('')
        },
        deleteInputFriend(index) {
            this.friends.splice(index, 1)
        },
        setFriends() {
            this.friends.forEach(function(item, index, array) {
                if (item === '') {
                    array.splice(index, 1)
                }   
            });
            console.log(this.friends)
        },

        addInputProd() {
            this.products.push({
                name: '',
                price: '',
                payPerson: this.friends[0],
                eatPersons: [],
            })
        },
        deleteInputProd(index) {
            this.products.splice(index, 1)
        },

        addEatPerson(friend, index) {
            this.products[index].eatPersons.push(friend) //индекс не тот исправить
        }
    }
})