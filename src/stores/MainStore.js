import {defineStore} from 'pinia'

export const useMainStore = defineStore('MainStore', {
    state: () => ({
        friends: [],
        products: [],
        who: {},
        whom: {}
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
                eatPersons: []
            });
        },
        deleteInputProd(index) {
            this.products.splice(index, 1)
        },

        addAllEatPersons(index) {
            if (this.products[index].eatPersons.length === this.friends.length) {
                    this.products[index].eatPersons = []
            }
            else {
                this.products[index].eatPersons = this.friends
            }
        },

        getResult(){
            for (let i in this.friends) {
                this.who[this.friends[i]] = {}          //создаем хеш-таблицу, где ключи - имена друзей
            }
            for (let i in this.products) {
                const summ = this.products[i].price / this.products[i].eatPersons.length            //делим полную сумму продукта на "едаков"
                for (let j in this.products[i].eatPersons) {
                    this.who[this.products[i].eatPersons[j]][this.products[i].payPerson] = summ         //записываем под каждый ключ this.who объекты вида {имя_друга: долг_ему}
                }
            }
            for (let i in this.who){           //перебор по ключам this.who, пусть i = А
                for (let j in this.who[i]) {            //перебор всех друзей кому должен А, пусть j = B
                    for (let key in this.who[j]) {          //перебор всех друзей кому должен В
                        if (key === i) {           //проверка на условие "должен ли В отдать долг А"
                            if (this.who[i][j] > this.who[j][key]) {            // 1. если А должен В больше, чем В должен А 
                                this.who[i][j] = this.who[i][j] - this.who[j][key]
                                delete this.who[j][key]
                            }
                            else if (this.who[j][key] > this.who[i][j]) {           // 2. если В должен А больше, чем А должен В
                                this.who[j][key] = this.who[j][key] - this.who[i][j]
                                delete this.who[i][j]
                            }
                            else {        // 3. А и В должны друг другу одинаковую сумму
                                delete this.who[i][j]
                                delete this.who[j][key]
                            }
                        }
                    }
                }
                for (let n in this.who) {
                    if (i in this.who[n]) {
                        console.log(i, n, this.who[i], this.who[n][i])
                        if (i in this.whom) {
                            this.whom[i][n] = this.who[n][i]
                        } else {
                            this.whom[i] = {}
                            this.whom[i][n] = this.who[n][i]
                        }   
                    }
                }
            }
            console.log(this.who)
            console.log(this.whom)
        }
    }
})