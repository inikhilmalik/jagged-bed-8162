import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,Box,Button
  } from '@chakra-ui/react'
import React from 'react'  
import SignUp from './SignUp'

export default function Modals({text,comp}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
  
    return (
      <>
       
  
        <Button fontWeight={400} variant={"none"} onClick={onOpen}>
          {text}
        </Button>
        

        <Modal   finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
                {comp}
            
            <ModalCloseButton />
          
          </ModalContent>
        </Modal>
      </>
    )
  }