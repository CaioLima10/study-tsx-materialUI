import { Avatar,
        Box, 
        Divider, 
        Drawer, 
        Icon, 
        List, 
        ListItemButton, 
        ListItemIcon, 
        ListItemText, 
        useTheme }
        from "@mui/material";

interface ILateralMenuProps{
    children: JSX.Element
}

export default function LateralMenu({ children }: ILateralMenuProps){

    const theme = useTheme()
  return (
        <>
            <Drawer variant="permanent">
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
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Página inicial" />
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box height={"100vh"} marginLeft={theme.spacing(28)}>
                { children }
            </Box>
        </>
    )
}
