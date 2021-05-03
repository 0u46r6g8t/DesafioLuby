import { useState, useEffect } from 'react';

// Interfaces
import { IPropsRepos } from '../interface';

const HookRepos = (username:string): IPropsRepos[] => {
  const [repos, setRepos] = useState<IPropsRepos[]>([]);

  useEffect(() => {
    const hook = async () => {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      const data = await response.json();
      setRepos(data);
    };

    hook();
  }, [username]);

  return repos;
};

export default HookRepos;
