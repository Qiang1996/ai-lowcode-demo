import React from 'react';
import { CloseCircleFilled } from '@ant-design/icons';
import { IPublicModelResource } from '@alilc/lowcode-types';


export default function PageSelector({
	selectedId,
  resourceList,
  onSelectPage,
	onDeletePage,
}: {
  selectedId: string | null;
  resourceList: IPublicModelResource[];
  onSelectPage: (id: string) => void;
	onDeletePage: (id: string) => void;
}) {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
      {resourceList.map((item, index) => {
        return (
					<div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 6 }}>
						<div style={{ color: '#333', fontSize: 14 }}>{index +1}</div>
						<div
							style={{
								width: 128,
								height: 72,
								borderRadius: 6,
								backgroundColor: '#f0f0f0',
								textAlign: 'center',
								lineHeight: '72px',
								border: selectedId === item.id ? '2px solid #108cee' : 'none'
							}}
							onClick={() => onSelectPage(item.id!)}
						>
							{item.id}
						</div>
						<CloseCircleFilled style={{ fontSize: 14, color: '#666', cursor: 'pointer' }} onClick={() => onDeletePage(item.id!)} />
					</div>
				)
			})}
		</div>
  );
}