export interface IDetailToolsProps {
  children?: React.ReactNode;
  textNewButton?: string;

  showNewButton?: boolean;
  showBackButton?: boolean;
  showDeleteButton?: boolean;
  showSaveButton?: boolean;
  showSaveAndDeleteButton?: boolean;

  showNewButtonLoading?: boolean;
  showBackButtonLoading?: boolean;
  showDeleteButtonLoading?: boolean;
  showSaveButtonLoading?: boolean;
  showSaveAndDeleteButtonLoading?: boolean;

  clickButtonNew?: () => void;
  clickButtonBack?: () => void;
  clickButtonDelete?: () => void;
  clickButtonSave?: () => void;
  clickButtonSaveAndClose?: () => void;
}
