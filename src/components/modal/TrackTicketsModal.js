import React from "react";
import Modal from "react-modal";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";

const customStyles = {
  content: {
    top: "50%",
    width: "25%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const TrackTicketsModal = ({
  onChange,
  submitClickHandler,
  cancelClickHandler,
  open,
  close,
}) => {
  return (
    <Modal
      ariaHideApp={false}
      isOpen={open}
      contentLabel="New Ticket"
      onRequestClose={close}
      style={customStyles}
    >
      <FormControl required style={{ width: "100%" }}>
        <InputLabel htmlFor="imei">IMEI Number</InputLabel>
        <Input id="imei" type="text" onChange={onChange("imei")} />
      </FormControl>
      <br />
      <br />
      <FormControl style={{ width: "100%" }}>
        <InputLabel htmlFor="issueType">Issue Type</InputLabel>
        <Input id="issueType" type="text" onChange={onChange("issueType")} />
      </FormControl>
      <br />
      <br />
      <FormControl required style={{ width: "100%" }}>
        <InputLabel htmlFor="description">Description</InputLabel>
        <Input
          id="description"
          type="text"
          onChange={onChange("description")}
        />
      </FormControl>
      <br />
      <br />
      <FormControl required style={{ width: "100%" }}>
        <InputLabel htmlFor="additionalComments">
          Additional Comments
        </InputLabel>
        <Input
          id="additionalComments"
          type="text"
          onChange={onChange("additionalComments")}
        />
      </FormControl>
      <br />
      <br />
      <FormControl required style={{ width: "100%" }}>
        <InputLabel htmlFor="ticketRaisedBy">Ticket Raised By</InputLabel>
        <Input
          id="ticketRaisedBy"
          type="text"
          onChange={onChange("ticketRaisedBy")}
        />
      </FormControl>
      <br />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={submitClickHandler}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={cancelClickHandler}
        >
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default TrackTicketsModal;
