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
} from "features/list-vaccines/slice";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { Icon as CustomIcon } from "components/icon/Icon";

export function ListVaccines() {
  const theme = useTheme();
  const { vaccine, vaccines } = useSelector((state) => state.listVaccines);
  const dispatch = useDispatch();
  const [editDialog, setEditDialog] = useState(false);
  const [destroyDialog, setDestroyDialog] = useState(false);
  const [id, setId] = useState(null);
  const [snackbar, setSnackbar] = useState(false);

  useEffect(() => {
    dispatch(getVaccines());
  }, [dispatch]);

  const handleEditDialog = (e) => {
    setEditDialog(true);
    const id = Number(e.currentTarget.id);
    dispatch(getVaccineById({ id }));
  };

  const handleDestroyDialog = async (e) => {
    const id = e.target.id;
    setId(id);
    dispatch(getVaccineById({ id }));
    setDestroyDialog(true);
  };

  const handleChange = (e) => {
    const id = e.target.id;
    const name = e.target.name;
    const value = e.target.value;
    dispatch(editVaccine({ id, name, value }));
  };

  const handleCloseDestroyDialog = () => {
    setDestroyDialog(false);
  };

  const handleCloseEditDialog = () => {
    setEditDialog(false);
  };

  const handleClickDestroyVaccine = () => {
    dispatch(destroyVaccine(id));
    dispatch(getVaccines());
    setDestroyDialog(false);
  };

  return (
    <>
      <Snackbar
        open={snackbar}
        autoHideDuration={2000}
        onClose={() => {}}
        message="Vacina deletada com sucesso."
      />

      {/* Destroy Dialog  */}
      <Dialog open={destroyDialog} onClose={handleCloseDestroyDialog}>
        <DialogTitle>Deletar Vacina</DialogTitle>
        <Divider />
        <DialogContent>
          {JSON.stringify(vaccine.data, null, 2)}
          <Divider />
          Deseja realmente deletar a vacina?
        </DialogContent>
        <DialogActions>
          <Button>Cancelar</Button>
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
            {vaccine.data.map((item) => {
              return (
                <>
                  <TextField
                    id={item.id}
                    name="nome_vacina"
                    size="small"
                    label="nome da vacina"
                    placeholder="nome da vacina"
                    onChange={handleChange}
                    value={item.nome_vacina}
                  />

                  <TextField
                    id={item.id}
                    name="nome_fabricante"
                    size="small"
                    label="nome do fabricante"
                    placeholder="nome do fabricante"
                    onChange={handleChange}
                    value={item.nome_fabricante}
                  />

                  <TextField
                    id={item.id}
                    name="pais_origem"
                    size="small"
                    placeholder="país de origem"
                    label="país de origem"
                    onChange={handleChange}
                    value={item.pais_origem}
                  />

                  <TextField
                    id={item.id}
                    name="quantidade_minimas_doses"
                    size="small"
                    placeholder="quantidade mínimas de doses"
                    label="quantidade mínimas de doses"
                    onChange={handleChange}
                    value={item.quantidade_minimas_doses}
                  />

                  <TextField
                    id={item.id}
                    name="percentual_eficacia_comprovada"
                    size="small"
                    label="percentual eficácia comprovada"
                    placeholder="percentual eficácia comprovada"
                    onChange={handleChange}
                    value={item.percentual_eficacia_comprovada}
                  />

                  <TextField
                    id={item.id}
                    name="preco_venda_por_dose"
                    size="small"
                    label="preço venda por dose"
                    placeholder="preço venda por dose"
                    onChange={handleChange}
                    value={item.preco_venda_por_dose}
                  />
                </>
              );
            })}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button>Cancelar</Button>
          <Button>Salvar</Button>
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
                {vaccines.data &&
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
                            <FiEdit id={item.id} onClick={handleEditDialog} />
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
                              onClick={handleDestroyDialog}
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
