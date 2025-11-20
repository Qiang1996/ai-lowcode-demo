import { init, plugins, workspace } from '@alilc/lowcode-engine';
import ComponentPanePlugin from '@alilc/lowcode-plugin-components-pane';

import pageResourceType from './resource/resource-type';
import './global.scss'
import PageManagerPlugin from './plugins/plugin-page-manager';
import WorkspaceEmptyComponent from './plugins/plugin-workspace-empty';

(async function initLowCodeEngine() {
  workspace.registerResourceType(pageResourceType);
//   await plugins.register(ComponentPanePlugin);
//   await plugins.register(DesignerInitPlugin);
  await workspace.plugins.register(PageManagerPlugin);

  await workspace.plugins.register(WorkspaceEmptyComponent);

  await init(document.getElementById('designer')!, {
    locale: 'zh-CN',
    enableWorkspaceMode: true,
    enableAutoOpenFirstWindow: false,
  });
})();

