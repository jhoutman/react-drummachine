import { put } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import * as actions from '../actions/Drummachine';

export function* bpmTock() {
  yield delay(300);
  yield put(actions.bpmTock());
}

export function* bpmPartTock() {
  yield delay(300);
  yield put(actions.bpmPartTock());
}
