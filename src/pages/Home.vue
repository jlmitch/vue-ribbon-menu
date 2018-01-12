<template>
  <div>
    <ribbon-menu :menus="menus"/>
    <div>
      Home Page
    </div>
  </div>
</template>

<script>
  import Menu from '@/components/Menu';
  import RibbonMenu from '@/components/RibbonMenu';
  const menus = [{
    title: 'Tagging',
    menuItems: [{
      iconPath: '/static/icon.gif',
      text: 'Account',
      url: 'account',
    }],
  }, {
    title: 'Trading',
    menuItems: [{
      iconPath: '/static/icon.gif',
      text: 'Generate Trades',
      url: 'hello',
    }],
  }, {
    title: 'Performance',
    menuItems: [{
      iconPath: '/static/icon.gif',
      text: 'Perf Update',
      url: 'hello',
    }],
  }, {
    title: 'Account Mgmt',
    menuItems: [
      {text: 'Update Metrics', iconPath: '/static/icon.gif', url:'metrics'},
      {text: 'Bulk Cash', iconPath: '/static/icon.gif', url: 'cash'},
      {text: 'Bulk Change Product', iconPath: '/static/icon.gif', url: 'change'},
      {text: 'Bulk Change Model', iconPath: '/static/icon.gif', url: 'model'},
      {text: 'Bulk Approve', iconPath: '/static/icon.gif', url: 'approve'},
      {text: 'Bulk Reject', iconPath: '/static/icon.gif', url: 'reject'},
      {text: 'Bulk Replace IVs', iconPath: '/static/icon.gif', url: 'replace'},
      {text: 'Set Purge Status', iconPath: '/static/icon.gif', url: 'purge'},
      {text: 'Create', iconPath: '/static/icon.gif', url: 'create'},
      {text: 'Change Management', iconPath: '/static/icon.gif', url: 'change'},
    ],
  }];
  export default {
    name: 'Example',
    components: {
      Menu,
      RibbonMenu,
    },
    data: () => ({menus})
  };
</script>
