import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface LocationCardProps {
  name: string;
  city: string;
  phone: string;
  delay?: number;
}