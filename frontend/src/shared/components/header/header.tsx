// MATERIAL UI
import { Box, Drawer, Typography } from "@mui/material";

// React
import { FC, ReactNode } from "react";

// interface
interface IHeaderProps {
  children: ReactNode;
}

export const Header: FC<IHeaderProps> = ({ children }) => {
  return (
    <>
      <Drawer open={false} variant="permanent">
        <Box>
          <Typography>EchoBlog</Typography>
        </Box>
      </Drawer>
      <Box>{children}</Box>
    </>
  );
};

// https://www.youtube.com/watch?v=lUkxSnJ7aDw