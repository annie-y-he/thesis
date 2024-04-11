'use client';

import React, { useState, useEffect } from 'react';

// Define the interface for your component's props
interface WindowProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  minWidth?: number;
  minHeight?: number;
  resizable?: boolean;
}

const Window: React.FC<WindowProps> = ({ children, minWidth = 600, minHeight = 400, resizable = true, style, ...rest }) => {
  const [size, setSize] = useState({ width: minWidth, height: minHeight });
  const [pos, setPos] = useState({ left: 200, top: 200 });

  const [isCoarsePointer, setIsCoarsePointer] = useState(false);

  useEffect(() => {
    setIsCoarsePointer(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  let startSize = { width: 0, height: 0 };
  let startPos = { left: 0, top: 0 };
  let startMouse = { left: 0, top: 0 };

  const onDragStart = (event: React.MouseEvent) => {
    event.preventDefault();

    startPos = pos;
    startMouse = { left: event.clientX, top: event.clientY };

    const onMouseMove = (moveEvent: MouseEvent) => {
      const dx = moveEvent.clientX - startMouse.left;
      const dy = moveEvent.clientY - startMouse.top;

      setPos({ left: startPos.left + dx, top: startPos.top + dy });
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const onResizeStart = (direction: string, event: React.MouseEvent) => {
    event.preventDefault();
    
    startPos = pos;
    startSize = size;
    startMouse = { left: event.clientX, top: event.clientY };

    const onMouseMove = (moveEvent: MouseEvent) => {
      const dx = moveEvent.clientX - startMouse.left;
      const dy = moveEvent.clientY - startMouse.top;

      let newWidth = startSize.width;
      let newHeight = startSize.height;
      let newLeft = startPos.left;
      let newTop = startPos.top;

      if (direction.includes('e')) newWidth = startSize.width + dx;
      if (direction.includes('s')) newHeight = startSize.height + dy;
      if (direction.includes('w')) {
        newWidth = startSize.width - dx;
        newLeft = startPos.left + dx;
      }
      if (direction.includes('n')) {
        newHeight = startSize.height - dy;
        newTop = startPos.top + dy;
      }

      setSize({ width: Math.max(newWidth, minWidth), height: Math.max(newHeight, minHeight) });
      setPos({ left: Math.min(newLeft, startPos.left + (startSize.width - minWidth)), top: Math.min(newTop, startPos.top + (startSize.height - minHeight)) });
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const enhancedChildren = React.Children.map(children, (child) => {
    // Ensure we're dealing with a valid element before attempting to clone it
    if (React.isValidElement(child)) {
      if (child.props.className?.includes('handle')) {
        return React.cloneElement(child as React.ReactElement, {
          onMouseDown: (e: React.MouseEvent) => onDragStart(e),
        });
      }
    }
    return child;
  });

  return !isCoarsePointer ? (
    <div
      {...rest}
      style={{
        ...style,
        width: size.width,
        height: size.height,
        position: 'absolute',
        left: pos.left,
        top: pos.top,
      }}
    >
      {enhancedChildren}
      {resizable && ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'].map((direction) => (
        <div
          key={direction}
          style={{
            position: 'absolute',
            width: direction === 'n' || direction === 's' ? 'calc( 100% - 10px )' : '10px',
            height: direction === 'e' || direction === 'w' ? 'calc( 100% - 10px )' : '10px',
            cursor: `${direction}-resize`,
            top: direction.includes('n') ? '0' : direction.includes('s') ? '100%' : '50%',
            left: direction.includes('w') ? '0' : direction.includes('e') ? '100%' : '50%',
            transform: 'translate(-50%, -50%)',
          }}
          onMouseDown={(e) => onResizeStart(direction, e)}
        />
      ))}
    </div>
  ) : (<div {...rest} style={style}>{children}</div>);
};

export default Window;


