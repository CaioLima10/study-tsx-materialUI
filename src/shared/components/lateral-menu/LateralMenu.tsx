import { Avatar,
        Box, 
        Divider, 
        Drawer, 
        List, 
        useMediaQuery, 
        useTheme }
        from "@mui/material";
import AuthContextDrawer from "../../context/AuthDrawer";
import ListItemLink from "./ListItemLink";

interface ILateralMenuProps{
    children: JSX.Element
}

export default function LateralMenu({ children }: ILateralMenuProps){

    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    const {isDrawerOpen , toggleDrawerOpen } = AuthContextDrawer()

  return (
        <>
            <Drawer 
                open={isDrawerOpen}  
                variant={smDown ? 'temporary' : 'permanent'} 
                onClose={toggleDrawerOpen}    
            >
                <Box 
                    width={theme.spacing(28)}
                    height="100%"
                    display="flex"
                    flexDirection="column"
                >
                    <Box 
                        width={theme.spacing(28)} 
                        height={theme.spacing(20)}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Avatar 
                        sx={{
                            height: theme.spacing(10),
                            width: theme.spacing(10), 
                            fontSize: 32 
                        }}>
                        C
                        </Avatar>
                    </Box>
                    <Divider/>

                    <Box flex={1}>
                        <List>
                            <ListItemLink
                                icon="home"
                                label="Pagina inicial"
                                to="/Página-inicial"
                                onClick={smDown ? toggleDrawerOpen : undefined}
                            />
                            <ListItemLink
                                icon="trash"
                                label="cidade"
                                to="/cidade"
                                onClick={smDown ? toggleDrawerOpen : undefined}
                            />
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box height={"100vh"} marginLeft={smDown ? 0 : theme.spacing(28)}>
                { children }
            </Box>
        </>
    )
}
