import { useEffect } from "react";
import {
	Box,
	Table,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	Paper,
	Typography,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getVaccines } from "features/vaccines/vaccinesSlice";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";

export function Vaccines() {
	const { status, data } = useSelector((state) => state.vaccines);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getVaccines());
	}, [dispatch]);

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
				justifyContent: "center",
				alignItems: "center",
				marginTop: "30px",
			}}
		>
			<TableContainer>
				<Table size="small">
					<TableHead>
						<TableRow>
							<TableCell>
								<Typography sx={{ fontWeight: 900 }}>Nome</Typography>
							</TableCell>
							<TableCell>Fabricante</TableCell>
							<TableCell>País</TableCell>
							<TableCell>quantidade_minimas_doses</TableCell>
							<TableCell>percentual_eficacia_comprovada</TableCell>
							<TableCell>preco_venda_por_dose</TableCell>
							<TableCell>Ações</TableCell>
						</TableRow>
						{data &&
							data.map((item) => (
								<TableRow>
									<TableCell>{item.nome_vacina}</TableCell>
									<TableCell>{item.nome_fabricante}</TableCell>
									<TableCell>{item.pais_origem}</TableCell>
									<TableCell>{item.quantidade_minimas_doses}</TableCell>
									<TableCell>{item.percentual_eficacia_comprovada}</TableCell>
									<TableCell>{item.preco_venda_por_dose}</TableCell>
									<TableCell>
										<FiEdit />
										<RiDeleteBin2Line />
									</TableCell>
								</TableRow>
							))}
					</TableHead>
				</Table>
			</TableContainer>
		</Box>
	);
}
