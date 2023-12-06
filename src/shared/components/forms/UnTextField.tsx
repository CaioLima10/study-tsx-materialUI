import { TextField , TextFieldProps } from "@mui/material";
import { useField } from "@unform/core";
import { useEffect, useState } from "react";


type TUnTextFieldProps = TextFieldProps &{
    name: string
}

export default function UnTextField({ name , ...rest }: TUnTextFieldProps) {

    const { registerField , fieldName , 
            defaultValue , clearError , error } = useField(name)

    const [ value , setValue ] = useState(defaultValue || "")        

        useEffect(() => {
            registerField({
                name: fieldName,
                getValue: () => value,
                setValue: (_ ,newValue) => setValue(newValue)
            })
        }, [registerField, setValue, fieldName, value])    

  return (
    <TextField
        { ...rest }
        error={!!error}
        helperText={error}
        defaultValue={defaultValue}
        onKeyDown={() => error ? clearError : undefined}
        value={value}
        onChange={(event) => 
            setValue(event.target.value)}
    />
  )
}
