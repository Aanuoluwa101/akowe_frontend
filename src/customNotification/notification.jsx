import React, { useEffect, useState } from 'react';
import { useNotification } from './useNotification';
import { useDispatch } from 'react-redux';
import { newNotification, Notification as NotificationType } from '../redux/notificationSlice';
import Snackbar from '@mui/material/Snackbar';
import {clearNotification} from '../redux/notificationSlice'

export function Notification() {
  const { data, messageId } = useNotification();
  const [notOpen, setNotOpen] = useState(!!data.message);
  const dispatch = useDispatch();
  const [ severityColor, setSeverityColor ] = useState()

  useEffect(() => {
    setNotOpen(!!data.message);
  }, [data.message]);

  useEffect(() => {
    if (data.backgroundColor == 'success') {
      setSeverityColor('#027c39')
    } else if (data.backgroundColor == 'failure') {
      setSeverityColor('#901717')
    } else if (data.backgroundColor == 'warning'){
      setSeverityColor('#b8591e')
    }
  }, [data.backgroundColor])

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={notOpen}
      autoHideDuration={3000}
      onClose={() => dispatch(clearNotification())}
      message={data.message}
      ContentProps={{style: {backgroundColor: severityColor || '#5b87fe'}}}

      action={
        <React.Fragment>
          {/* <Button color="secondary" size="small" onClick={handleClose}>
            Close
          </Button> */}
          {/* <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton> */}
        </React.Fragment>
      }
    />
  );
}
