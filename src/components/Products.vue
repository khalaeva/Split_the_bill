<template>
    <div class="main">
        <div class="main-add_friend">
            <button 
                @click="mainStore.addInputProducts()" 
                type="button" 
                class="btn btn-light main-add_friend-btn"
            >
                Добавить продукт
            </button>
        </div>
        <ul 
            class="list-group"
            v-for="(product, indexProduct) in mainStore.products"
        >
            <li class="list-group-item" style="margin-bottom: 10px">
                <div class="input-group mb-3" style="margin: 5px 0 15px 0 !important">
                    <BasketIcon/>
                    <input 
                        type="text" 
                        class="form-control input-name" 
                        placeholder="Название" 
                        v-model="product.name"
                    >
                    <input 
                        type="number" 
                        class="form-control" 
                        placeholder="Цена" 
                        v-model="product.price"
                    >
                    <button @click="mainStore.deleteInputProducts(indexProduct)" class="delete_btn">Удалить</button>
                </div>
                <div class="select">
                    <WalletIcon/>
                    <select 
                        class="form-select form-control" 
                        v-model="mainStore.products[indexProduct].payPerson"
                    >
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
                        :class="{ active: isActive(indexProduct) }"
                        @click="mainStore.addAllEatPersons(indexProduct)" 
                    >
                            <img 
                                class="card-img-top image-person" 
                                :src="`https://icotar.com/initials/∞.svg?bg=FFFFFF&fg=000000`" 
                                alt="Card image cap"
                            >
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
                            v-model="mainStore.products[indexProduct].eatPersons"
                        >
                        <div class="card array-friends-card">
                            <img 
                                class="card-img-top image-person" 
                                :src="`https://icotar.com/initials/${mainStore.friends[index]}.svg?bg=FFFFFF&fg=000000`" 
                                alt="Card image cap"
                            >
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
                v-show="mainStore.products.length"
            >
                Рассчитать   
            </button>
        </RouterLink>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useMainStore } from '../stores/MainStore';
import BasketIcon from './Icons/BasketIcon.vue';
import WalletIcon from './Icons/WalletIcon.vue'

const router = useRouter()
const mainStore = useMainStore();
function isActive(id) {
    return mainStore.friends.length === mainStore.products[id].eatPersons.length
}

onMounted (() => {
    if (mainStore.friends.length === 0) {
        router.push({ name: 'home' })
    }
})
</script>

<style lang="scss" scoped>
.active {
    background-color: #102542 !important;
    color: #FFFFFF;
}
.custom-checkbox>input {
    position: absolute;
    z-index: -1;
    opacity: 0;
}
.custom-checkbox>input:checked + .array-friends-card{
    background-color: #102542;
    color: #FFFFFF;
}
.select{
    display: flex;
    width: 50%;
    margin-bottom: 15px;
}
.main {
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