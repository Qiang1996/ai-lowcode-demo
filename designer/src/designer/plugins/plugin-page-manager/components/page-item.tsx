import React from 'react';

export default function PageItem({
  index,
  id,
  onClick,
}: {
  index: number;
  id: string;
  onClick: () => void;
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', }}>
      <div style={{ color: '#333', fontSize: 14, width: 16 }}>{index +1}</div>
      <div
        style={{
          width: 128,
          height: 72,
          borderRadius: 6,
          backgroundColor: '#f0f0f0',
          textAlign: 'center',
          lineHeight: '72px'
        }}
        onClick={onClick}
      >第{index + 1}页</div>
    </div>
    
  );
}