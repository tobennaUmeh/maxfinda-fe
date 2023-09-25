import { PathRouteProps } from 'react-router-dom';

export interface RouteInterface extends PathRouteProps {
	component: React.LazyExoticComponent<React.FC>;
	subRoutes?: RouteInterface[];
	hasSidebar?: boolean;
	authenticated?: boolean;
	user_role?: string[];
	dismissible?: boolean;
	opaque?: boolean;
}
