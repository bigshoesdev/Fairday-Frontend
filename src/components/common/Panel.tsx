import { PropsWithChildren } from 'react';

interface PanelProps {
  classStyle: string;
}

const Panel: React.FC<PropsWithChildren<PanelProps>> = ({ children, classStyle }) => {
  return (
    <div className={classStyle}>
      {children}
    </div>
  );
};

export default Panel;
