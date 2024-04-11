import s from './page.module.scss'
import Image from 'next/image'
import { minidenticon } from 'minidenticons'

interface FileProps extends React.HTMLAttributes<HTMLElement> {
  children: string;
  src?: any;
}

const Icon: React.FC<FileProps> = ({ children, src, className, ...rest }) => {
  return (
    <div {...rest} className={className + ' ' + s.icon}>
      { src ? <Image src={src} width={0} height={0} alt="icon" /> : <div dangerouslySetInnerHTML={{ __html: minidenticon(children) }} />}
      <span>{children}</span>
    </div>
  );
};

export default Icon;