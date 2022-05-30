import { useState, useEffect } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createVaccine, getVaccines } from "features/vaccine/vaccineSlice";

export function Vaccine() {
  const dispatch = useDispatch();
  const { status, data } = useSelector((state) => state.vaccine);
  const [vaccines, setVaccines] = useState(data);
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
    dispatch(getVaccines());
  }, [dispatch]);

  useEffect(() => {
    setVaccines(data);
  }, [data]);

  useEffect(() => {}, []);

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
    dispatch(createVaccine(vaccine));
    dispatch(getVaccines());
    clearForm();
    setVaccines(data);
  };

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
        <Box sx={{ display: "flex", marginBottom: "1rem" }}>
          <TextField
            sx={{ width: "80%" }}
            size="small"
            value={keyword}
            onChange={handleChangeKeyword}
            placeholder="buscar pelo id, nome da vacina, nome do fabricante"
          />
          <Button onClick={handleClickSearch}>Buscar</Button>
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
              onClick={handleClickCreate}
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
