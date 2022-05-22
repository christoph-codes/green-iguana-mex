import { FC, ReactNode } from 'react';
import styles from './Container.module.scss';

export type IContainerProps = {
	children: ReactNode;
	className: string[];
};

const Container: FC<IContainerProps> = ({ children, className = '' }) => (
	<div className={`${styles.Container} ${className}`}>{children}</div>
);
export default Container;
