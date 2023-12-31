'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        {user.picture && (
          <Image
            width={96}
            height={96}
            src={user.picture}
            alt={user.name || 'User picture'}
          />
        )}
        <h2>{user.name}</h2>
        <p>{user.email}</p>

        <a href='/api/auth/logout'>Logout</a>
      </div>
    )
  );
}
