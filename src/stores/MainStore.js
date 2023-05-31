import {defineStore} from 'pinia'

export const useMainStore = defineStore('MainStore', {
    state: () => ({
        friends: ['a', 'b', 'c'],
        products: [
            {
                name: 'apple',
                price: 10,
                payPerson: 'a',
                eatPersons: ['c', 'b']
            },
            {
                name: 'orange',
                price: 20,
                payPerson: 'b',
                eatPersons: ['a', 'c']
            },
            {
                name: 'beer',
                price: 40,
                payPerson: 'c',
                eatPersons: ['a', 'b']
            }
        ],
        who: {}
    }),
    actions: {
        addInputFriend() {
            this.friends.push('')
        },
        deleteInputFriend(index) {
            this.friends.splice(index, 1)
        },
        setFriends() { // удаляем незаполненные поля
            this.friends.forEach(function(item, index, array) {
                if (item === '') {
                    array.splice(index, 1)
                }   
            });
        },

        addInputProd() {
            this.products.push({
                name: '',
                price: 0,
                payPerson: this.friends[0],
                eatPersons: [],
            })
        },
        deleteInputProd(index) {
            this.products.splice(index, 1)
        },

        addEatPerson(friend, index) {
            this.products[index].eatPersons.push(friend) 
        },
        addAllEatPersons(index) {
            this.products[index].eatPersons.push(this.friends) 
        },

        getResult(){
            for (let i in this.friends) {
                this.who[this.friends[i]] = {}
            }
            for (let i in this.products) {
                const summ = this.products[i].price / this.products[i].eatPersons.length //делим полную сумму продукта на едаков
                for (let j in this.products[i].eatPersons) {
                    this.who[this.products[i].eatPersons[j]][this.products[i].payPerson] = summ //считаем для каждого друга сколько кому он должен
                }
            }
            // for (let i in this.who){
            //     for (let j in this.who) {
            //         if (i === j) {
            //             graph[i][j] = 0
            //         }
            //     }
            // }
            // console.log(this.who)
        }
    }
})