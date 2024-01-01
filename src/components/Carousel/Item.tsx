import * as Material from '@mui/material';
import * as Styles from './styles.ts';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import CountUp from 'react-countup';

import { IFatura } from '../../dtos/faturas';
import { BarChart } from '../Charts/BarChart/BarChart.tsx';
import { OtherBills } from '../OtherBills/OtherBills.tsx';
import { DonutChart } from '../Charts/DonutChart/DonutChart.tsx';
import { formatDate, formatPrice } from '../../helpers/fortamatters.ts';
export function Item({
  fatura,
  faturas,
}: {
  fatura: IFatura;
  faturas: IFatura[];
}) {
  return (
    <Material.Grid container spacing={1}>
      <Material.Grid item xs={12}>
        <Material.Stack direction="row" spacing={1}>
          <Material.Card sx={{ minWidth: '100vw' }}>
            <Material.Typography variant="h5" fontWeight={500} padding={1}>
              Fatura de {fatura.nomeDoCliente} referente a:{' '}
              {formatDate(fatura.faturaReferenteA)} com vencimento em:{' '}
              {formatDate(fatura.dataDoVencimento)}
            </Material.Typography>
          </Material.Card>
        </Material.Stack>
      </Material.Grid>
      <Material.Grid item xs={8}>
        <Material.Stack direction="row" spacing={1}>
          <Material.Card
            sx={{
              bgcolor: '#9f4717',
              border: '#82ffa1 1px',
              color: '#ffffff',
              minWidth: '50%',
              height: 113,
              ':hover': {
                bgcolor: 'rgb(69,4,1)',
                background:
                  'linear-gradient(158deg, rgba(69,4,1,1) 0%, rgba(159,71,23,1) 54%, rgba(254,255,130,1) 100%)',
              },
            }}
          >
            <Material.CardContent>
              <Material.Box>
                <DescriptionRoundedIcon />
              </Material.Box>
              <Material.Typography gutterBottom variant="h5" component="div">
                <CountUp
                  delay={0.4}
                  end={Number(fatura.energiaEletricaQuantidade)}
                  duration={0.6}
                />
                KW/h Consumidos
              </Material.Typography>
              <Material.Typography gutterBottom variant="body2" component="div">
                Energia Elétrica
              </Material.Typography>
            </Material.CardContent>
          </Material.Card>

          <Material.Card
            sx={{
              bgcolor: '#023b21',
              border: '#82ffa1 1px',
              color: '#ffffff',
              minWidth: '49%',
              height: 113,
              ':hover': {
                bgcolor: 'rgb(0,0,0)',
                background:
                  'linear-gradient(158deg, rgba(0,0,0,1) 0%, rgba(2,59,33,1) 54%, rgba(130,255,161,1) 100%)',
                transition: '0.3s',
              },
            }}
          >
            <Material.CardContent>
              <Material.Box>
                <DescriptionRoundedIcon />
              </Material.Box>
              <Material.Typography gutterBottom variant="h5" component="div">
                <CountUp
                  delay={0.4}
                  end={Number(fatura.energiaCompensadaQuantidade)}
                  duration={0.6}
                />
                KW/h Gerados
              </Material.Typography>
              <Material.Typography gutterBottom variant="body2" component="div">
                Elnergia Elétrica GD I
              </Material.Typography>
            </Material.CardContent>
          </Material.Card>
        </Material.Stack>
      </Material.Grid>
      <Material.Grid item xs={4}>
        <Material.Stack spacing={1}>
          <Material.Card sx={{ maxWidth: '100%', height: 51 }}>
            <Material.Stack direction="row">
              <Styles.IconContainer>
                <DescriptionRoundedIcon />
              </Styles.IconContainer>
              <Styles.BillContainer>
                <Styles.BillTitle>
                  {formatPrice(fatura.valorTotalDaFatura)}
                </Styles.BillTitle>
                <br />
                <Styles.BillSubTitle>Valor total</Styles.BillSubTitle>
              </Styles.BillContainer>
            </Material.Stack>
          </Material.Card>

          <Material.Card sx={{ maxWidth: '100%', height: 51 }}>
            <Material.Stack direction="row">
              <Styles.IconContainer>
                <DescriptionRoundedIcon />
              </Styles.IconContainer>
              <Styles.BillContainer>
                <Styles.BillTitle>
                  {formatPrice(fatura.energiaCompensadaValorTotal)}
                </Styles.BillTitle>
                <Styles.BillSubTitle>Valor compensado</Styles.BillSubTitle>
              </Styles.BillContainer>
            </Material.Stack>
          </Material.Card>
        </Material.Stack>
      </Material.Grid>

      <Material.Box height={20} />

      <Material.Grid item xs={8}>
        <Material.Card sx={{ height: '62vh' }}>
          <Material.CardContent>
            <BarChart />
          </Material.CardContent>
        </Material.Card>
      </Material.Grid>

      <Material.Grid item xs={4}>
        <Material.Stack spacing={1}>
          <Material.Card sx={{ height: '25vh', overflowY: 'scroll' }}>
            <Material.CardContent>
              <Material.Typography
                variant="body2"
                textAlign="center"
                fontWeight="500"
              >
                Demais Faturas
              </Material.Typography>
              <OtherBills faturas={faturas} current={fatura.numeroDaNotaNF} />
            </Material.CardContent>
          </Material.Card>

          <Material.Card sx={{ height: '36vh' }}>
            <Material.CardContent>
              <DonutChart fatura={fatura} />
            </Material.CardContent>
          </Material.Card>
        </Material.Stack>
      </Material.Grid>
    </Material.Grid>
  );
}
