<template>
    <div class="bills">
        <h1 class="bills-text">
            Результаты
        </h1>
        <div class="form_toggle">
            <div class="form_toggle-item item-1">
                <input 
                    id="fid-1" 
                    type="radio" 
                    name="radio" 
                    :value="false" 
                    v-model="check" 
                    checked
                >
                <label for="fid-1">Кто - кому</label>
            </div>
            <div class="form_toggle-item item-2">
                <input 
                    id="fid-2" 
                    type="radio" 
                    name="radio" 
                    :value="true" 
                    v-model="check"
                >
                <label for="fid-2">Кому - кто</label>
            </div>
        </div>
        <ul v-show="!check"
            class="list-group"
            v-for="(person, index) in mainStore.who">
            <li class="list-group-item" style="margin-bottom: 10px">
                <div class="input-group">
                    <h5 style="color: #102542">Пользователь {{ index }} должен</h5>
                    <p v-if="Object.entries(person).length === 0">Никому не должен!</p>
                    <div v-else>
                        <p v-for="(sum, name) in person">{{ name }} - {{ sum }}</p>
                    </div>
                </div>
            </li>
        </ul>
        <ul v-show="check"
            class="list-group"
            v-for="(person, index) in mainStore.whom"
        >
            <li class="list-group-item" style="margin-bottom: 10px">
                <div class="input-group">
                    <h5 style="color: #102542">Пользователю {{ index }} должны</h5>
                    <p v-if="Object.entries(person).length === 0">Никому не должен!</p>
                    <div v-else>
                        <p v-for="(sum, name) in person">{{ name }} - {{ sum }}</p>
                    </div>
                </div>
            </li>
        </ul>
        <RouterLink to="/">
            <button class="btn btn-light main-add_friend-btn">
                На главную   
            </button>
        </RouterLink>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useMainStore } from '../stores/MainStore'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const mainStore = useMainStore();
const check = ref()

onMounted (() => {
    if (mainStore.friends.length === 0 || mainStore.products.length === 0) {
        router.push({ name: 'home' })
    }
})
</script>

<style lang="scss" scoped>
.btn-light{
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
.input-group{
    display: block;
    text-align: center;
}
.form_toggle {
	display: flex;
    width: 80%;
    margin: auto;
    margin-bottom: 10px;
}
.form_toggle-item input[type=radio] {
	display: none;
}
.form_toggle-item label {
    text-align: center;
    width: 100%;
	display: inline-block;
	padding: 0px 15px;   
	line-height: 40px;    
	border: 1px solid #B3A394;
	cursor: pointer;
	user-select: none;   
}
.item-1{
    width: 50%;
}
.item-2{
    width: 50%;
}
.form_toggle .item-1 label {
	border-radius: 6px 0 0 6px;
    background: #FFFFFF;
}
.form_toggle .item-2 label {
	border-radius: 0 6px 6px 0;
	border-right: 1px solid #B3A394;
    background: #FFFFFF;
}
 
/* Checked */
.form_toggle .item-1 input[type=radio]:checked + label {
	background: #B3A394;
    color: #FFFFFF;
}
.form_toggle .item-2 input[type=radio]:checked + label {
	background: #B3A394;
    color: #FFFFFF;
}
.bills {
    &-text{
        background-color: #FFFFFF;
        border-radius: 10px;
        color: #B3A394;
        text-align: center;
        padding-bottom: 10px;
        margin-bottom: 10px;
    }
}
</style>