import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const LogoutDialog = ({
  logoutDialogOpen,
  handleLogoutConfirm,
  handleLogoutDialogClose,
}: {
  logoutDialogOpen: boolean;
  handleLogoutConfirm: () => void;
  handleLogoutDialogClose: () => void;
}) => {
  return (
    <Dialog open={logoutDialogOpen} onClose={handleLogoutDialogClose}>
      <DialogTitle>Logout Confirmation</DialogTitle>
      <DialogContent>
        <p>Are you sure you want to logout?</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleLogoutDialogClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleLogoutConfirm} style={{ color: "red" }}>
          Logout
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LogoutDialog;
