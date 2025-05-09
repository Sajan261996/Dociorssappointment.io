import React, {useState } from 'react';
import { Button, Card, CardContent, CardHeader, Dialog, FormControl, InputLabel, MenuItem, Select, TextField, Typography, Box } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const BookAppointment = ({ open, handleClose, doctor }) => {
    const [ selectDate, setselectDate] = useState(new Date());
    const [ timeSlot, setTimeSlot ] = useState('');
    const [ medicalHistory, setMedicalHistory ] = useState('');
    const [ symtoms, setSymtoms ] = useState('');

    const handleSubmit = () => {
        const appointmentDate = {
            doctorsName: doctor.name,
            date: selectDate,
            timeSlot,
            medicalHistory,
            symtoms
        };

        console.log('Appointment Booked:', appointmentDate);
        handleClose();
    };

    return(
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <Card sx={{ bgcolor: '#f5f5f5', minHeight: '600px', p: 2 }}>
                <CardHeader 
                  title={<Typography variant='h6' style={{backgroundColor:'#800080', color:'white', padding:'12px', fontWeight: 'bold', textAlign: 'left' }}>Book An Appointment</Typography>}
                />
                <CardContent>
                    <Box 
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        alignItems: 'left',
                        justifyContent: 'left',
                        paddingX:2
                    }}
                    >
                    <TextField
                    fullWidth
                    label="Doctors Name"
                    value={doctor.name}
                    inputProps={{ readOnly: true }}
                    margin='normal'
                    />

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                        label="Select Date"
                        value={selectDate}
                        onChange={(newDate) => setselectDate(newDate)}
                        renderInput={(params) => <TextField fullWidth margin='normal' {...params}/>}
                        />
                    </LocalizationProvider>

                    <FormControl fullWidth margin='normal'>
                        <InputLabel>Time Slot</InputLabel>
                        <Select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        label="Time Slot"
                        >
                        <MenuItem value={'08AM-09AM'}>08AM-09AM</MenuItem>
                        <MenuItem value={'10AM-11AM'}>10AM-11AM</MenuItem>
                        <MenuItem value={'12AM-01PM'}>12AM-01PM</MenuItem>
                        <MenuItem value={'01PM-02PM'}>01PM-02PM</MenuItem>
                        <MenuItem value={'02PM-03PM'}>02PM-03PM</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                    label="Medical History"
                    fullWidth
                    multiline
                    row={3}
                    margin='normal'
                    value={medicalHistory}
                    onChange={(e) => setMedicalHistory(e.target.value)}
                    />
                    <TextField
                    label="Symtoms"
                    fullWidth
                    multiline
                    row={3}
                    margin='normal'
                    value={symtoms}
                    />
                    <Button
                    variant="contained"
                    colour="primary"
                    onClick={handleSubmit}
                    style={{ marginTop: '10px' }}
                    > BOOK Appointment</Button>
                    </Box>
                </CardContent>
            </Card>
        </Dialog>
    )
}

export default BookAppointment;