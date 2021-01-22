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
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { openSendMessage, closeSendMessage } =mailSlice.actions;

// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };
export const selectopenSendMessage = state => state.mail.openSendMessage;
export const selectcloseSendMessage = state => state.mail.closeSendMessage;


export default mailSlice.reducer;
