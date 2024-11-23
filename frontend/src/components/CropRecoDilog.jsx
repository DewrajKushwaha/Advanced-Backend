import React from 'react';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

const CropRecoDilog = ({ open, message, onClose }) => {
    
    return (
        <>
            <Dialog open={open} handler={onClose} className='bg-green-300 ' >
                <DialogHeader className='font-black' >Prediction Result</DialogHeader>
                <DialogBody>
                    <div className='text-black font-semibold text-lg '>
                        
                        <span>Congratulations! Prediction is successful. Our recommendation is:</span>
                         <span className='text-red-600 font-extrabold'> {message.toUpperCase()}</span>  

                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button variant="text" color="red" onClick={onClose} className="mr-1 text-sm  p-1 border-2 hover:text-green-900 hover:font-extrabold hover:bg-white 
                    ">
                        <span>Close</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
};

export default CropRecoDilog;