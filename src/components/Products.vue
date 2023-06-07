<template>
    <div class="main">
        <div class="main-add_friend">
            <button 
                @click="mainStore.addInputProd()" 
                type="button" 
                class="btn btn-light main-add_friend-btn"
                >Добавить продукт
            </button>
        </div>
        <ul 
            class="list-group"
            v-for="(product, indexProd) in mainStore.products"
            >
            <li class="list-group-item" style="margin-bottom: 10px">
                <div class="input-group mb-3" style="margin: 5px 0 15px 0 !important">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-basket3" viewBox="0 0 16 16">
                        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
                    </svg>
                    <input type="text" class="form-control input-name" placeholder="Название" v-model="product.name">
                    <input type="number" class="form-control" placeholder="Цена" v-model="product.price">
                    <button @click="mainStore.deleteInputProd(indexProd)" class="delete_btn">Удалить</button>
                </div>
                <div class="select">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-wallet-fill" viewBox="0 0 16 16" preserveAspectRatio="none">
                        <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z"/>
                        <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z"/>
                    </svg>
                    <select class="form-select form-control" v-model="mainStore.products[indexProd].payPerson">
                        <option 
                            v-for="friend in mainStore.friends" 
                            :value="friend"
                            >
                            {{ friend }}
                        </option>
                    </select>
                </div>
                <div class="array-friends">
                    <div 
                        class="card array-friends-card" 
                        @click="mainStore.addAllEatPersons(indexProd)" 
                        :style="[mainStore.friends.length === mainStore.products[indexProd].eatPersons.length ? 'background-color: #102542; color: #FFFFFF;' : '']"
                        >
                            <img class="card-img-top image-person" :src="`https://icotar.com/initials/∞.svg?bg=FFFFFF&fg=000000`" alt="Card image cap">
                            <div class="card-body array-friends-card-body">
                            <span class="card-text">Все</span>
                            </div>
                    </div>
                    <label 
                        class="custom-checkbox" 
                        v-for="(friend, index) in mainStore.friends" 
                        >
                        <input 
                            type="checkbox" 
                            :value="friend" 
                            v-model="mainStore.products[indexProd].eatPersons"
                            >
                        <div class="card array-friends-card">
                            <img class="card-img-top image-person" :src="`https://icotar.com/initials/${mainStore.friends[index]}.svg?bg=FFFFFF&fg=000000`" alt="Card image cap">
                            <div class="card-body array-friends-card-body">
                                <span>{{ friend }}</span>
                            </div>
                        </div>  
                    </label>
                </div>
            </li>
        </ul>
        <RouterLink to="/bills">
            <button
                @click="mainStore.getResult();"
                type="button" 
                class="btn btn-light main-add_friend-btn"
                v-show="mainStore.products.length">
                Рассчитать   
            </button>
        </RouterLink>
    </div>
</template>

<script setup>
import { useMainStore } from '../stores/MainStore'

const mainStore = useMainStore();
</script>

<style lang="scss" scoped>
.custom-checkbox>input {
    position: absolute;
    z-index: -1;
    opacity: 0;
}
.custom-checkbox>input:checked + .array-friends-card{
    background-color: #102542;
    color: #FFFFFF;
}
.bi-wallet-fill{
    color: #B3A394;
    margin: 5px 16px 5px 11px !important;
}
.select{
    display: flex;
    width: 50%;
    margin-bottom: 15px;
}
.main {
    padding: 20px;
    border: 1px solid #CDD7D6;
    border-radius: 10px;
    background-color: #CDD7D6;
    width: 70%;
    min-width: 900px;
    margin: auto;
    margin-top: 50px;
    &-add_friend{
        display: grid;
        &-btn{
            height: 50px;
            background-color: #B3A394;
            border: #B3A394;
            color: #FFFFFF;
            border-radius: 10px;
            margin: 10px auto 20px auto;
            &:active{
                background-color: #FFFFFF;
                border: #B3A394;
                color: #B3A394;
            }
        }
    }
}
.bi-basket3{
    color: #B3A394;
    margin: 5px;
    margin-right: 15px;
}
.array-friends{
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    margin-bottom: 10px;
    &-card{
        background-color: #CDD7D6;
        min-width: auto;
        height: 90px;  
        margin-right: 10px;
        &-body{
            padding: 0 5px 0 5px;
            margin: 0 20px 0 20px;
        }
    }
}
.image-person{
    height: 45px;
    width: 45px;
    margin: 5px auto;
    border-radius: 100% !important;
}
.form-control{
    border-color: #B3A394;
    &:focus{
        border-color: #B3A394;
        box-shadow: 0 0 0 0.1rem #B3A394;
    }
}
.input-name{
    border-radius: 5px 0 0 5px !important;
}
.delete_btn{
    background-color: #B3A394;
    border: #B3A394;
    color: #FFFFFF;
    border-radius: 5px;
    margin-left: 5px;
    &:active{
        background-color: #FFFFFF;
        border: #B3A394;
        color: #B3A394;
    }
}
</style>