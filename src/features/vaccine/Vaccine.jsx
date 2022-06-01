import { useState, useEffect } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createVaccine, getVaccines } from "features/vaccine/vaccineSlice";
import { ListVaccines } from "features/vaccine/ListVaccines";

export function Vaccine() {
	const dispatch = useDispatch();
	const { data } = useSelector((state) => state.vaccine);
	const [vaccine, setVaccine] = useState({
		nomeVacina: "",
		nomeFabricante: "",
		paisOrigem: "",
		quantidadeMinimasDoses: "",
		percentualEficaciaComprovada: "",
		precoVendaPorDose: "",
	});
	const [vaccines, setVaccines] = useState(data);

	useEffect(() => {
		dispatch(getVaccines());
	}, [dispatch]);

	useEffect(() => {
		setVaccines(data);
	}, [data]);

	const handleChange = (event) => {
		const id = event.currentTarget.id;
		const value = event.currentTarget.value;

		setVaccine((prevState) => {
			return {
				...prevState,
				[id]: value,
			};
		});
	};

	const clearForm = () => {
		setVaccine(() => {
			return {
				nomeVacina: "",
				nomeFabricante: "",
				paisOrigem: "",
				quantidadeMinimasDoses: "",
				percentualEficaciaComprovada: "",
				precoVendaPorDose: "",
			};
		});
	};

	const handleClickCreate = () => {
		dispatch(createVaccine(vaccine)).then(() => dispatch(getVaccines()));
		clearForm();
		setVaccines(data);
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
				alignItems: "center",
			}}
		>
			<Box
				sx={{
					bgcolor: (theme) => theme.palette.common.black,
					height: "10vh",
					width: "100%",
				}}
			>
				menu
			</Box>

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					background: "#FFFFFF",
					width: "85%",
					marginTop: "30px",
				}}
			>
				<Box sx={{ display: "flex" }}>
					<Typography
						sx={{
							fontFamily: "Roboto",
							fontSize: "22px",
							fontWeight: 700,
							lineHeight: "26px",
							letterSpacing: "0em",
							textAlign: "left",
						}}
					>
						Registrar Vacina
					</Typography>
				</Box>

				<Box
					sx={{
						display: "flex",
						marginTop: "30px",
						gap: "1rem",
						flexDirection: "column",
					}}
				>
					<Box sx={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
						<TextField
							fullWidth
							size="small"
							id="nomeVacina"
							label="nome vacina"
							type="text"
							value={vaccine.nomeVacina}
							onChange={handleChange}
						/>

						<TextField
							fullWidth
							size="small"
							id="nomeFabricante"
							label="fabricante"
							type="text"
							value={vaccine.nomeFabricante}
							onChange={handleChange}
						/>

						<TextField
							fullWidth
							size="small"
							id="paisOrigem"
							label="país origem"
							type="text"
							value={vaccine.paisOrigem}
							onChange={handleChange}
						/>

						<TextField
							fullWidth
							size="small"
							id="quantidadeMinimasDoses"
							label="quantidades mínimas de doses"
							type="text"
							value={vaccine.quantidadeMinimasDoses}
							onChange={handleChange}
						/>

						<TextField
							fullWidth
							size="small"
							id="percentualEficaciaComprovada"
							label="percentual eficácia comprovada"
							type="text"
							value={vaccine.percentualEficaciaComprovada}
							onChange={handleChange}
						/>

						<TextField
							fullWidth
							size="small"
							id="precoVendaPorDose"
							label="preço venda dose"
							type="text"
							value={vaccine.precoVendaPorDose}
							onChange={handleChange}
						/>

						<Button
							size="small"
							sx={{
								backgroundColor: "primary.main",
								color: "primary.contrastText",
								"&:hover": {
									backgroundColor: "primary.light",
								},
							}}
							onClick={handleClickCreate}
						>
							Registrar
						</Button>
					</Box>

					<ListVaccines />
				</Box>
			</Box>
		</Box>
	);
}
