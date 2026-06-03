import { useEffect, useState } from 'react';
import { fetchRepos } from '../lib/github';

/**
 * Load public GitHub repos with loading/error state.
 * Backed by the 5-minute localStorage cache in lib/github.
 * @returns {{ repos: import('../lib/github').Repo[], loading: boolean, error: Error|null }}
 */
export const useGithubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    setError(null);
    fetchRepos()
      .then((data) => {
        if (alive) setRepos(data);
      })
      .catch((err) => {
        if (alive) setError(err);
      })
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => {
      alive = false;
    };
  }, []);

  return { repos, loading, error };
};
