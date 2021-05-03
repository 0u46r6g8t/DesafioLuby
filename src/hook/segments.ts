import React, { useState, useEffect } from 'react';

// Interfaces
import { IPropsGit } from '../interface';

const HookApi = (username:string): IPropsGit => {
  const [user, setUsers] = useState<IPropsGit>({} as IPropsGit);

  useEffect(() => {
    const hook = async () => {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUsers(data);
    };

    hook();
  }, []);

  return user;
};

export default HookApi;
