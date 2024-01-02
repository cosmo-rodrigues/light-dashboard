import * as Material from '@mui/material';

export function CarouselSkeleton() {
  return (
    <Material.Paper sx={{ padding: '12px', overflow: 'hidden', width: '90%' }}>
      <Material.Box height={20} />
      <Material.Skeleton variant="rectangular" width="100%" height={30} />
      <Material.Box height={40} />
      <Material.Skeleton variant="rectangular" width="100%" height={200} />
      <Material.Box height={20} />
      <Material.Skeleton variant="rectangular" width="100%" height={300} />
    </Material.Paper>
  );
}
