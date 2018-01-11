<template>
    <div>
        <ribbon-menu :menus="menus" />
    </div>
</template>

<script>
import Menu from '@/components/Menu';
import RibbonMenu from '@/components/RibbonMenu';

const menus = [{
    title: 'Tagging',
    menuItems: [{
        iconPath: '/static/icon.gif',
        text: 'Tag Account',
    }],
}, {
    title: 'Trading',
    menuItems: [{
        iconPath: '/static/icon.gif',
        text: 'Generate Trades',
    }],
}, {
    title: 'Performance',
    menuItems: [{
        iconPath: '/static/icon.gif',
        text: 'Perf Update',
    }],
}, {
    title: 'Account Mgmt',
    menuItems: [
        { text: 'Update Metrics', iconPath: '/static/icon.gif' },
        { text: 'Bulk Cash', iconPath: '/static/icon.gif' },
        { text: 'Bulk Change Product', iconPath: '/static/icon.gif' },
        { text: 'Bulk Change Model', iconPath: '/static/icon.gif' },
        { text: 'Bulk Approve', iconPath: '/static/icon.gif' },
        { text: 'Bulk Reject', iconPath: '/static/icon.gif' },
        { text: 'Bulk Replace IVs', iconPath: '/static/icon.gif' },
        { text: 'Set Purge Status', iconPath: '/static/icon.gif' },
        { text: 'Create', iconPath: '/static/icon.gif' },
        { text: 'Change Management', iconPath: '/static/icon.gif' },
    ],
}];

export default {
    name: 'Example',
    components: {
        Menu,
        RibbonMenu,
    },
    data: () => ({ menus }),
};
</script>
