import { Box, 
        Button, 
        Divider, 
        Icon, 
        Paper, 
        Skeleton, 
        Theme, 
        Typography, 
        useMediaQuery, 
        useTheme 
    } from "@mui/material";
import { IDetailToolsProps } from "./types";


export default function DetailTools({
    textNewButton = "Novo",

    showNewButton = true,
    showBackButton = true,
    showDeleteButton = true,
    showSaveButton = true,
    showSaveAndDeleteButton = false,

    showNewButtonLoading = false,
    showBackButtonLoading = false,
    showDeleteButtonLoading = false,
    showSaveButtonLoading = false,
    showSaveAndDeleteButtonLoading = false,

    clickButtonNew,
    clickButtonBack,
    clickButtonDelete,
    clickButtonSave,
    clickButtonSaveAndClose

}: IDetailToolsProps) {

    
    const theme = useTheme()
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Box component={Paper}
        gap={1}
        padding={1}
        height={theme.spacing(5)}
        marginX={1}
        paddingX={2}
        alignItems="center"
        display="flex"
    >
        {(showSaveButton && !showSaveButtonLoading && !smDown && !mdDown) && (
            <Button 
                variant="contained"
                startIcon={<Icon>save</Icon>}
                onClick={clickButtonSave}
            >
                <Typography 
                    variant="button" 
                    whiteSpace="nowrap" 
                    textOverflow="ellipsis" 
                    overflow="hidden"
                >
                    Salvar
                </Typography>
            </Button>
        )|| (
            <Button 
            variant="contained"
            startIcon={<Icon>save</Icon>}
            onClick={clickButtonSave}
            fullWidth
            >
                <Typography 
                    variant="button" 
                    whiteSpace="nowrap" 
                    textOverflow="ellipsis" 
                    overflow="hidden"
                >
                    Salvar
                </Typography>
            </Button>
        )}

        {showSaveButtonLoading &&(
            <Skeleton width={110} height={60}/>
        )}

        {(showSaveAndDeleteButton && !showSaveAndDeleteButtonLoading && !smDown && !mdDown) &&(
            <Button 
                variant="outlined"
                startIcon={<Icon>save</Icon>}
                onClick={clickButtonSaveAndClose}
            >
                <Typography 
                    variant="button" 
                    whiteSpace="nowrap" 
                    textOverflow="ellipsis" 
                    overflow="hidden"
                >
                    Salvar e voltar
                </Typography>
            </Button>
        )}

        {(showSaveAndDeleteButtonLoading && !smDown && !mdDown) &&(
            <Skeleton width={180} height={60}/>
        )}

        {(showDeleteButton && !showDeleteButtonLoading && !smDown ) &&(
            <Button 
                variant="outlined"
                startIcon={<Icon>delete</Icon>}
                onClick={clickButtonDelete}
            >
                <Typography 
                    variant="button" 
                    whiteSpace="nowrap" 
                    textOverflow="ellipsis" 
                    overflow="hidden"
                >
                    Apagar
                </Typography>
            </Button>
        )}
        {(showDeleteButtonLoading) &&(
            <Skeleton width={110} height={60}/>
        )}

        {(showNewButton && !showNewButtonLoading && !smDown ) &&(
            <Button 
                variant="outlined"
                startIcon={<Icon>add</Icon>}
                onClick={clickButtonNew}
            >
                <Typography 
                    variant="button" 
                    whiteSpace="nowrap" 
                    textOverflow="ellipsis" 
                    overflow="hidden"
                >
                    {textNewButton}
                </Typography>
            </Button>
        )}
        {(showNewButtonLoading && !smDown && !mdDown) &&(
            <Skeleton width={100} height={60}/>
        )}

        { showBackButton && 
        ( showDeleteButton 
            || showNewButton 
            || showSaveAndDeleteButton 
            || showSaveButton 
        )&&(
            <Divider variant="middle" orientation="vertical"/>
        )}

        {(showBackButton && !showBackButtonLoading && !smDown && !mdDown) &&(            
            <Button 
                variant="outlined"
                startIcon={<Icon>arrow_back</Icon>}
                onClick={clickButtonBack}
            >
                <Typography 
                    variant="button" 
                    whiteSpace="nowrap" 
                    textOverflow="ellipsis" 
                    overflow="hidden"
                >
                    Voltar
                </Typography>
            </Button>
        )||(
            <Button 
            variant="outlined"
            startIcon={<Icon>arrow_back</Icon>}
            onClick={clickButtonBack}
            fullWidth
            >
                <Typography 
                    variant="button" 
                    whiteSpace="nowrap" 
                    textOverflow="ellipsis" 
                    overflow="hidden"
                >
                    Voltar
                </Typography>
            </Button>
        )}

        {showBackButtonLoading &&(
            <Skeleton width={110} height={60}/>
        )}
    </Box>
  )
}
