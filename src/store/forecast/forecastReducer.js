const initState = {
   cityList: (
      (localStorage.getItem('cityes')) === null ? 
      [] :
      JSON.parse(localStorage.getItem('cityes'))
   ),
   tableShow: "plug",
   cityOnTable: null,
   lastAdded: null,
}

const storeControl = {
   SET_TABLE_SHOW: (state, payload) => {
      return {
         ...state,
         tableShow: payload,
      }
   },

   ADD_CITY: (state, payload) => {
      return {
         ...state,
         cityList: [...state.cityList, payload],
         tableShow: "cityAdded",
         lastAdded: payload.name,
      }
   },

   CHOOSE_CITY_TO_SHOW: (state, payload) => {
      return {
         ...state,
         tableShow: "city",
         cityOnTable: {
            name: payload.name,
            coord: payload.coord,
         },
      }
   },

   DELETE_CITY: (state, payload) => {
      const newList = state.cityList.filter(city => city.name !== payload)

      return {
         ...state,
         cityList: [...newList],
         tableShow: "plug",
      }
   }
}

export const forecastReducer = (state = initState, action) => {
   const {type, payload} = action;
   if (!(type in storeControl)) return state;
   return storeControl[type](state, payload);
};