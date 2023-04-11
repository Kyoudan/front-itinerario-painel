import { useEffect, useState } from "react";



export const MessageBalloon = (messageProps: string) => {
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    setMessage(messageProps);
  }, [messageProps]);

  return <p>{message}</p>;
};
