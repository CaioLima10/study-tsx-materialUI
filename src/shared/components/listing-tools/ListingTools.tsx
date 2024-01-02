import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";

import { Environment } from "../../environment";
import { forwardRef } from "react";

interface IListingToolsProps{
    searchText?: string
    showInputSearch?: boolean
    changingSearchText?: ( newText: string ) => void
    isClickPDF?: () => void

    textNewButton?: string
    showNewButton?:  boolean
    isNewClick?: () => void
}

export default forwardRef(function ListingTools({
    searchText = '',
    showInputSearch = false, 
    changingSearchText,
    textNewButton = 'novo',
    showNewButton = false,
    isNewClick,
    isClickPDF,
}: IListingToolsProps ) {

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
                sx={{ width: '75ch' }}
                placeholder={Environment.INPUT_SEARCH}
                value={searchText}
                onChange={(event) => changingSearchText?.(event.target.value)}    
            />
        )}
        <Box 
            flex={1} 
            gap={1}
            display={"flex"} 
            justifyContent={"end"}
        >
            <Button variant="contained" color="success"
                onClick={isClickPDF}
            >
                Relatorio PDF
            </Button>
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
})
