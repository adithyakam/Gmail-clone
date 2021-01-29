 import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectedMail:null,
    sendMessageToOpen: false,
  },
  reducers: {

    selectMail :(state,action)=>{
      state.selectedMail  =action.payload
    },

    openSendMessage: state => {
      state.sendMessageToOpen = true;
    },
    closeSendMessage: state => {
      state.sendMessageToOpen = false;
    },
   
  },
});
export const selectOpenMail =(state )=>state.mail.selectOpenMail

export const { selectMail, openSendMessage, closeSendMessage } =mailSlice.actions;

export const selectopenSendMessage = state => state.mail.sendMessageToOpen;
// export const selectcloseSendMessage = state => state.mail.closeSendMessage;


export default mailSlice.reducer;
