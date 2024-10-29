// Material UI
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";

// react
import React from "react";

// react-router-dom
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

// SideMenu Context
import { useDrawerContext } from "../../contexts";

// interfaces
interface ISideMenuprops {
  children: React.ReactNode;
}

interface IListItemLinkProps {
    children: React.ReactNode;
    label: string;
    to: string
    onClick: () => void;
}

const ListItemLink: React.FC<IListItemLinkProps> = () => {}

export const SideMenu: React.FC<ISideMenuprops> = ({children}) => {

    return (
        <>
            {children}
        </>
    )
}