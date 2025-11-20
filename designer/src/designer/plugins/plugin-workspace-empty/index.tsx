import React from 'react';
import { IPublicModelPluginContext } from '@alilc/lowcode-types';

// export default function WorkspaceEmptyComponent() {
//   return (
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
//       <div style={{ color: '#333', fontSize: 14 }}>
//         单击添加页面
//       </div>
//     </div>
//   );
// }

const WorkspaceEmptyComponent = (ctx: IPublicModelPluginContext) => {
  return {
    init() {
        ctx.config.set('workspaceEmptyComponent', () => (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
              <div style={{ color: '#333', fontSize: 24 }}>
                请打开左侧页面管理面板添加页面
              </div>
            </div>
          ));
    }
  }
}

WorkspaceEmptyComponent.pluginName = 'WorkspaceEmptyComponent';
export default WorkspaceEmptyComponent;
