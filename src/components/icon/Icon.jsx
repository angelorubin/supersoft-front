import { IconContext } from "react-icons";

export const Icon = ({ children, value }) => {
	return (
		<IconContext.Provider value={{ ...value, ...value.style }}>
			<div>{children}</div>
		</IconContext.Provider>
	);
};
