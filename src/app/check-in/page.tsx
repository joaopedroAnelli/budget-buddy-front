'use client';

import { redirect } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect, useState } from 'react';

export default function CheckInPage() {
  const { isLoading: isLoadingUser, user, error } = useUser();
  const [firstPage, setFirstPage] = useState<string | null>(null);

  useEffect(() => {
    if (!user) return;

    new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('userProfile');
      }, 5000);
    }).then((page) => {
      setFirstPage(page);
    });
  }, [user]);

  if (isLoadingUser) return <div>Checking in...</div>;

  if (error) return <div>{error.message}</div>;

  if (!user) return redirect('/api/auth/login?returnTo=/check-in');

  if (firstPage === null) return <div>Initializing...</div>;

  if (firstPage === 'userProfile') return redirect('/app/user-profile');

  return redirect('/');
}
