import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit'

const DUMP_EXPENSES = [
    { id: 'e1', title: 'News Paper', amount: 94.12, date: new Date(2020, 7, 14) },
    { id: 'e2', title: 'New TV', amount: 799.12, date: new Date(2021, 7, 14) },
    { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2023, 7, 28) },
    { id: 'e4', title: 'New Desk(Wooden)', amount: 450, date: new Date(2022, 5, 12) },
];

const initialState = { items: DUMP_EXPENSES }