import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';


function TicketList(props){ // add props as parameters
  return (
    <React.Fragment>
      <hr/>
        {props.ticketList.map((ticket) => // loop through the list passed down from TicketControl
          <Ticket 
            whenTicketClicked = {props.onTicketSelection}
            names={ticket.names}
            location={ticket.location}
            issue={ticket.issue}
            id={ticket.id}
            key={ticket.id}/>
        )}
    </React.Fragment>
  );
}

// add propTypes for ticketList
TicketList.propTypes = {
  ticketList: PropTypes.array,
  onTicketSelection: PropTypes.func
};

export default TicketList;