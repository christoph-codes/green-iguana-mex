import { createContext, ReactNode, useState, useContext, FC } from 'react';
import SideNav from '../components/SideNav';

export interface ISideNavContext {
	isOpen: boolean;
	toggleSideNav: () => void;
}
export type TSideNavProps = {
	children?: ReactNode;
};

export const SideNavContext = createContext<ISideNavContext>({
	isOpen: false,
	toggleSideNav: () => {},
});

const SideNavProvider: FC<TSideNavProps> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleSideNav = () => setIsOpen(!isOpen);
	return (
		<SideNavContext.Provider value={{ isOpen, toggleSideNav }}>
			{children}
			<SideNav size={40} isOpen={isOpen} toggleSideNav={toggleSideNav} />
		</SideNavContext.Provider>
	);
};

export const useSideNav = () => useContext(SideNavContext);

export default SideNavProvider;
