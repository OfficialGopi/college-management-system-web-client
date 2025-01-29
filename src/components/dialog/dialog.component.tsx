import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const DialogComponent = ({
  title,
  content,
  dialogOpen,
  handleClose,
  handleTodo,
  todo,
  children,
}: {
  title: string;
  content?: string;
  todo: string;
  dialogOpen: boolean;
  handleClose: () => void;
  handleTodo: () => void;
  children?: any;
}) => {
  return (
    <Dialog open={dialogOpen} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {content && <p>{content}</p>}
        {!content && children}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        <Button onClick={handleTodo}>{todo}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogComponent;
