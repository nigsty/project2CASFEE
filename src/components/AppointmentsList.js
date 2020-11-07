import React, { Component } from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Button from '@material-ui/core/Button';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Moment from 'react-moment';
import firebase from '../services/Firebase';


const db = firebase.firestore();

class AppointmentsList extends Component {

	render() {
		const { appointments } = this.props;
		const myAppointments = appointments.map((item) => {
			return (
        <TableRow key={item.id}>					
          <TableCell align="left">{item.thema}</TableCell>
          <TableCell align="left">{item.institution}</TableCell>
          <TableCell align="left">
          <Moment 
                date = {item.aptDateTime}
                format="DD.MM.YYYY hh:mm"
             />
          </TableCell>
          <TableCell align="left">
            <Button 
              title="Termin bearbeiten"
              onClick={e=>this.props.editAppointment(e, item.id)}>
				  	  <EditOutlinedIcon style={{ fill: '#009444' }}/>
			  	  </Button>	
          </TableCell>
        <TableCell align="left">
            <Button 
              title="Termin löschen"
              onClick={e=>this.props.deleteAppointment(e, item.id)}>
					<DeleteOutlineIcon style={{ fill: '#F15A24' }} />
				</Button>	</TableCell>
        </TableRow>
			);
    });
    return myAppointments;
    
	}
}

export default AppointmentsList;
