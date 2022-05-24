import { Children, FC, ReactElement } from 'react';
import styles from './Row.module.scss';

export type TDesktopColumns =
	| 1
	| 2
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 11
	| 12
	| 'auto';
export type TMobileColumns = 1 | 2 | 3 | 4 | 5 | 6 | 'auto';

export type TColumnSize = {
	xs?: TMobileColumns[];
	sm?: TDesktopColumns[];
	md?: TDesktopColumns[];
	lg?: TDesktopColumns[];
};

export type IColProps = {
	children?: ReactElement[];
	className?: string[];
	xs?: TMobileColumns;
	sm?: TDesktopColumns;
	md?: TDesktopColumns;
	lg?: TDesktopColumns;
};

export type IRowProps = {
	children: ReactElement<IColProps>[];
	className?: string[];
	columns?: TColumnSize;
};

const Col: FC<IColProps> = ({ children, className = '', xs, sm, md, lg }) => {
	const generateClasses = `${sm ? `🔥col-sm-${sm}` : ''} ${
		md ? `🔥col-md-${md}` : ''
	} ${lg ? `🔥col-lg-${lg}` : ''} ${xs ? `🔥col-${xs}` : ''}`;
	return (
		<div className={`${styles.Col} ${className} ${generateClasses}`}>
			{children}
		</div>
	);
};

const Row: FC<IRowProps> = ({ children, className, columns }) => {
	const renderedColumns = (): any =>
		// Map over the children and add the column sizes relative to the columns prop
		Children.toArray(children).map((child: any, index) => {
			console.log('columns:', columns);
			return (
				<Col
					key={index}
					xs={columns?.xs && columns.xs[index]}
					sm={columns?.sm && columns.sm[index]}
					md={columns?.md && columns.md[index]}
					lg={columns?.lg && columns.lg[index]}
				>
					{child}
				</Col>
			);
		});
	return (
		<div className={`${styles.Row} ${className}`}>{renderedColumns()}</div>
	);
};
export default Row;
