<template>
  <div class="ribbon-menu-container">
    <div class="ribbon-menu">
        <menu-component
            v-for="({ menuItems, title }, index) in menus"
            :key="index"
            :title="title"
            :menuItems="menuItems"
        />
    </div>
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
    .ribbon-menu-container {
      position: relative;
      height: 60px;
    }

    div.ribbon-menu {
        background-color: gray;
        box-sizing: border-box;
        padding: 4px;
        position: absolute;
        overflow: visible;
        text-align: left;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
</style>
