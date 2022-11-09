import { ReactNode } from 'react';
import styles from './AnnouncementBar.module.scss';

export interface IAnnouncementBarProps {
	children?: ReactNode;
	className?: string;
}

const AnnouncementBar = ({ children, className }: IAnnouncementBarProps) => (
	<div className={`${styles.AnnouncementBar} ${className}`}>
		<h4>{children}</h4>
	</div>
);

export default AnnouncementBar;
