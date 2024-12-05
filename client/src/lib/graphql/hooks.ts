import { useQuery } from '@apollo/client';
import { getMember } from './queries';
import { Member } from '../../models';

export function useMember(id: string) {
  const { data, loading, error } = useQuery(getMember, {
    variables: { id },
  });

  return { member: data?.member as Member, loading, error: Boolean(error) };
}

