<template>
    <div class="bills">
        <h1 class="bills-text">
            Результаты
        </h1>
        <div class="checkboxes">
            <button class="checkboxes-btn">Кто - кому</button>
            <button class="checkboxes-btn">Кому - кто</button>
        </div>
        <ul 
            class="list-group"
            v-for="(friend, index) in mainStore.friends.length">
            <li class="list-group-item" style="margin-bottom: 10px">
                <div class="input-group" >
                    <img v-if="mainStore.friends[index]" class="image-person" :src="`https://icotar.com/initials/${mainStore.friends[index]}.svg?bg=B3A394`" alt="img" />
                    <img v-else class="image-person" :src="'https://icotar.com/initials/~.svg?bg=B3A394'" alt="img" />
                    <input type="text" class="form-control" v-model="mainStore.friends[index]">
                    <button @click="mainStore.deleteInputFriend(index)" class="delete_btn">Удалить</button>
                </div>
            </li>
        </ul>
        <button
            type="button" 
            class="btn btn-light bills-add_friend-btn"
            @click="mainStore.getResult()">
            Далее   
        </button>
    </div>
</template>

<script setup>
import { useMainStore } from '../stores/MainStore'

const mainStore = useMainStore();
</script>

<style lang="scss" scoped>
.checkboxes-btn{
    width: 50%;
    height: 35px;
    color: #FFFFFF;
    background-color: #B3A394;
    border: 0;
    border-radius: 10px;    
    margin-bottom: 10px;
}
.bills {
    padding: 20px;
    border: 1px solid #CDD7D6;
    border-radius: 10px;
    background-color: #CDD7D6;
    width: 70%;
    min-width: 900px;
    margin: auto;
    margin-top: 50px;
    &-text{
        background-color: #FFFFFF;
        border-radius: 10px;
        color: #B3A394;
        text-align: center;
        padding-bottom: 10px;
        margin-bottom: 10px;
    }
}
.image-person{
    height: 45px;
    width: 45px;
    border-radius: 100% !important;
    margin-right: 15px;
}
.form-control{
    border-color: #B3A394;
    border-radius: 5px 0 0 5px !important;
    &:focus{
        border-color: #B3A394;
        box-shadow: 0 0 0 0.1rem #B3A394;
    }
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