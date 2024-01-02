import { Box, Icon, IconButton, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import AuthContextDrawer from "../context/AuthDrawer";

interface IBasePageLayoutProps{
    title?: string
    children?: JSX.Element | React.ReactNode
    toolbar?: React.ReactNode
}

export default function BasePageLayout({ title , children , toolbar }: IBasePageLayoutProps) {

    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
    const theme = useTheme()

    const { toggleDrawerOpen } = AuthContextDrawer()

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>    
        <Box display="flex" alignItems="center" height={theme.spacing(smDown ? 2 : smDown ? 4 : 4)} >
                <Typography 
                    sx={{ display: "flex" , marginLeft: "10px"}}
                    variant={mdDown ? "h6" : mdDown ? "h6" : "h6"}
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipses"
                    >
                    { smDown && (
                        <IconButton onClick={toggleDrawerOpen}>
                            <Icon>menu</Icon>
                        </IconButton>
                    ) }
                    {title}
                </Typography>
        </Box>

        { toolbar && (
            <Box>
                { toolbar }
            </Box>
        )}

        <Box overflow="auto">
            { children }
        </Box>
    </Box>
  )
}
