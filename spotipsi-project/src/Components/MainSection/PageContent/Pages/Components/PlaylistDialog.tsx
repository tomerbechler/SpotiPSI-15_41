import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useStyles from "../../FetchAndPresent/presentSongsStyles";

interface Props{
    onSubmit: (value: string) => void;
}


export default function FormDialog({ onSubmit }:Props) {
    const { classes } = useStyles();
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const handleClickOpen = () => {setOpen(true)};

  const handleClose = () => {setOpen(false)
                             setInputValue("");};
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(inputValue)
    onSubmit(inputValue)
    handleClose();
  };

  return (
    <React.Fragment>
      <Button className={classes.addPlaylistBtn} onClick={handleClickOpen}>צור פלייליסט +</Button>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>יצירת פלייליסט חדש</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} id="playlist-form">
            <TextField
              autoFocus
              required
              fullWidth
              variant="standard"
              label= "שם הפלייליסט"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ביטול</Button>
          <Button type="submit" form="playlist-form">
            צור
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}