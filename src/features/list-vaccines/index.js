import { useEffect, useState } from "react";
import {
	Box,
	Table,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	Typography,
	useTheme,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
	Divider,
	TextField,
	Input,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
	getVaccines,
	getVaccineById,
	editVaccine,
} from "features/list-vaccines/slice";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { Icon as CustomIcon } from "components/icon/Icon";

export function ListVaccines() {
	const theme = useTheme();
	const { vaccine, vaccines } = useSelector((state) => state.listVaccines);
	const dispatch = useDispatch();
	const [openEditDialog, setOpenEditDialog] = useState(false);

	useEffect(() => {
		dispatch(getVaccines());
	}, [dispatch]);

	const handleClickDelete = (e) => {
		const id = +e.target.id;
	};

	const handleClickEdit = (e) => {
		setOpenEditDialog(true);
		const id = e.currentTarget.id;
		console.log(+id);
		dispatch(getVaccineById(id));
	};

	const handleCloseEditDialog = () => {
		setOpenEditDialog(false);
	};

	const handleChange = (e) => {
		// console.log(e.target.name);
		const id = +e.target.id;
		const name = e.target.name;
		const value = e.target.value;
		dispatch(editVaccine({ id, name, value }));
	};

	const handleClose = () => {};

	return (
		<>
			{JSON.stringify(vaccine.data, null, 2)}
			<Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
				<DialogTitle>Editar Vacina</DialogTitle>
				<Divider />
				<DialogContent>
					<Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
						{vaccine.data.map((item) => (
							<>
								<TextField
									id={item.id}
									name="nome_vacina"
									size="small"
									placeholder="nome da vacina"
									onChange={handleChange}
									value={item.nome_vacina}
								/>
								<TextField
									id={item.id}
									name="nome_fabricante"
									size="small"
									placeholder="nome do fabricante"
									value={item.nome_fabricante}
									onChange={handleChange}
								/>
							</>
						))}
					</Box>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancelar</Button>
					<Button onClick={handleClose}>Salvar</Button>
				</DialogActions>
			</Dialog>

			{vaccines.data.length > 0 ? (
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "1rem",
						marginTop: "30px",
					}}
				>
					<Typography
						sx={{
							fontFamily: "Roboto",
							fontSize: "22px",
							fontWeight: 700,
							lineHeight: "26px",
							letterSpacing: "0em",
						}}
					>
						Vacinas cadastradas
					</Typography>

					<TableContainer>
						<Table size="small">
							<TableHead>
								<TableRow>
									<TableCell>
										<Typography sx={{ fontWeight: 900 }}>Nome</Typography>
									</TableCell>
									<TableCell>
										<Typography sx={{ fontWeight: 900 }}>Fabricante</Typography>
									</TableCell>
									<TableCell>
										<Typography sx={{ fontWeight: 900 }}>País</Typography>
									</TableCell>
									<TableCell>
										<Typography sx={{ fontWeight: 900 }}>
											Qtd Mínimas Doses
										</Typography>
									</TableCell>
									<TableCell>
										<Typography sx={{ fontWeight: 900 }}>
											% Eficacia Comprovada
										</Typography>
									</TableCell>
									<TableCell>
										<Typography sx={{ fontWeight: 900 }}>
											Preço Venda Dose
										</Typography>
									</TableCell>
									<TableCell>
										<Typography sx={{ fontWeight: 900 }}>Ações</Typography>
									</TableCell>
								</TableRow>
								{vaccines.data &&
									vaccines.data.map((item) => (
										<TableRow key={item.id}>
											<TableCell>{item.nome_vacina}</TableCell>
											<TableCell>{item.nome_fabricante}</TableCell>
											<TableCell>{item.pais_origem}</TableCell>
											<TableCell>{item.quantidade_minimas_doses}</TableCell>
											<TableCell>
												{item.percentual_eficacia_comprovada}
											</TableCell>
											<TableCell>{item.preco_venda_por_dose}</TableCell>
											<TableCell>
												<Box
													sx={{
														display: "flex",
														gap: "0.5rem",
														alignItems: "center",
														justifyContent: "center",
													}}
												>
													<CustomIcon
														value={{
															style: {
																color: theme.palette.primary.main,
																size: "1.5rem",
															},
														}}
													>
														<FiEdit id={item.id} onClick={handleClickEdit} />
													</CustomIcon>
													<CustomIcon
														value={{
															style: {
																color: theme.palette.error.main,
																size: "1.5rem",
															},
														}}
													>
														<RiDeleteBin2Line
															id={item.id}
															onClick={handleClickDelete}
														/>
													</CustomIcon>
												</Box>
											</TableCell>
										</TableRow>
									))}
							</TableHead>
						</Table>
					</TableContainer>
				</Box>
			) : (
				<Typography>Nenhuma vacina cadastrada.</Typography>
			)}
		</>
	);
}
