// @ts-nocheck
import * as React from 'react';
import * as Material from '@mui/material';
import { IFatura } from '../../dtos/faturas';
import { UseDownloadFaturas } from '../../store/queries/faturas';

interface Column {
  id:
    | 'numeroDoCliente'
    | 'nomeDoCliente'
    | 'faturaReferenteA'
    | 'valorTotalDaFatura'
    | 'dataDoVencimento'
    | 'action';
  label: string;
  minWidth?: number;
  align: 'right' | 'left' | 'center' | 'inherit' | 'justify' | undefined;
}

const columns: readonly Column[] = [
  {
    id: 'numeroDoCliente',
    label: 'Nº do Cliente',
    minWidth: 100,
    align: 'left',
  },
  {
    id: 'nomeDoCliente',
    label: 'Nome do Cliente',
    minWidth: 100,
    align: 'left',
  },
  {
    id: 'faturaReferenteA',
    label: 'Mês Referido',
    minWidth: 100,
    align: 'left',
  },
  {
    id: 'valorTotalDaFatura',
    label: 'Valor da Fatura',
    minWidth: 100,
    align: 'left',
  },
  {
    id: 'dataDoVencimento',
    label: 'Vencimento',
    minWidth: 100,
    align: 'left',
  },
  {
    id: 'action',
    label: '',
    minWidth: 10,
    align: 'center',
  },
];

interface Data {
  numeroDoCliente: string;
  nomeDoCliente: string;
  faturaReferenteA: string;
  valorTotalDaFatura: string;
  dataDoVencimento: string;
  numeroDaNotaNF: string;
}

function formatDate(date: string) {
  const newDate = new Date(date);
  return new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(newDate);
}

function formatPrice(value: string) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(value));
}

function createData(
  numeroDoCliente: string,
  nomeDoCliente: string,
  faturaReferenteA: string,
  valorTotalDaFatura: string,
  dataDoVencimento: string,
  numeroDaNotaNF: string
): Data {
  faturaReferenteA = formatDate(faturaReferenteA);
  dataDoVencimento = formatDate(dataDoVencimento);
  valorTotalDaFatura = formatPrice(valorTotalDaFatura);
  return {
    numeroDoCliente,
    nomeDoCliente,
    faturaReferenteA,
    valorTotalDaFatura,
    dataDoVencimento,
    numeroDaNotaNF,
  };
}

export function List({ faturas }: { faturas: IFatura[] }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [faturaNf, setFaturaNf] = React.useState(null);
  const { data } = UseDownloadFaturas(faturaNf);

  const rows = faturas.map(
    ({
      numeroDoCliente,
      nomeDoCliente,
      faturaReferenteA,
      valorTotalDaFatura,
      dataDoVencimento,
      numeroDaNotaNF,
    }) =>
      createData(
        numeroDoCliente,
        nomeDoCliente,
        faturaReferenteA,
        valorTotalDaFatura,
        dataDoVencimento,
        numeroDaNotaNF
      )
  );

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleFaturaDownload = React.useCallback(() => {
    if (data && data.link) {
      const link = document.createElement('a');
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      link.href = data.link;
      link.target = '_blank';
      link.setAttribute('download', 'fatura.pdf');

      setFaturaNf(null);
      link.click();
    } else {
      console.error('No download link found!');
    }
  }, [data]);

  React.useEffect(() => {
    if (faturaNf) {
      console.log(faturaNf);
      handleFaturaDownload();
    }
  }, [faturaNf, handleFaturaDownload]);

  return (
    <Material.Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Material.Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ padding: '20px' }}
      >
        Faturas Cadastradas
      </Material.Typography>
      <Material.Divider />
      <Material.TableContainer sx={{ maxHeight: 440 }}>
        <Material.Table stickyHeader aria-label="sticky table">
          <Material.TableHead>
            <Material.TableRow>
              {columns.map((column) => (
                <Material.TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </Material.TableCell>
              ))}
            </Material.TableRow>
          </Material.TableHead>
          <Material.TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <Material.TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={`${index}-${row.numeroDaNotaNF}`}
                  >
                    {columns.map((column) => {
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      const value = row[column.id];

                      return (
                        <>
                          <Material.TableCell
                            key={column.id}
                            align={column.align}
                          >
                            {value}
                          </Material.TableCell>
                        </>
                      );
                    })}
                    <Material.TableCell>
                      <Material.Button
                        onClick={() => setFaturaNf(row.numeroDaNotaNF)}
                        size="small"
                        variant="contained"
                      >
                        BAIXAR
                      </Material.Button>
                    </Material.TableCell>
                  </Material.TableRow>
                );
              })}
          </Material.TableBody>
        </Material.Table>
      </Material.TableContainer>
      <Material.TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Material.Paper>
  );
}
