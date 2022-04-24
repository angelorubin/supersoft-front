import { useState, useEffect } from "react";
import {
  Box,
  Snackbar,
  Alert,
  Button,
  TextField,
  Typography,
  Link,
  useTheme,
  Backdrop,
} from "@mui/material";
import { Icon } from "components/icon/Icon";
import { BiExit } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { createVaccine } from "features/vaccines/slice";
import { getVaccines } from "features/vaccines/slice";
import { Vaccines } from "features/vaccines";
import { CircularProgress } from "@mui/material";

export function Vaccine() {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.vaccines);
  const [open, setOpen] = useState(false);

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

  const handleClose = (event, reason) => {
    setOpen(false);
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
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
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
            backgroundColor: "primary.light",
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
                  fontSize: "28px",
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
                gap: "0.5rem",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Link href="#">
                <Icon
                  value={{
                    style: {
                      verticalAlign: "middle",
                      size: "1.5rem",
                      color: palette.common.black,
                    },
                  }}
                >
                  <BiExit />
                </Icon>
              </Link>
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
              width: "90%",
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
                  Cadastrar vacina
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

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginTop: "30px",
              }}
            >
              <Box>
                <Vaccines />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
