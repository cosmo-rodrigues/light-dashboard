import * as Material from '@mui/material';
import * as Components from '../../components';
import { NavBar } from '../../components/NavBar/NavBar';

import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';

import * as Styles from './styles';

export function Dashboard() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#ECEFF1',
        background:
          'linear-gradient(158deg, rgba(224, 224, 224) 0%, rgba(233, 237, 254) 100%',
      }}
    >
      <NavBar />
      <Material.Box height={70} />
      <Material.Box sx={{ display: 'flex' }}>
        <Components.SideNav />
        <Material.Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Material.Grid container spacing={2}>
            <Material.Grid item xs={8}>
              <Material.Stack direction="row" spacing={2}>
                <Material.Card
                  sx={{
                    bgcolor: '#9f4717',
                    border: '#82ffa1 1px',
                    color: '#ffffff',
                    minWidth: '49%',
                    height: 150,
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
                    <Material.Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      300 KW/h Consumidos
                    </Material.Typography>
                    <Material.Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                    >
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
                    height: 150,
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
                    <Material.Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      300 KW/h Gerados
                    </Material.Typography>
                    <Material.Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                    >
                      Elnergia Elétrica GD I
                    </Material.Typography>
                  </Material.CardContent>
                </Material.Card>
              </Material.Stack>
            </Material.Grid>
            <Material.Grid item xs={4}>
              <Material.Stack spacing={2}>
                <Material.Card sx={{ maxWidth: 345 }}>
                  <Material.Stack direction="row">
                    <Styles.IconContainer>
                      <DescriptionRoundedIcon />
                    </Styles.IconContainer>
                    <Styles.BillContainer>
                      <Styles.BillTitle>R$1100</Styles.BillTitle>
                      <br />
                      <Styles.BillSubTitle>Mês atual</Styles.BillSubTitle>
                    </Styles.BillContainer>
                  </Material.Stack>
                </Material.Card>

                <Material.Card sx={{ maxWidth: 345 }}>
                  <Material.Stack direction="row">
                    <Styles.IconContainer>
                      <DescriptionRoundedIcon />
                    </Styles.IconContainer>
                    <Styles.BillContainer>
                      <Styles.BillTitle>R$1500</Styles.BillTitle>
                      <br />
                      <Styles.BillSubTitle>Mês atual</Styles.BillSubTitle>
                    </Styles.BillContainer>
                  </Material.Stack>
                </Material.Card>
              </Material.Stack>
            </Material.Grid>

            <Material.Box height={20} />

            <Material.Grid item xs={8}>
              <Material.Card sx={{ height: '60vh' }}>
                <Material.CardContent>
                  <Material.Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Lizard
                  </Material.Typography>
                </Material.CardContent>
              </Material.Card>
            </Material.Grid>
            <Material.Grid item xs={4}>
              <Material.Card sx={{ height: '60vh' }}>
                <Material.CardContent>
                  <Material.Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Lizard
                  </Material.Typography>
                </Material.CardContent>
              </Material.Card>
            </Material.Grid>
          </Material.Grid>
        </Material.Box>
      </Material.Box>
    </div>
  );
}
