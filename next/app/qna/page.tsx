'use client';

const BP = process.env.NEXT_PUBLIC_BASE_PATH;
import { useState } from 'react';
import s from './page.module.scss'

const getMsg = async (threadId: string, setMsgList: React.Dispatch<React.SetStateAction<string[]>>) => {
  const response = await fetch(BP + '/api/msg', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      threadId: threadId
    }),
  });

  const body = await response.json();

  console.log(body);

  setMsgList(body.msg);
}

export default function QNA () {
  const [threadId, setThreadId] = useState("");
  const [msgList, setMsgList] = useState<string[]>([]);

  return (
    <div className={s.main}>
      <button onClick={() => getMsg(threadId, setMsgList)}>GET THREADS</button>
      <div className={s.list}>
        {msgList.map((item) => (<div onClick={() => getMsg(item, setMsgList)}>{item}</div>))}
      </div>
    </div>
  )
}