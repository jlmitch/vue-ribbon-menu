<template>
  <page :menus="menus">
    <div>Account Page</div>
  </page>
</template>

<script>
  import Page from '@/components/Page';

  export default {
    name: 'Example',
    components: { Page },
    props: ['menus'],
  };
</script>
