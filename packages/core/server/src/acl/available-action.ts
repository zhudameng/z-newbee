import { AvailableActionOptions } from '@znewbee/acl';

const availableActions: {
  [key: string]: AvailableActionOptions;
} = {
  create: {
    displayName: '{{t("Add new")}}',
    type: 'new-data',
    onNewRecord: true,
    allowConfigureFields: true,
  },
  // import: {
  //   displayName: '{{t("Import")}}',
  //   type: 'new-data',
  //   scope: false,
  // },
  // export: {
  //   displayName: '{{t("Export")}}',
  //   type: 'old-data',
  //   allowConfigureFields: true,
  // },
  view: {
    displayName: '{{t("View")}}',
    type: 'old-data',
    aliases: ['get', 'list'],
    allowConfigureFields: true,
  },
  update: {
    displayName: '{{t("Edit")}}',
    type: 'old-data',
    aliases: ['update', 'move'],
    allowConfigureFields: true,
  },
  destroy: {
    displayName: '{{t("Delete")}}',
    type: 'old-data',
  },
  importOrder: {
    displayName: '导入订单',
    type: 'old-data',
  },
  importExpress: {
    displayName: '导入快递信息',
    type: 'old-data',
  },
  batchSend: {
    displayName: '批量发货',
    type: 'old-data',
  },
  noticeSend: {
    displayName: '通知发货',
    type: 'old-data',
  },
  export: {
    displayName: '导出',
    type: 'old-data',
  },
  batchPublish: {
    displayName: '批量发布',
    type: 'old-data',
  },
};

export { availableActions };
