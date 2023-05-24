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

        addInputProd() {
            this.products.push({
                name: '',
                price: ''
            })
        },
        deleteInputProd(index) {
            this.products.splice(index, 1)
        }
    }
})