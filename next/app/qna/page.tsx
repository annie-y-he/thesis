'use client';

const BP = process.env.NEXT_PUBLIC_BASE_PATH;
import { useState } from 'react';
import s from './page.module.scss'
import Markdown from 'react-markdown'

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
  if (!threadId) {
    setMsgList(body.msg.map((item: any) => item._id));
  } else {
    setMsgList(body.msg.map((item: any) => "**" + item.role + ": **" + item.content));
  }
}

export default function QNA () {
  const [msgList, setMsgList] = useState<string[]>([]);

  return (
    <div className={s.main}>
      <button onClick={() => getMsg("", setMsgList)}>GET THREADS</button>
      <div className={s.list}>
        {msgList.map((item) => (
          item.includes(": ") ? 
          item.length < 20000 ? <Markdown>{item}</Markdown>: null :
          <div onClick={() => getMsg(item, setMsgList)}>{item}</div>
        ))}
      </div>
    </div>
  )
}