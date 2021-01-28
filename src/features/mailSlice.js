 import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMessageToOpen: false,
  },
  reducers: {
    openSendMessage: state => {
      state.sendMessageToOpen = true;
    },
    closeSendMessage: state => {
      state.sendMessageToOpen = false;
    },
   
  },
});

export const { openSendMessage, closeSendMessage } =mailSlice.actions;

export const selectopenSendMessage = state => state.mail.sendMessageToOpen;
// export const selectcloseSendMessage = state => state.mail.closeSendMessage;


export default mailSlice.reducer;
