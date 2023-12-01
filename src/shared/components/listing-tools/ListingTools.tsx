import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";

import { Environment } from "../../environment";

interface IListingToolsProps{
    searchText?: string
    showInputSearch?: boolean
    changingSearchText?: ( newText: string ) => void

    textNewButton?: string
    showNewButton?:  boolean
    isNewClick?: () => void

}

export default function ListingTools({
    searchText = '',
    showInputSearch = false, 
    changingSearchText,
    textNewButton = 'novo',
    showNewButton = false,
    isNewClick
}
    : IListingToolsProps) {

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

        {showInputSearch && (
            <TextField 
                size="small"
                placeholder={Environment.INPUT_SEARCH}
                value={searchText}
                onChange={(event) => changingSearchText?.(event.target.value)}    
            />
        )}
        <Box 
            flex={1} 
            display={"flex"} 
            justifyContent={"end"}
        >
            {(showNewButton &&               
                <Button 
                    variant="contained"
                    endIcon={<Icon>add</Icon>}
                    onClick={isNewClick}
                >
                    {textNewButton}
                </Button>
            )}
        </Box>
    </Box>
  )
}
