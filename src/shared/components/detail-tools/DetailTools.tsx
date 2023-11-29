import { Box, 
        Button, 
        Divider, 
        Icon, 
        Paper, 
        Skeleton, 
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
    clickButtonSaveAndDelete

}: IDetailToolsProps) {

    const theme = useTheme()

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
        {(showSaveButton && !showSaveButtonLoading) && (
            <Button 
                variant="contained"
                startIcon={<Icon>save</Icon>}
                onClick={clickButtonSave}
            >
                Salvar
            </Button>
        )}

        {showSaveButtonLoading &&(
            <Skeleton width={110} height={60}/>
        )}

        {(showSaveAndDeleteButton && !showSaveAndDeleteButtonLoading) &&(
            <Button 
            variant="outlined"
            startIcon={<Icon>save</Icon>}
            onClick={clickButtonSaveAndDelete}
            >
                Salvar e voltar
            </Button>
        )}
        {showSaveAndDeleteButtonLoading &&(
            <Skeleton width={180} height={60}/>
        )}

        {(showDeleteButton && !showDeleteButtonLoading) &&(
            <Button 
                variant="outlined"
                startIcon={<Icon>delete</Icon>}
                onClick={clickButtonDelete}
            >
                Apagar
            </Button>
        )}
        {showDeleteButtonLoading &&(
            <Skeleton width={110} height={60}/>
        )}

        {(showNewButton && showNewButtonLoading) &&(
            <Button 
                variant="outlined"
                startIcon={<Icon>add</Icon>}
                onClick={clickButtonNew}
            >
                {textNewButton}
            </Button>
        )}
        {showNewButtonLoading &&(
            <Skeleton width={100} height={60}/>
        )}

        <Divider variant="middle" orientation="vertical"/>

        {(showBackButton && !showBackButtonLoading) &&(            
            <Button 
                variant="outlined"
                startIcon={<Icon>arrow_back</Icon>}
                onClick={clickButtonBack}
            >
                Voltar
            </Button>
        )}

        {showBackButtonLoading &&(
            <Skeleton width={110} height={60}/>
        )}

    </Box>
  )
}
