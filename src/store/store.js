import {configureStore} from '@reduxjs/toolkit'
import Slice from '../feature/Todo/feature'


export const todoReducer = configureStore({
reducer : Slice
})