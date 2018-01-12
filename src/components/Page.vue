<template>
    <div class="page">
        <ribbon-menu :menus="menus" />
        <div class="page-contents">
            <slot />
        </div>
    </div>
</template>

<script>
import RibbonMenu from '@/components/RibbonMenu';

export default {
    name: 'page',
    components: { RibbonMenu },
    props: ['menus'],
}
</script>

<style scoped>
div.page-contents {
    padding: 15px;
}
</style>