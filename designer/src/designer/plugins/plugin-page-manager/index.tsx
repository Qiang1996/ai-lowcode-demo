import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { SnippetsOutlined } from '@ant-design/icons';

import Pane from './components/pane';

const PageManagerPlugin = (ctx: IPublicModelPluginContext) => {
  const { plugins, config } = ctx;

  return {
    async init() {
      ctx.skeleton.add({
        area: 'leftArea',
        props: {
          icon: <SnippetsOutlined style={{ fontSize: 20 }} />,
          description: '页面管理',
        },
        name: 'PageManager',
        type: 'PanelDock',
        content: Pane,
        contentProps: {
            pluginContext: ctx,
        },
        panelProps: {
          floatable: false,
          width: '200px',
          area: 'leftFixedArea',
        }
      })
    },
  };
};

PageManagerPlugin.pluginName = 'PageManagerPlugin';

export default PageManagerPlugin;