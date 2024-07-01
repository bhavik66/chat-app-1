import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  fetchMessagesRequest,
  fetchMessagesSuccess,
  fetchMessagesFailure,
  sendMessageRequest,
  sendMessageSuccess,
  sendMessageFailure,
  editMessageRequest,
  editMessageSuccess,
  editMessageFailure,
  deleteMessageRequest,
  deleteMessageSuccess,
  deleteMessageFailure,
} from './chatSlice';
import {
  fetchMessagesApi,
  sendMessageApi,
  editMessageApi,
  deleteMessageApi,
} from '../../../api/chatApi';
import { Message } from '../../../types/chat';

function* fetchMessagesSaga(): Generator<any, void, Message[]> {
  try {
    const messages = yield call(fetchMessagesApi);
    yield put(fetchMessagesSuccess(messages));
  } catch (error: any) {
    yield put(fetchMessagesFailure(error.message));
  }
}

function* sendMessageSaga(
  action: PayloadAction<Message>,
): Generator<any, void, Message> {
  try {
    const message = yield call(sendMessageApi, action.payload);
    yield put(sendMessageSuccess(message));
  } catch (error: any) {
    yield put(sendMessageFailure(error.message));
  }
}

function* editMessageSaga(
  action: PayloadAction<Message>,
): Generator<any, void, Message> {
  try {
    const message = yield call(editMessageApi, action.payload);
    yield put(editMessageSuccess(message));
  } catch (error: any) {
    yield put(editMessageFailure(error.message));
  }
}

function* deleteMessageSaga(
  action: PayloadAction<string>,
): Generator<any, void, void> {
  try {
    yield call(deleteMessageApi, action.payload);
    yield put(deleteMessageSuccess(action.payload));
  } catch (error: any) {
    yield put(deleteMessageFailure(error.message));
  }
}

export function* watchChatSagas(): Generator {
  yield takeEvery(fetchMessagesRequest.type, fetchMessagesSaga);
  yield takeEvery(sendMessageRequest.type, sendMessageSaga);
  yield takeEvery(editMessageRequest.type, editMessageSaga);
  yield takeEvery(deleteMessageRequest.type, deleteMessageSaga);
}
