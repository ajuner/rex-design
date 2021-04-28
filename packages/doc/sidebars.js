module.exports = {
  docs: [
    'index',
    {
      type: 'category',
      label: '组件',
      collapsed: false,
      items: [
        {
          type: 'category',
          collapsed: false,
          label: '布局',
          items: ['box', 'flex', 'grid', 'group', 'text'],
        },
        {
          type: 'category',
          collapsed: false,
          label: '排版',
          items: [],
        },
        {
          type: 'category',
          collapsed: false,
          label: '导航',
          items: ['breadcrumb', 'pagination', 'steps', 'menu', 'tabs', 'timeline'],
        },
        {
          type: 'category',
          collapsed: false,
          label: '通用',
          items: ['action-list', 'badge', 'button', 'link', 'loading', 'icon', 'image', 'progress', 'notice', 'tree'],
        },
        {
          type: 'category',
          collapsed: false,
          label: '表单',
          items: [
            'checkbox',
            'date-picker',
            'time-picker',
            'file-picker',
            'input',
            'number-input',
            'radio',
            'range',
            'switch',
            'textarea',
            'select',
            'tree-select',
            'search',
          ],
        },
        {
          type: 'category',
          collapsed: false,
          label: '浮层',
          items: ['overlay', 'popup', 'tooltip', 'dialog', 'drawer', 'position', 'toaster'],
        },
        {
          type: 'category',
          collapsed: false,
          label: '表格',
          items: ['base-table', 'pro-table', 'cross-table', 'cross-tree-table'],
        },
      ],
    },
    {
      type: 'category',
      label: '@rexd/xform',
      collapsed: false,
      items: ['xform/usage', 'xform/advanced', 'xform/biz', 'xform/core', 'xform/api'],
    },
  ],
};
