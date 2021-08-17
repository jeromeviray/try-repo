import { intersection } from 'lodash';
import Roles from 'src/router/config';

// function isArrayWithLength(arr) {
// 	return (Array.isArray(arr) && arr.length)
// }

// function GetAllowedRoutes(routes) {
// 	// const credentials = useSelector((state) => state.userResponse.credentials);
// 	const roles = [Roles.ADMIN];

// 	return routes.filter(({ permission }) => {
// 		if (!permission) return true;
// 		else if (!isArrayWithLength(permission)) return true;
// 		else return intersection(permission, roles).length;
// 	})
// }


const Routings = {
	isArrayWithLength(arr) {
		return (Array.isArray(arr) && arr.length)
	},

	getAllowedRoutes(routes) {
		// const credentials = useSelector((state) => state.userResponse.credentials);
		const roles = [Roles.CUSTOMER];

		return routes.filter(({ permission }) => {
			if (!permission) return true;
			else if (!this.isArrayWithLength(permission)) return true;
			else return intersection(permission, roles).length;
		})
	}
}
export default Routings


