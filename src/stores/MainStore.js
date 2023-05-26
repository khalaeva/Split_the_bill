import {defineStore} from 'pinia'

export const useMainStore = defineStore('MainStore', {
    state: () => ({
        friends: [],
        products: [],
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
                price: ''
            })
            console.log(this.products)
        },
        deleteInputProd(index) {
            this.products.splice(index, 1)
        }
    }
})