<template>
    <div class="main">
        <div class="main-add_friend">
            <button 
                @click="mainStore.addInputProd(); 
                isActiveArray.push(Array(mainStore.friends.length).fill(false));
                AllIsActive.push(false)" 
                type="button" 
                class="btn btn-light main-add_friend-btn">
                Добавить продукт
            </button>
        </div>
        <ul 
            class="list-group"
            v-for="(product, indexProd) in mainStore.products">
            <li class="list-group-item" style="margin-bottom: 10px">
                <div class="input-group mb-3" style="margin: 5px 0 15px 0 !important">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-basket3" viewBox="0 0 16 16">
                        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
                    </svg>
                    <input type="text" class="form-control input-name" placeholder="Название" v-model="product.name">
                    <input type="text" class="form-control" placeholder="Цена" v-model="product.price">
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
                        :class="[AllIsActive[indexProd] ? 'card array-friends-card active' : 'card array-friends-card']" 
                        @click="mainStore.addAllEatPersons(indexProd); 
                        AllIsActive[indexProd] = !AllIsActive[indexProd];
                        AllIsActive[indexProd] ? isActiveArray[indexProd] = isActiveArray[indexProd].map(item => item = true) : isActiveArray[indexProd] = isActiveArray[indexProd].map(item => item = false);
                        console.log(isActiveArray[indexProd])">
                        <img class="card-img-top image-person" :src="`https://icotar.com/initials/∞.svg?bg=FFFFFF&fg=000000`" alt="Card image cap">
                        <div class="card-body array-friends-card-body">
                          <span :class="[AllIsActive[indexProd] ? 'card-text active-text' : 'card-text']">Все</span>
                        </div>
                    </div>
                    <div 
                        :class="[isActiveArray[indexProd][index] ? 'card array-friends-card active' : 'card array-friends-card']" 
                        v-for="(friend, index) in mainStore.friends" 
                        @click="mainStore.addEatPerson(friend, indexProd); 
                        isActiveArray[indexProd][index] = !isActiveArray[indexProd][index]">
                        <img class="card-img-top image-person" :src="`https://icotar.com/initials/${mainStore.friends[index]}.svg?bg=FFFFFF&fg=000000`" alt="Card image cap">
                        <div class="card-body array-friends-card-body">
                          <span 
                          :class="[isActiveArray[indexProd][index] ? 'card-text active-text' : 'card-text']"
                          >{{ friend }}</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <RouterLink to="/bills">
            <button
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
import { ref } from 'vue';

const mainStore = useMainStore();
const isActiveArray = ref([]);
const AllIsActive = ref([])
</script>

<style lang="scss" scoped>
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
.active{
    background-color: #102542;
    &-text{
        color: #FFFFFF;
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