import { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
}

export interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  description?: string;
}

export interface SocialLink {
  icon: LucideIcon;
  label: string;
  text: string;
  href: string;
}