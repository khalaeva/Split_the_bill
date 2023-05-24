<template>
    <div class="main">
        <div class="main-add_friend">
            <button 
                @click="addInput" 
                type="button" 
                class="btn btn-light main-add_friend-btn">
                Добавить человека
            </button>
        </div>
        <ul 
            class="list-group"
            v-for="(friend, index) in friends.length">
            <li class="list-group-item" style="margin-bottom: 10px">
                <div class="input-group" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                    <input type="text" class="form-control" v-model="friends[index]">
                    <button @click="deleteInput(index)" class="delete_btn">Удалить {{ index }}</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useMainStore } from '../stores/MainStore'
import { ref } from 'vue'


const mainStore = useMainStore();
const friends = ref([])


function addInput() {
    friends.value.push('')
}
function deleteInput(index) {
    console.log(index)
    console.log(friends.value)
    friends.value.splice(index, 1)
}
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
.bi-person-circle{
    color: #B3A394;
    margin: 5px;
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