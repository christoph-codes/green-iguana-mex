import { FC } from 'react';
import styles from './Loader.module.scss';

export type TLoaderProps = {
	className?: string;
};

const Loader: FC<TLoaderProps> = ({ className }) => (
	<span className={`${styles.Loader} ${className}`}>
		<span />
		<span />
		<span />
	</span>
);

export default Loader;
