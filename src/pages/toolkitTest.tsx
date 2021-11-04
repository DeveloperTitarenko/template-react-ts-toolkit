import React from 'react';
import {useAppSelector, useAppDispatch} from "../hooks/toolkitHook";
import {userSlice} from "../store/reducers/UserSlice";

const ToolkitTest = () => {
  const {users, isLoading, error, count} = useAppSelector(state => state.userReducer)
  const {increment} = userSlice.actions
  const dispatch = useAppDispatch()
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(1))}>+</button>
    </div>
  );
};

export default ToolkitTest;