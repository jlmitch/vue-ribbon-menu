<template>
    <li class="menu-item" on-click="onClick">
        <img class="icon" :src="iconPath" />
        {{text}}
    </li>
</template>

<script>
export default {
    name: 'menu-item',
    props: ['iconPath', 'onClick', 'text'],
};
</script>

<style scoped>
li.menu-item {
    box-sizing: border-box;
    height: 20px;
    margin: 4px 0;
    padding: 5px;
    position: relative;
    text-indent: 30px;
}

.icon {
    position: absolute;
    left: 10px; top: 4px;
}
</style>
