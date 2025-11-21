import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { IPublicEnumTransformStage, IPublicResourceList, IPublicModelPluginContext, IPublicModelResource } from '@alilc/lowcode-types';
import { workspace } from '@alilc/lowcode-engine';
import PageSelector from './page-selector';

export default function Pane({ pluginContext }: {
  pluginContext: IPublicModelPluginContext
}) {
  const workspace = pluginContext.workspace;
  const project = pluginContext.project;
  const [resourceList, setResourceList] = useState<IPublicModelResource[]>(workspace.resourceList);
  const [selectedId, setSelectedId] = useState<string | null>(resourceList[0]?.id || null);

  // 设置 workspace 资源列表
  const setWorkspaceResourceList = (list: IPublicResourceList) => {
    workspace.setResourceList(list);
    setResourceList(workspace.resourceList);
  };

  // 选中页面
  const selectPage = (id: string) => {
    workspace.openEditorWindow(workspace.resourceList.filter(item => item.id === id)[0]);
    setSelectedId(id);
  };

  const closeEditorWindow = (resource: IPublicModelResource) => {
    workspace.removeEditorWindow(resource);
  };

  const addPage = async () => {
    const newResource = {
      resourceName: 'page',
      id: 'page_' + Date.now(),
      options: {}
    };

    // 插入新页面到选中页面后面
    const newResourceList = resourceList.reduce((list, item) => {
      list.push({ resourceName: 'page', id: item.id, options: item.options });
      if (item.id === selectedId) {
        list.push(newResource);
      }
      return list;
    }, [] as IPublicResourceList);

    // 如果没有选选中页面，直接插到最后
    if (!selectedId) {
      newResourceList.push(newResource);
    }

    // 更新 workspace 资源列表
    setWorkspaceResourceList(newResourceList);

    // 选中新页面
    selectPage(newResource.id);

  }

  const deletePage = (id: string) => {
    const selectedIndex = resourceList.findIndex(item => item.id === selectedId);
    const deletedResource = resourceList.find(item => item.id === id);
    const newResourceList = resourceList.filter(item => item.id !== id).map(item => ({ resourceName: 'page', id: item.id, options: item.options }));

    setWorkspaceResourceList(newResourceList);

    closeEditorWindow(deletedResource!);

    // 如果删除了选中页面，选中下一个页面
    if (newResourceList.length > 0 && id === selectedId) {
      // 默认自动选中下一个页面，下一个页面的index就是被删除的index。如果删除的是最后一个页面，选中上一个页面
      const index = Math.min(selectedIndex, newResourceList.length - 1) ;
      selectPage(newResourceList[index]?.id || '');
    }
  };

  return (
    <div style={{ padding: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
      <Button style={{ width: 144 }} size="large" icon={<PlusOutlined />} onClick={addPage}>插入页面</Button>

      <PageSelector selectedId={selectedId} resourceList={resourceList} onSelectPage={selectPage} onDeletePage={deletePage} />
    </div>
  );
}