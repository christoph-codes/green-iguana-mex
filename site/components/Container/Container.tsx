import { FC, ReactNode } from 'react';
import styles from './Container.module.scss';

export type IContainerProps = {
	children: ReactNode;
	className?: string[];
	rest?: any[];
};

const Container: FC<IContainerProps> = ({
	children,
	className = '',
	...rest
}) => (
	<div className={`${styles.Container} ${className}`} {...rest}>
		{children}
	</div>
);
export default Container;
