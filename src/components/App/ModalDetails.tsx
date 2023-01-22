import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Employees } from '../../types/Employees';
import { Shifts } from '../../types/Shifts';
import moment from 'moment'

interface IModalDetails {
  setOpen: (isOpen: boolean) => void;
  open: boolean;
  employeeDetails: Employees[] | null | any;
}

export const ModalDetails: React.FC<IModalDetails> = ({ setOpen, open, employeeDetails}) => {

  if (!employeeDetails) {
    return null;
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="md"
      >
        <DialogTitle id="alert-dialog-title">
          Employee Roster Overview - {`${employeeDetails[0].first_name} ${employeeDetails[0].last_name}`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Start time</TableCell>
                  <TableCell>End time</TableCell>
                  <TableCell>Break Duration</TableCell>
                  <TableCell>Role</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employeeDetails[0]?.shifts?.map((shift: Shifts | any) => {

                  return (
                    <TableRow
                      key={shift.start_time}
                    >
                      <TableCell>
                        {moment(shift.start_time).format('YYYY-MMM-DD')}
                      </TableCell>
                      <TableCell>
                        {moment(shift.end_time).format('YYYY-MMM-DD')}
                      </TableCell>
                      <TableCell>{shift.break_duration/3600} hr/s</TableCell>
                      <TableCell>{shift.roles[0].name}</TableCell>
                    </TableRow>
                  )
                })}


              </TableBody>
            </Table>
          </TableContainer>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}