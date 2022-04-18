import { useState, useEffect } from "react";
import { Box, Button, TextField, Typography, Link } from "@mui/material";
import { Icon } from "components/icon/Icon";
import { BiExit } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { getVaccine } from "features/vaccine/vaccineSlice";

export function Vaccine() {
  // const { username } = useSelector(selectSignup);
  const dispatch = useDispatch();
  const test = useSelector((state) => state.vaccine);

  const [vaccine, setVaccine] = useState({
    nomeVacina: "",
    nomeFabricante: "",
    paisOrigem: "",
    quantidadeMinimasDoses: "",
    percentualEficaciaComprovada: "",
    precoVendaPorDose: "",
  });

  const [registeredVaccines, setRegisteredVaccines] = useState(true);

  useEffect(() => {
    dispatch(getVaccine());
  }, [dispatch]);

  const handleChange = (event) => {
    const id = event.currentTarget.id;
    const value = event.currentTarget.value;

    console.log(id, value);

    setVaccine((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  };

  const handleClick = (event) => {
    console.log(vaccine);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {JSON.stringify(test, null, 2)}
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
            <Link href="#">vacina</Link>
            <Link href="#">
              <Icon
                value={{ size: "1.4em", style: { verticalAlign: "middle" } }}
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
                  onChange={handleChange}
                />

                <TextField
                  fullWidth
                  size="small"
                  id="nomeFabricante"
                  label="Nome do fabricante"
                  type="text"
                  onChange={handleChange}
                />

                <TextField
                  fullWidth
                  size="small"
                  id="paisOrigem"
                  label="País de origem"
                  type="text"
                  onChange={handleChange}
                />

                <TextField
                  fullWidth
                  size="small"
                  id="quantidadeMinimasDoses"
                  label="Quantidade minimas de doses"
                  type="text"
                  onChange={handleChange}
                />

                <TextField
                  fullWidth
                  size="small"
                  id="percentualEficaciaComprovada"
                  label="Percentual de eficácia comprovada"
                  type="text"
                  onChange={handleChange}
                />

                <TextField
                  fullWidth
                  size="small"
                  id="precoVendaPorDose"
                  label="Preço de venda por dose"
                  type="text"
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
                sx={{
                  backgroundColor: "primary.main",
                  color: "primary.contrastText",
                  "&:hover": {
                    backgroundColor: "primary.light",
                  },
                }}
                onClick={handleClick}
              >
                <Typography sx={{ fontWeight: "900", letterSpacing: "1px" }}>
                  Cadastrar
                </Typography>
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              marginTop: "30px",
              border: "2px solid red",
            }}
          >
            {registeredVaccines && (
              <>
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
                    Vacinas cadastradas
                  </Typography>
                </Box>

                <Box>Vaccines</Box>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}