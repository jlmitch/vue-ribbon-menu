<template>
  <div>
    <ribbon-menu :menus="menus"/>
    <div>
      Account Page
    </div>
  </div>
</template>

<script>
  import Menu from '@/components/Menu';
  import RibbonMenu from '@/components/RibbonMenu';

  export default {
    name: 'Example',
    components: {
      Menu,
      RibbonMenu,
    },
    props: ['menus'],
  };
</script>
