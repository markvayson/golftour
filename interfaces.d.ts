interface PlayerStatsCardProps extends StatsProps {
  id: number;
  name: string;
  nickname: string;
  gender: string;
  rank?: number;
}

interface StatsProps {
  gross?: number;
  net?: number;
  hcp?: number;
  points: number;
}

interface EventSeriesProps {
  title: string;
  season_year: string;
  description?: string;
}
