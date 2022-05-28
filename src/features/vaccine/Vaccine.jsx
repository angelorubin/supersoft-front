import { useState, useEffect, useMemo } from "react";
import { Box, Typography, TextField, Button, Input } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
	createVaccine,
	getVaccineById,
	getVaccines,
	searchKeyword,
} from "features/vaccine/vaccineSlice";
import {
	increment,
	decrement,
	incrementAsync,
} from "features/counter/counterSlice";

export function Vaccine() {
	const dispatch = useDispatch();
	const { status, data } = useSelector((state) => state.vaccine);
	const [vaccines, setVaccines] = useState(data);
	const { value } = useSelector((state) => state.counter);
	const [open, setOpen] = useState(false);
	const [keyword, setKeyword] = useState("");
	const [vaccine, setVaccine] = useState({
		nomeVacina: "",
		nomeFabricante: "",
		paisOrigem: "",
		quantidadeMinimasDoses: "",
		percentualEficaciaComprovada: "",
		precoVendaPorDose: "",
	});

	useEffect(() => {
		setVaccines(data);
	}, []);

	useEffect(() => {
		dispatch(getVaccines());
	}, [dispatch]);

	const handleChange = (event) => {
		const id = event.currentTarget.id;
		const value = event.currentTarget.value;

		// console.log(id, value);

		setVaccine((prevState) => {
			return {
				...prevState,
				[id]: value,
			};
		});
	};

	const handleClick = () => {
		dispatch(createVaccine(vaccine));
		clearForm();
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

	const handleIncrement = () => {
		dispatch(increment());
	};

	const handleDecrement = () => {
		dispatch(decrement());
	};

	const handleChangeKeyword = (e) => {
		setKeyword(e.target.value);
	};

	const handleClickSearch = () => {
		const index = data.findIndex((vaccine) => +vaccine.id === +keyword);

		if (index === -1) {
			setVaccines(data);
		} else {
			setVaccines(() => {
				return data[index];
			});
		}
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
				<Button sx={{ bgColor: "red" }} onClick={handleIncrement}>
					+
				</Button>
				<Button onClick={handleDecrement}>-</Button>

				<Box sx={{ display: "flex", marginBottom: "0.5rem" }}>
					<TextField
						value={keyword}
						onChange={handleChangeKeyword}
						placeholder="busque pelo nome, id"
					/>
					<Button onClick={handleClickSearch}>Search</Button>
				</Box>

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
							onClick={handleClick}
						>
							Registrar
						</Button>
					</Box>

					<Box>
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
							Vacinas registradas
						</Typography>
						<pre>{JSON.stringify(vaccines, null, 2)}</pre>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
