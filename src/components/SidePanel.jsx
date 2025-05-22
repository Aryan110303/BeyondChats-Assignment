import React, { useState, useEffect } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const SidePanel = ({ 
  defaultWidth = 300, 
  minWidth = 300, 
  maxWidth = 400, 
  children,
  position = 'left' // 'left' or 'right'
}) => {
  const [width, setWidth] = useState(defaultWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleStyles = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 1000,
    width: '1px',
    cursor: 'col-resize',
    backgroundColor: '#e9ecef',
    transition: 'background-color 0.2s',
  };

  const handle = position === 'left' ? (
    <div style={{ ...handleStyles, right: 0 }} className="custom-handle-e" />
  ) : (
    <div style={{ ...handleStyles, left: 0 }} className="custom-handle-w" />
  );

  const minConstraints = isMobile ? [window.innerWidth, height] : [position === 'left' ? minWidth = 240 : minWidth = 300, height];
  const maxConstraints = isMobile ? [window.innerWidth, height] : [maxWidth, height];
  const panelWidth = isMobile ? window.innerWidth : width;

  return (
    <ResizableBox
      width={panelWidth}
      height={height}
      axis="x"
      minConstraints={minConstraints}
      maxConstraints={maxConstraints}
      resizeHandles={[position === 'left' ? 'e' : 'w']}
      handle={handle}
      onResizeStop={(e, { size }) => {
        setWidth(size.width);
      }}
    >
      <div 
        style={{
          width: '100%',
          height: '100%',
          overflow: 'auto',
          background: '#f8f9fa',
          borderRight: position === 'left' ? '1px solid #e9ecef' : 'none',
          borderLeft: position === 'right' ? '1px solid #e9ecef' : 'none',
          boxSizing: 'border-box',
          padding: '1rem',
        }}
      >
        {children}
      </div>
    </ResizableBox>
  );
};

export default SidePanel;
