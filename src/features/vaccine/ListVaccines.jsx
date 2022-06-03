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
	Backdrop,
	CircularProgress,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getVaccines, updateVaccine } from "features/vaccine/vaccineSlice";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { Icon as CustomIcon } from "components/icon/Icon";

export function ListVaccines() {
	const theme = useTheme();
	const { status, data } = useSelector((state) => state.vaccine);
	const dispatch = useDispatch();
	const [editDialog, setEditDialog] = useState(false);
	const [destroyDialog, setDestroyDialog] = useState(false);
	const [vaccineId, setVaccineId] = useState("");
	const [vaccine, setVaccine] = useState("");
	const [backdrop, setBackdrop] = useState(false);
	const [vaccines, setVaccines] = useState(data);
	const [keyword, setKeyword] = useState("");

	useEffect(() => {
		dispatch(getVaccines());
	}, [dispatch]);

	useEffect(() => {
		setVaccines(data);
	}, [data]);

	const handleOpenEditDialog = (e) => {
		setEditDialog(true);
		const id = Number(e.currentTarget.id);
		setVaccineId(id);
		const filteredVaccineById = data.filter((vaccine) => vaccine.id === id);
		setVaccine(filteredVaccineById);
	};

	const handleChangeEditVaccine = (e) => {
		const { name, value } = e.target;

		const editedVaccine = vaccine.map((obj, i) => ({
			...obj,
			[name]: value,
		}));

		setVaccine([...editedVaccine]);
	};

	const handleOpenDestroyDialog = async (e) => {
		const id = e.target.id;
		setVaccineId(id);
		setDestroyDialog(true);
	};

	const handleCloseDestroyDialog = () => {
		setDestroyDialog(false);
	};

	const handleCloseEditDialog = () => {
		setEditDialog(false);
	};

	const handleClickDestroyVaccine = () => {
		// dispatch(destroyVaccine({ id }));
		// setDestroyDialog(false);
		// dispatch(getVaccines());
	};

	const handleClickUpdateVaccine = () => {
		dispatch(updateVaccine({ vaccineId, vaccine: vaccine[0] })).then(() =>
			dispatch(getVaccines()).then(() => setVaccines(data))
		);

		setEditDialog(false);
	};

	const handleCloseBackdrop = () => {};

	const handleChangeKeyword = (e) => {
		setKeyword(e.target.value);
	};

	const handleClickSearch = (e) => {
		const keywordToLowerCase = keyword.toLowerCase();

		const vaccine = data.filter((vaccine) => {
			if (+vaccine.id === +keyword) {
				return vaccine;
			} else if (vaccine.nome_vacina.startsWith(keywordToLowerCase)) {
				return vaccine;
			} else if (vaccine.nome_fabricante.startsWith(keywordToLowerCase)) {
				return vaccine;
			}
		});

		if (vaccine.length > 0) {
			setVaccines(vaccine);
		} else {
			setVaccines(data);
		}
	};

	return (
		<>
			<pre>{JSON.stringify(vaccine, null, 2)}</pre>
			{/* Backdrop */}
			<Backdrop
				sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={backdrop}
				onClick={handleCloseBackdrop}
			>
				<CircularProgress color="inherit" />
			</Backdrop>

			{/* Destroy Dialog */}
			<Dialog open={destroyDialog} onClose={handleCloseDestroyDialog}>
				<pre>{JSON.stringify(vaccineId, null, 2)}</pre>
				<DialogTitle>Deletar Vacina</DialogTitle>
				<Divider />
				<DialogContent>
					Deseja realmente deletar a vacina da base de dados?
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseDestroyDialog}>Cancelar</Button>
					<Button
						onClick={handleClickDestroyVaccine}
						sx={{
							backgroundColor: "warning.main",
							color: "warning.contrastText",
						}}
					>
						Deletar
					</Button>
				</DialogActions>
			</Dialog>

			{/* Edit Dialog */}
			<Dialog open={editDialog} onClose={handleCloseEditDialog}>
				<DialogTitle>Editar Vacina</DialogTitle>
				<Divider />
				<DialogContent>
					<Box sx={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
						{vaccine &&
							vaccine.map((item) => {
								return (
									<>
										<TextField
											id={item.id}
											name="nome_vacina"
											size="small"
											label="nome da vacina"
											placeholder="nome da vacina"
											onChange={handleChangeEditVaccine}
											value={item.nome_vacina}
										/>

										<TextField
											id={item.id}
											name="nome_fabricante"
											size="small"
											label="nome do fabricante"
											placeholder="nome do fabricante"
											onChange={handleChangeEditVaccine}
											value={item.nome_fabricante}
										/>

										<TextField
											id={item.id}
											name="pais_origem"
											size="small"
											placeholder="país de origem"
											label="país de origem"
											onChange={handleChangeEditVaccine}
											value={item.pais_origem}
										/>

										<TextField
											id={item.id}
											name="quantidade_minimas_doses"
											size="small"
											placeholder="quantidade mínimas de doses"
											label="quantidade mínimas de doses"
											onChange={handleChangeEditVaccine}
											value={item.quantidade_minimas_doses}
										/>

										<TextField
											id={item.id}
											name="percentual_eficacia_comprovada"
											size="small"
											label="percentual eficácia comprovada"
											placeholder="percentual eficácia comprovada"
											onChange={handleChangeEditVaccine}
											value={item.percentual_eficacia_comprovada}
										/>

										<TextField
											id={item.id}
											name="preco_venda_por_dose"
											size="small"
											label="preço venda por dose"
											placeholder="preço venda por dose"
											onChange={handleChangeEditVaccine}
											value={item.preco_venda_por_dose}
										/>
									</>
								);
							})}
					</Box>
				</DialogContent>
				<DialogActions>
					<Button size="small" onClick={handleCloseEditDialog}>
						Cancelar
					</Button>
					<Button
						size="small"
						onClick={handleClickUpdateVaccine}
						sx={{
							backgroundColor: "primary.main",
							color: "primary.contrastText",
							"&:hover": {
								backgroundColor: "primary.light",
							},
						}}
					>
						Salvar
					</Button>
				</DialogActions>
			</Dialog>

			{vaccines && (
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
						Vacinas registradas
					</Typography>

					<Box sx={{ display: "flex", marginBottom: "1rem" }}>
						<TextField
							sx={{ width: "80%" }}
							size="small"
							value={keyword}
							onChange={handleChangeKeyword}
							placeholder="buscar pelo id, nome da vacina, nome do fabricante"
						/>
						<Button onClick={handleClickSearch}>Filtrar vacina</Button>
					</Box>

					<TableContainer>
						<Table size="small">
							<TableHead>
								<TableRow>
									<TableCell>
										<Typography sx={{ fontWeight: 900 }}>ID</Typography>
									</TableCell>
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
								{vaccines &&
									vaccines.map((item) => (
										<TableRow key={item.id}>
											<TableCell>{item.id}</TableCell>
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
														<FiEdit
															id={item.id}
															onClick={handleOpenEditDialog}
														/>
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
															onClick={handleOpenDestroyDialog}
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
			)}
		</>
	);
}
