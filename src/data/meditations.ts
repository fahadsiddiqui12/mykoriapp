import FavoriteIcon from '@/assets/images/mediation_favorites_icon.svg'
import MeditationIcon1 from '@/assets/images/meditation_icon1.svg'
import MeditationIcon2 from '@/assets/images/meditation_icon2.svg'
import MeditationIcon3 from '@/assets/images/meditation_icon3.svg'
import MeditationIcon4 from '@/assets/images/meditation_icon4.svg'
import MeditationIcon5 from '@/assets/images/meditation_icon5.svg'
import MeditationIcon6 from '@/assets/images/meditation_icon6.svg'
import MeditationIcon7 from '@/assets/images/meditation_icon7.svg'
import MeditationIcon8 from '@/assets/images/meditation_icon8.svg'
import RecentIcon from '@/assets/images/meditation_recent_icon.svg'

export const categories = [
  'Stress',
  'Sleep',
  'Healing',
  'Mindfulness',
  'Anxiety',
  'Confidence',
  'Morning',
  'Energy Reset',
  'Evening',
];

export const meditations = [
  { id: '1', title: 'Drifting Off',   category: 'Sleep',   duration: '12 min' },
  { id: '2', title: 'Rise and Shine', category: 'Morning', duration: '5 min'  },
  { id: '3', title: 'Night Quiet',    category: 'Sleep',   duration: '20 min' },
  { id: '4', title: 'Deep Rest',      category: 'Sleep',   duration: '30 min' },
  { id: '5', title: 'Let It Go',      category: 'Stress',  duration: '10 min' },
  { id: '6', title: 'Calm Breath',    category: 'Anxiety', duration: '8 min'  },
];

export const meditationsCategoryCards = [
  { id: '1', name: 'Stress',      subtitle: '14 sessions',      icon: MeditationIcon1 },
  { id: '2', name: 'Sleep',       subtitle: '18 slumber rites', icon: MeditationIcon2 },
  { id: '3', name: 'Healing',     subtitle: '11 restorative',   icon: MeditationIcon3 },
  { id: '4', name: 'Mindfulness', subtitle: '16 practices',     icon: MeditationIcon4 },
  { id: '5', name: 'Anxiety',     subtitle: '9 sanctuaries',    icon: MeditationIcon5 },
  { id: '6', name: 'Confidence',  subtitle: '8 solar flows',    icon: MeditationIcon6 },
  { id: '7', name: 'Morning',     subtitle: 'Dawn awaken',      icon: MeditationIcon7 },
  { id: '8', name: 'Evening',     subtitle: 'Dusk release',     icon: MeditationIcon8 },
]

export const recentFavoriteData = [
  { id: '1', name: 'Favorites', subtitle: '6 saved', icon: FavoriteIcon },
  { id: '2', name: 'Recent',  subtitle: 'Resume play', icon: RecentIcon },
]