import {
  AnyAction, combineReducers, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ReducerManager, StateSchema, StateSchemaKey } from './StateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  // хранит название редьюсеров, которые мы хотим удалить
  let keysToRemove: Array<StateSchemaKey> = [];

  return {
    // возвращает редьюсеры
    getReducerMap: () => reducers,
    // эта функция и есть редьюсер
    reduce: (state: StateSchema, action: AnyAction) => {
      // если в массиве для удаления есть какие то ключи, то мы эти ключи из стейта полностью удаляем
      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((key) => {
          // по ключу удаляем редьюсер
          delete state[key];
        });
        keysToRemove = [];
      }
      // возваращаем новый редьюсер без лишних ключей
      return combinedReducer(state, action);
    },

    // по ключу добавляет новый редьюсер
    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;

      combinedReducer = combineReducers(reducers);
    },

    // добавляет ключ в массив и удаляет этот ключ и редьюсера
    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
}
