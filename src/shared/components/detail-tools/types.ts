export interface IDetailToolsProps{
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