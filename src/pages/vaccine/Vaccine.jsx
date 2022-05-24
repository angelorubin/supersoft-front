import { useState } from "react";
import { Box, Typography, Link, Backdrop } from "@mui/material";
import { Icon } from "components/icon/Icon";
import { BiExit } from "react-icons/bi";
import { Vaccine as VaccineFeature } from "features/vaccine/Vaccine";
import { CircularProgress } from "@mui/material";

export function Vaccine() {
	const [open, setOpen] = useState(false);

	const handleClose = (event, reason) => {
		setOpen(false);
	};

	return <VaccineFeature />;
}
