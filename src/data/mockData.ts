import type { 
  ProblemSolution, 
  Offering, 
  FacultyMember, 
  Stat, 
  InstagramHighlight, 
  Event, 
  QuickOption 
} from '@/types';

export const problemSolutions: ProblemSolution[] = [
  {
    id: '1',
    icon: '📚',
    problem: 'Struggling with consistency',
    solution: 'Structured workout routines to build lasting fitness habits'
  },
  {
    id: '2',
    icon: '😴',
    problem: 'Lack of motivation',
    solution: 'Peer-driven accountability groups to keep you consistent'
  },
  {
    id: '3',
    icon: '🔄',
    problem: 'Unbalanced lifestyle',
    solution: 'Holistic fitness approach combining physical and mental wellness'
  }
];

export const offerings: Offering[] = [
  {
    id: '1',
    icon: '🏋️',
    title: 'Guided Strength Training',
    description: 'Access to structured strength training 6 days/week with certified trainers'
  },
  {
    id: '2',
    icon: '🏃',
    title: 'Cardio & Sports',
    description: 'Basketball, badminton, swimming sessions and cardio workshops'
  },
  {
    id: '3',
    icon: '🍎',
    title: 'Nutrition Guidance',
    description: 'Personalized nutrition plans and healthy meal prep workshops'
  },
  {
    id: '4',
    icon: '👥',
    title: 'Community Events',
    description: 'Monthly fitness challenges, outdoor adventures, and social meetups'
  }
];

export const facultyMembers: FacultyMember[] = [
  {
    id: '1',
    name: 'DR FELIX A',
    image: '/images/faculty.jpeg',
    title: 'Fitness Expert'
  },
  {
    id: '2',
    name: 'MR. DINESH KUMAR',
    image: '/images/faculty2.jpeg',
    title: 'Certified Trainer'
  }
];

export const stats: Stat[] = [
  {
    id: '1',
    number: '1,659+',
    label: 'Followers on Instagram'
  },
  {
    id: '2',
    number: '147+',
    label: 'Posts on Instagram'
  }
];

export const instagramHighlights: InstagramHighlight[] = [
  {
    id: '1',
    icon: '💪',
    title: 'Motivation Monday',
    description: 'Daily workout tips to kickstart your week'
  },
  {
    id: '2',
    icon: '🔥',
    title: 'Transformation Tuesday',
    description: 'Member success stories to inspire your journey'
  },
  {
    id: '3',
    icon: '📸',
    title: 'Workout Wednesday',
    description: 'Exercise demonstrations for perfect form'
  },
  {
    id: '4',
    icon: '🧘',
    title: 'Mindful Thursday',
    description: 'Mental wellness tips for balanced living'
  }
];

export const events: Event[] = [
  {
    id: '1',
    title: 'Annual Fitness Championship',
    description: 'Our biggest event of the year featuring competitions in strength, endurance, and team challenges.',
    date: 'December 2025',
    image: '/images/events.jpeg',
    category: 'championship'
  },
  {
    id: '2',
    title: 'Wellness Workshop Series',
    description: 'Educational sessions on nutrition, mental health, and lifestyle balance for students.',
    date: 'November 2025',
    image: '/images/rec.jpeg',
    category: 'workshop'
  },
  {
    id: '3',
    title: 'Team Building Retreat',
    description: 'Off-campus activities focused on building camaraderie and leadership skills.',
    date: 'October 2025',
    image: '/images/team.jpeg',
    category: 'retreat'
  }
];

export const quickOptions: QuickOption[] = [
  { id: '1', label: 'Club Events', value: 'events' },
  { id: '2', label: 'Recruitment Process', value: 'recruitment' },
  { id: '3', label: 'General Inquiry', value: 'general' }
];

export const socialLinks = {
  whatsapp: 'https://chat.whatsapp.com/invite',
  instagram: 'https://www.instagram.com/fitnessclubvitc',
  email: 'mailto:fitness@vit.ac.in'
};