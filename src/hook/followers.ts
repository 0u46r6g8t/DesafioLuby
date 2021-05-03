import { useState, useEffect } from 'react';

// Interfaces
import { IPropsFollowers } from '../interface';

const HookRepos = (username:string): IPropsFollowers[] => {
  const [followers, setFollowers] = useState<IPropsFollowers[]>([]);

  useEffect(() => {
    const hook = async () => {
      const response = await fetch(`https://api.github.com/users/${username}/followers`);
      const data = await response.json();
      setFollowers(data);
    };

    hook();
  }, [username]);

  return followers;
};

export default HookRepos;
