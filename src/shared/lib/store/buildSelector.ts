import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

// TODO RootState надо переделать типизацию

type Selector<T, P> = (state: T) => P;
type Selectors<T, P> = Array<(state: RootState | T) => P | any>;
type SelectorWithParam<T, P, S> = (state: T, param: S) => P | undefined;
type SelectorsWithParam<T, S> = [(state: RootState) => T, (state: RootState, param: S) => S];
type Result<T, P> = [() => P, Selector<T, P>];
type ResultWithParam<T, P, S> = [(param: S) => P | undefined, SelectorWithParam<T, P, S>];

export function buildSelector<T, P = T>(selector: Selector<T, P>, selectors?: Selectors<T, P>): Result<T, P> {
  if (Array.isArray(selectors)) {
    const cachedSelector = createSelector(selectors, selector);
    const useSelectorHook = () => useSelector(cachedSelector);
    return [useSelectorHook, selector];
  }
  const useSelectorHook = () => useSelector(selector);

  return [useSelectorHook, selector];
}

export function buildSelectorWithParam<T, P, S = unknown>(
  selector: SelectorWithParam<T, P, S>,
  selectors: SelectorsWithParam<T, S>
): ResultWithParam<T, P, S> {
  // console.log('%c selector: ', 'font-weight:bold;color:cyan;font-style:italic;', selector);
  // console.log('%c selectors: ', 'font-weight:bold;color:orange;font-style:italic;', selectors);
  const useSelectorHook = (param: S) => {
    const cachedSelector = createSelector(selectors, selector);
    return useSelector(state => cachedSelector(state, param));
  };

  return [useSelectorHook, selector];
}
