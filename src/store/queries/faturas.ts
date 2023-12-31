import { useQuery } from '@tanstack/react-query';
import { api } from '../../services/api';
import { IFatura } from '../../dtos/faturas';

type Data = {
  faturas: IFatura[];
};

async function getAllRegisteredFaturas() {
  const {
    data: { faturas },
  } = await api.get<Data>('/fatura/listar');

  return faturas || [];
}

async function getFaturasFromUser(userNumber: string) {
  const {
    data: { faturas },
  } = await api.get<Data>(`/fatura/listar/${userNumber}`);

  return faturas || [];
}

async function downloadRegisteredFatura(numeroDaNotaNF: string) {
  const { data } = await api.get<string>(`/fatura/baixar/${numeroDaNotaNF}`);

  return data;
}

export function useGetAllFaturas() {
  return useQuery({
    queryKey: ['all-fatura'],
    queryFn: () => getAllRegisteredFaturas(),
  });
}

export function useGetClientFaturas(userNumber: string) {
  return useQuery({
    queryKey: ['client-faturas', userNumber],
    queryFn: () => getFaturasFromUser(userNumber),
  });
}

export function UseDownloadFaturas(numeroDaNotaNF: string) {
  return useQuery({
    queryKey: ['baixar-fatura', numeroDaNotaNF],
    queryFn: () => downloadRegisteredFatura(numeroDaNotaNF),
  });
}
