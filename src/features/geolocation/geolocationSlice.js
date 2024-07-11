import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  geolocation: { lat: 32.1109, lng: 76.5363 },
};

const geolocationSlice = createSlice({
  name: "geolocation",
  initialState,
  reducers: {
    saveGeoCode: (state, action) => {
      return { ...state, geolocation: action.payload };
    },
  },
});

export const { saveGeoCode } = geolocationSlice.actions;
export default geolocationSlice;
