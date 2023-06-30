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
        setFriends() {
            this.friends = this.friends.filter(name => name.length > 0)
            return ((new Set(this.friends)).size !== this.friends.length)
        },

        addInputProducts() {
            this.products.push({
                name: '',
                price: null,
                payPerson: this.friends[0],
                eatPersons: []
            });
        },
        deleteInputProducts(index) {
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
                        this.who[this.products[i].eatPersons[j]][this.products[i].payPerson] = summ     //записываем под каждый ключ this.who объекты вида {имя_друга: долг_ему}
                }
            }
            for (let mainName in this.who){           //перебор по ключам this.who, пусть mainName = А
                for (let creditor in this.who[mainName]) {            //перебор всех друзей кому должен А, пусть creditor = B
                    for (let name in this.who[creditor]) {          //перебор всех друзей кому должен В
                        if (name === mainName) {           //проверка на условие "должен ли В отдать долг А"
                            if (this.who[mainName][creditor] > this.who[creditor][name]) {            // 1. если А должен В больше, чем В должен А 
                                this.who[mainName][creditor] = this.who[mainName][creditor] - this.who[creditor][name]
                                delete this.who[creditor][name]
                            }
                            else if (this.who[creditor][name] > this.who[mainName][creditor]) {           // 2. если В должен А больше, чем А должен В
                                this.who[creditor][name] = this.who[creditor][name] - this.who[mainName][creditor]
                                delete this.who[mainName][creditor]
                            }
                            else {        // 3. А и В должны друг другу одинаковую сумму
                                delete this.who[mainName][creditor]
                                delete this.who[creditor][name]
                            }
                        }
                    }
                }
                for (let n in this.who) { // Массив значений "Кому - кто"
                    if (mainName in this.who[n]) {
                        if (mainName in this.whom) {
                            this.whom[mainName][n] = this.who[n][mainName]
                        } else {
                            this.whom[mainName] = {}
                            this.whom[mainName][n] = this.who[n][mainName]
                        }   
                    }
                }
            }
        }
    }
})