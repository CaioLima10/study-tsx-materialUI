import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material";

export default function DetailTools() {

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
        <Button 
            variant="contained"
            startIcon={<Icon>save</Icon>}
        >
            Salvar
        </Button>
        <Button 
            variant="outlined"
            startIcon={<Icon>save</Icon>}
        >
            Salvar e voltar
        </Button>
        <Button 
            variant="outlined"
            startIcon={<Icon>delete</Icon>}
        >
            Apagar
        </Button>
        <Button 
            variant="outlined"
            startIcon={<Icon>add</Icon>}
        >
            Novo
        </Button>

        <Divider variant="middle" orientation="vertical"/>

        <Button 
            variant="outlined"
            startIcon={<Icon>arrow_back</Icon>}
        >
            Voltar
        </Button>
    </Box>

    </div>
  )
}
