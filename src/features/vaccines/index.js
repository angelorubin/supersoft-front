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
  Snackbar,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  getVaccines,
  getVaccineById,
  editVaccine,
  destroyVaccine,
  updateVaccine,
} from "features/vaccines/slice";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { Icon as CustomIcon } from "components/icon/Icon";

export function Vaccines() {
  const theme = useTheme();
  const { status, vaccines } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [editDialog, setEditDialog] = useState(false);
  const [destroyDialog, setDestroyDialog] = useState(false);
  const [id, setId] = useState("");
  const [vaccine, setVaccine] = useState([]);

  useEffect(() => {
    dispatch(getVaccines());
  }, [dispatch]);

  const handleOpenEditDialog = (e) => {
    setEditDialog(true);
    const id = Number(e.currentTarget.id);
    setId(id);
    const filteredVaccine = vaccines.data.filter(
      (vaccine) => vaccine.id === id
    );
    setVaccine(filteredVaccine);
  };

  const handleChangeEditVaccine = (e) => {
    const { id, name, value } = e.target;

    const editedVaccine = vaccine.map((obj, i) => ({
      ...obj,
      [name]: value,
    }));

    setVaccine([...editedVaccine]);
  };

  const handleOpenDestroyDialog = async (e) => {
    const id = e.target.id;
    setId(id);
    setDestroyDialog(true);
  };

  const handleCloseDestroyDialog = () => {
    setDestroyDialog(false);
  };

  const handleCloseEditDialog = () => {
    setEditDialog(false);
  };

  const handleClickDestroyVaccine = () => {
    dispatch(destroyVaccine({ id }));
    dispatch(getVaccines());
    setDestroyDialog(false);
  };

  const handleClickUpdateVaccine = () => {
    console.log(vaccine[0]);
    dispatch(updateVaccine({ id, vaccine: vaccine[0] }));
    dispatch(getVaccines());
    setEditDialog(false);
  };

  return (
    <>
      {/* Destroy Dialog  */}
      <Dialog open={destroyDialog} onClose={handleCloseDestroyDialog}>
        <DialogTitle>Deletar Vacina</DialogTitle>
        <Divider />
        <DialogContent>Deseja realmente deletar a vacina?</DialogContent>
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

      {/* Edit Dialog  */}
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
                {vaccines &&
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
      ) : (
        <Typography>Nenhuma vacina cadastrada.</Typography>
      )}
    </>
  );
}
