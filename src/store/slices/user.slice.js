import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

const token = Cookies.get('token') || ''

const initialState = {
    token,
    user:  null,
    isLogged:false
   }

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogout: state => {
      Cookies.remove('token')
      state.token = ''
      state.isLogged = false
    },

    userLogin: (state, action) => {
      Cookies.set('token', action.payload, { expires: 10 })
      localStorage.setItem('login-user', JSON.stringify(action.payload))
      state.token = action.payload.token
      state.user = action.payload.user
      state.isLogged = true
    },
    logout: (state) => {
      localStorage.remove('login-user');
      state.token = ''
      state.user = ''
      state.isLogged = false
    
    },
    addToLastSeen: (state, action) => {
      let isItemExist = state.lastSeen.find(item => item.productID === action.payload.productID)

      if (!isItemExist) {
        if (state.lastSeen.length === 15) {
          state.lastSeen.splice(14, 1)
        }
        state.lastSeen.unshift(action.payload)
        localStorage.setItem('lastSeen', JSON.stringify(state.lastSeen))
      }
    },
  },
})

export const { userLogout, userLogin, logout, addToLastSeen} = userSlice.actions

export default userSlice.reducer