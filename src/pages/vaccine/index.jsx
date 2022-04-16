import { Box, Button, Input, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectSignup } from "features/signup/slice";

export function Vaccine() {
	// const { username } = useSelector(selectSignup);

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				height: "100vh",
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					minHeight: "100px",
					width: "100%",
					borderBottom: `1px solid`,
					borderBottomColor: "grey.300",
				}}
			>
				<Box sx={{ display: "flex", width: "90%" }}>
					<Box
						sx={{
							display: "flex",
							flex: 1,
							alignItems: "center",
						}}
					>
						<Typography
							sx={{
								fontFamily: "Roboto",
								fontSize: "22px",
								fontWeight: "700",
								color: "common.black",
							}}
						>
							SUPERSOFT
						</Typography>
					</Box>

					<Box
						sx={{
							display: "flex",
							flex: 1,
							justifyContent: "flex-end",
							alignItems: "center",
						}}
					>
						<Button>Vacinas</Button>
					</Box>
				</Box>
			</Box>

			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					width: "100%",
					padding: "0 0.5rem 0 0.5rem",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						minWidth: "90%",
						alignItems: "center",
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							background: "#FFFFFF",
							width: "100%",
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
								Cadastro de vacina
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
							<Box
								sx={{ display: "flex", gap: "1rem", flexDirection: "column" }}
							>
								<TextField
									fullWidth
									size="small"
									id="nome_vacina"
									label="Nome da vacina"
									type="text"
								/>

								<TextField
									fullWidth
									size="small"
									id="nome_fabricante"
									label="Nome do fabricante"
									type="text"
								/>

								<TextField
									fullWidth
									size="small"
									id="nome_vacina"
									label="Nome da vacina"
									type="text"
								/>

								<TextField
									fullWidth
									size="small"
									id="nome_vacina"
									label="Nome da vacina"
									type="text"
								/>
							</Box>
						</Box>

						<Box
							sx={{
								display: "flex",
								justifyContent: "flex-end",
								width: "100%",
								marginTop: "35px",
							}}
						>
							<Button
								sx={{
									backgroundColor: "primary.main",
									"&:hover": {
										backgroundColor: "red",
									},
								}}
							>
								<Typography sx={{ color: "common.black" }}>salvar</Typography>
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
