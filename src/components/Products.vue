<template>
    <div class="main">
        <div class="main-add_friend">
            <button 
                @click="mainStore.addInputProd" 
                type="button" 
                class="btn btn-light main-add_friend-btn">
                Добавить продукт
            </button>
        </div>
        <ul 
            class="list-group"
            v-for="(product, index) in mainStore.products">
            <li class="list-group-item" style="margin-bottom: 10px">
                <div class="input-group mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-basket3" viewBox="0 0 16 16">
                        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
                    </svg>
                    <input type="text" class="form-control input-name" placeholder="Название" v-model="product.name">
                    <input type="text" class="form-control" placeholder="Цена" v-model="product.price">
                    <button @click="mainStore.deleteInputProd(index)" class="delete_btn">Удалить</button>
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

const mainStore = useMainStore();
</script>

<style lang="scss" scoped>
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