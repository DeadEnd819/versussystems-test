import { useEffect, useState } from 'react'

const useKeyPress = (targetKey: string, cb: () => void, flag?: boolean) => {
  const [keyPressed, setKeyPressed] = useState<boolean>(false);

  const downHandler = ({ key }: any) => {
    if (key === targetKey) {
      setKeyPressed(true)
      cb();
    }
  };

  const upHandler = ({ key }: any) => {
    if (key === targetKey) setKeyPressed(false);
  };

  useEffect(() => {
    if (flag !== undefined && !flag) return;

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [flag]);

  return keyPressed;
};

export default useKeyPress
