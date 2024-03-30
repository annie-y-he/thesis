import s from './page.module.scss'
import Image from 'next/image'

interface FileProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string;
  src: any;
}

const Icon: React.FC<FileProps> = ({ children, src }) => {
  return (
    <div className={s.icon}>
      <Image src={src} width={0} height={0} alt="icon" />
      <span>{children}</span>
    </div>
  );
};

export default Icon;