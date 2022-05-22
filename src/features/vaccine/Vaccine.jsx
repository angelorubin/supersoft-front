import { useState, useEffect } from "react";
import { Box, Divider, Typography, TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createVaccine, getVaccines } from "features/vaccine/VaccineSlice";

export function Vaccine() {
  const dispatch = useDispatch();
  const { status, data } = useSelector((state) => state.vaccine);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getVaccines());
  }, []);

  const [vaccine, setVaccine] = useState({
    nomeVacina: "",
    nomeFabricante: "",
    paisOrigem: "",
    quantidadeMinimasDoses: "",
    percentualEficaciaComprovada: "",
    precoVendaPorDose: "",
  });

  useEffect(() => {
    if (status === "success" || status === "failed") {
      setOpen(false);
      dispatch(getVaccines());
    } else {
      setOpen(true);
    }
  }, [dispatch, status]);

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
        background: "#FFFFFF",
        width: "100%",
        marginTop: "30px",
      }}
    >
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <Divider sx={{ margin: "1rem 0" }} />

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
    </Box>
  );
}
