import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import assets from '../../service/assets.json';

const DesignerInitPlugin = (ctx: IPublicModelPluginContext) => {
  return {
    async init() {
      const { material, project } = ctx;

      await material.setAssets(assets);

      await project.importSchema({
        version: '1.0.0',
        componentsMap: material.componentsMap as any,
        componentsTree: [{
            componentName: 'Page',
            fileName: '/',
        }],
      })
    }
  }
};

DesignerInitPlugin.pluginName = 'DesignerInitPlugin';

export default DesignerInitPlugin;