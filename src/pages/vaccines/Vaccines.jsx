import { useState } from "react";
import { Box, Typography, Link, Backdrop } from "@mui/material";
import { Icon } from "components/icon/Icon";
import { BiExit } from "react-icons/bi";
import { ListVaccines } from "features/vaccines/ListVaccines";
import { CreateVaccine } from "features/vaccines/CreateVaccine";
import { CircularProgress } from "@mui/material";

export function Vaccines() {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    setOpen(false);
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
                      color: "black",
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
                width: "100%",
                marginTop: "30px",
              }}
            >
              <Box>
                <CreateVaccine />
              </Box>
              <Box>
                <ListVaccines />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
