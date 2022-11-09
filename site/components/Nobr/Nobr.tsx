import { PropsWithChildren, ReactNode } from 'react';
import styles from './Nobr.module.scss';

export interface INobrProps {
	className: string | string[];
	children: ReactNode;
}

const Nobr = ({ children, className }: PropsWithChildren<any>) => (
	<span className={`${styles.Nobr} ${className}`}>{children}</span>
);

export default Nobr;
