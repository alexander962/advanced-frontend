import { createSelector } from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';
import { getCounter } from '../getCounter/getCounter';

// делаем комбинацию селекторов
export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema) => counter.value,
);
