import React from 'react';
import {Modals, ModalDialog, ModalHeader, ModalClose, ModalTitleBox, ModalTitle } from '../../styled/styledComponents'

function Modal(props) {
  return (
    <Modals>
      <ModalDialog>
        <ModalHeader>
          <ModalClose onClick={props.onClouseModal}>x</ModalClose>
           <ModalTitleBox>
            <ModalTitle>{props.message}</ModalTitle>
           </ModalTitleBox>
        </ModalHeader>
      </ModalDialog>
    </Modals>
  );
}

export default Modal;
