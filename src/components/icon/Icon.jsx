import { Children } from "react";
import { IconContext } from "react-icons";

export const Icon = ({ children, value }) => {
	return (
		<IconContext.Provider value={{ ...value }}>
			<div>{children}</div>
		</IconContext.Provider>
	);
};
