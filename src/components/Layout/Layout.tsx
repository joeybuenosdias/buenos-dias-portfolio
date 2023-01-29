import { ReactElement } from "react"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { LayoutProvider, useLayoutContext } from "."


type Children = {
    children: ReactElement;
}

export function Layout({ children }: Children): ReactElement {
    return (
        <LayoutProvider>
            <>
                <Navigation />
                <SideMenu />
            </>
        </LayoutProvider>
    )
}

function Navigation(): ReactElement {
    const { toggleSideMenu } = useLayoutContext();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleSideMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Buenos Dias
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

function SideMenu() {
    const { isSideMenuOpen, toggleSideMenu } = useLayoutContext();

    return (
        <Drawer
            anchor="left"
            open={isSideMenuOpen}
            onClose={toggleSideMenu}
        >
            <Box
                role="presentation"
                sx={{ width: 250 }}
                onClick={toggleSideMenu}
            >
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Home"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={"About"} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    )
}