<template>
    <div class="main">
        <div class="main-add_friend">
            <button 
                @click="mainStore.addInputFriend()" 
                type="button" 
                class="btn btn-light main-add_friend-btn"
                >
                Добавить человека
            </button>
        </div>
        <ul 
            class="list-group"
            v-for="(friend, index) in mainStore.friends.length"
            >
            <li class="list-group-item" style="margin-bottom: 10px">
                <div class="input-group" >
                    <img 
                        v-if="mainStore.friends[index]" 
                        class="image-person" 
                        :src="`https://icotar.com/initials/${mainStore.friends[index]}.svg?bg=B3A394`" 
                        alt="img" 
                        />
                    <img 
                        v-else class="image-person" 
                        :src="'https://icotar.com/initials/~.svg?bg=B3A394'" 
                        alt="img" 
                        />
                    <input type="text" class="form-control" v-model="mainStore.friends[index]">
                    <button @click="mainStore.deleteInputFriend(index)" class="delete_btn">Удалить</button>
                </div>
            </li>
        </ul>
        <!-- <RouterLink to="/products"> -->
            <button
                type="button" 
                class="btn btn-light main-add_friend-btn"
                v-show="mainStore.friends.length"
                @click="ValidFriends()"
                >
                Перейти к продуктам   
            </button>
        <!-- </RouterLink> -->
    </div>
</template>

<script setup>
import { useMainStore } from '../stores/MainStore'

const mainStore = useMainStore();

function ValidFriends() {
    if (mainStore.setFriends()) {
        alert('Вы ввели имя друга несколько раз!')
    }
    else {
        if (mainStore.friends.length === 0) {
            alert('Вы никого не добавили')
        }
        else {
            this.$router.push({ name: 'products' })
        }
    }
}
</script>

<style lang="scss" scoped>
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