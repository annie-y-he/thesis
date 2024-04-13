'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import s from './page.module.scss'
import MaximizeIcon from './assets/maximize.png'
import MinimizeIcon from './assets/minimize.png'
import ExitFullIcon from './assets/exitfull.png'
import CloseIcon from './assets/close.png'



// Define the interface for your component's props
interface WindowProps extends React.HTMLAttributes<HTMLElement> {
  icon?: any;
  children?: React.ReactNode;
  minWidth?: number;
  minHeight?: number;
  resizable?: boolean;
  winname: string;
  close: (windowName: string) => void
}

const Window: React.FC<WindowProps> = ({ icon, children, minWidth = 300, minHeight = 200, resizable = true, winname, close, style, ...rest }) => {
  const [size, setSize] = useState({ width: 600, height: 400 });
  const [pos, setPos] = useState({ left: 200, top: 200 });
  const [isFullScreen, setFullScreen] = useState(false);

  const [isCoarsePointer, setIsCoarsePointer] = useState(false);

  useEffect(() => {
    setIsCoarsePointer(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  let startSize = { width: 0, height: 0 };
  let startPos = { left: 0, top: 0 };
  let startMouse = { left: 0, top: 0 };

  const onDragStart = (event: React.MouseEvent) => {
    event.preventDefault();

    if (isFullScreen) {
      return;
    }

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

  return !isCoarsePointer ? (
    <div
      {...rest}
      style={{
        ...style,
        width: isFullScreen ? window.innerWidth : size.width,
        height: isFullScreen ? window.innerHeight : size.height,
        position: 'absolute',
        left: isFullScreen ? 0 : pos.left,
        top: isFullScreen ? 0 : pos.top,
      }}
    >
      <div className={s.handle} onMouseDown={(e) => onDragStart(e)}>
        <div>
          <Image src={icon} width={0} height={20} alt="icon" />
        </div>
        <div>
          <div onClick={() => close(winname)}>
            <Image src={MinimizeIcon} width={0} height={10} alt="icon" />
          </div>
          <div onClick={(e) => {e.stopPropagation(); setFullScreen(!isFullScreen)}}>
            <Image src={isFullScreen ? ExitFullIcon : MaximizeIcon} width={0} height={10} alt="icon" />
          </div>
          <div onClick={() => close(winname)}>
            <Image src={CloseIcon} width={0} height={10} alt="icon" />
          </div>
        </div>
      </div>
      {children}
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
  ) : (
  <div {...rest} style={style}>
    <div className={s.handle} onMouseDown={(e) => onDragStart(e)}>
      <div>
        <Image src={icon} width={0} height={20} alt="icon" />
      </div>
      <div>
        <div onClick={() => close(winname)}>
          <Image src={CloseIcon} width={0} height={10} alt="icon" />
        </div>
      </div>
    </div>
    {children}
  </div>);
};

export default Window;


