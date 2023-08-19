import styled from "@emotion/styled";
import { Toolbar } from "@mui/material";

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    '@media all': {
      minHeight: 100,
    },
}));