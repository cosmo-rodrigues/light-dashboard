import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IFatura } from '../../dtos/faturas';
import { formatDate, formatPrice } from '../../helpers/fortamatters';

export function OtherBills({
  faturas,
  current,
}: {
  faturas: IFatura[];
  current: string;
}) {
  return (
    <div>
      {faturas
        .filter((fatura) => fatura.numeroDaNotaNF != current)
        .map((fatura) => {
          return (
            <Accordion key={fatura.numeroDaNotaNF}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{formatDate(fatura.faturaReferenteA)}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Vencimento: {formatDate(fatura.dataDoVencimento)}
                </Typography>
                <Typography>
                  Valor: {formatPrice(fatura.valorTotalDaFatura)}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
    </div>
  );
}
