import { Box, 
        Button, 
        Divider, 
        Icon, 
        Paper, 
        useTheme 
    } from "@mui/material";

interface IDetailToolsProps{
    textNewButton?: string

    showNewButton?: boolean
    showBackButton?: boolean
    showDeleteButton?: boolean
    showSaveButton?: boolean
    showSaveAndDeleteButton?: boolean

    clickButtonNew?: () => void
    clickButtonBack?: () => void
    clickButtonDelete?: () => void
    clickButtonSave?: () => void
    clickButtonSaveAndDelete?: () => void

}

export default function DetailTools({
    textNewButton = "Novo",

    showNewButton = true,
    showBackButton = true,
    showDeleteButton = true,
    showSaveButton = true,
    showSaveAndDeleteButton = false,

    clickButtonNew,
    clickButtonBack,
    clickButtonDelete,
    clickButtonSave,
    clickButtonSaveAndDelete

}: IDetailToolsProps) {

    const theme = useTheme()

  return (
    <div>
    <Box component={Paper}
        gap={1}
        padding={1}
        height={theme.spacing(5)}
        marginX={1}
        paddingX={2}
        alignItems="center"
        display="flex"
    >
        {showSaveButton && (
            <Button 
                variant="contained"
                startIcon={<Icon>save</Icon>}
                onClick={clickButtonSave}
            >
                Salvar
            </Button>
        )}
        {showSaveAndDeleteButton &&(
            <Button 
                variant="outlined"
                startIcon={<Icon>save</Icon>}
                onClick={clickButtonSaveAndDelete}
            >
                Salvar e voltar
            </Button>
        )}
        {showDeleteButton &&(
            <Button 
                variant="outlined"
                startIcon={<Icon>delete</Icon>}
                onClick={clickButtonDelete}
            >
                Apagar
            </Button>
        )}
        {showNewButton &&(
            <Button 
                variant="outlined"
                startIcon={<Icon>add</Icon>}
                onClick={clickButtonNew}
            >
                {textNewButton}
            </Button>
        )}

        <Divider variant="middle" orientation="vertical"/>

        {showBackButton &&(            
            <Button 
                variant="outlined"
                startIcon={<Icon>arrow_back</Icon>}
                onClick={clickButtonBack}
            >
                Voltar
            </Button>
        )}
    </Box>

    </div>
  )
}
