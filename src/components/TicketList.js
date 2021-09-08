import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';


function TicketList(props){ // add props as parameters
  return (
    <React.Fragment>
      <hr/>
        {props.ticketList.map((ticket, index) => // loop through the list passed down from TicketControl
          <Ticket names={ticket.names}
            location={ticket.location}
            issue={ticket.issue}
            key={index}/>
        )}
    </React.Fragment>
  );
}

// add propTypes for ticketList
TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;