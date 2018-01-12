<template>
    <div class="ribbon-menu">
        <menu-component
            v-for="({ menuItems, title }, index) in menus"
            :key="index"
            :title="title"
            :menuItems="menuItems"
        />
    </div>
</template>

<script>
import Menu from '@/components/Menu';

export default {
    name: 'ribbon-menu',
    components: {
        MenuComponent: Menu,
    },
    props: ['menus'],
};
</script>

<style scoped>
    div.ribbon-menu {
        background-color: gray;
        box-sizing: border-box;
        height: 60px;
        padding: 4px;
        position: relative;
        overflow: visible;
        text-align: left;
    }
</style>

