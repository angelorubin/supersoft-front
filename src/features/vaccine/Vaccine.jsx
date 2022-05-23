import { useState, useEffect } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  createVaccine,
  getVaccines,
  orderVaccines,
} from "features/vaccine/VaccineSlice";

export function Vaccine() {
  const dispatch = useDispatch();
  const { status, data } = useSelector((state) => state.vaccine);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getVaccines());
  }, [dispatch]);

  const [vaccine, setVaccine] = useState({
    nomeVacina: "",
    nomeFabricante: "",
    paisOrigem: "",
    quantidadeMinimasDoses: "",
    percentualEficaciaComprovada: "",
    precoVendaPorDose: "",
  });

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
            Cadastrar Vacina
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
              label="Nome da vacina"
              type="text"
              value={vaccine.nomeVacina}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              size="small"
              id="nomeFabricante"
              label="Nome do fabricante"
              type="text"
              value={vaccine.nomeFabricante}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              size="small"
              id="paisOrigem"
              label="País de origem"
              type="text"
              value={vaccine.paisOrigem}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              size="small"
              id="quantidadeMinimasDoses"
              label="Quantidade minimas de doses"
              type="text"
              value={vaccine.quantidadeMinimasDoses}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              size="small"
              id="percentualEficaciaComprovada"
              label="Percentual de eficácia comprovada"
              type="text"
              value={vaccine.percentualEficaciaComprovada}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              size="small"
              id="precoVendaPorDose"
              label="Preço de venda por dose"
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
              Cadastrar
            </Button>
          </Box>

          <Box>
            <Typography variant="h6">Vacinas Cadastradas</Typography>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
