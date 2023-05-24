<template>
    <div class="main">
        <div class="main-add_friend">
            <button type="button" class="btn btn-light main-add_friend-btn">Добавить человека</button>
        </div>
        <ol class="list-group list-group-numbered">
            <li class="list-group-item">A list item</li>
            <li class="list-group-item">A list item</li>
            <li class="list-group-item">A list item</li>
        </ol>
    </div>
</template>

<script setup>

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
            border-radius: 10px;
            margin: 10px auto 10px auto;
        }
    }
}
</style>