import { ShieldCheck, Stethoscope, Microscope, Flower2 } from 'lucide-react';
import type { LocationCardProps } from '../types';

export const NAV_LINKS = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre Mim', href: '#sobre' },
    { name: 'Tratamentos', href: '#tratamentos' },
    { name: 'Locais', href: '#locais' },
] as const;

export const SERVICES = [
    {
        title: 'Prevenção e Rotina',
        items: ['Anticoncepção', 'Inserção de DIU e Implantes', 'Consulta Pré-concepcional'],
        icon: ShieldCheck,
    },
    {
        title: 'Diagnóstico e Tratamento',
        items: ['Endometriose', 'Síndrome dos Ovários Policísticos (SOP)', 'Irregularidade Menstrual'],
        icon: Stethoscope,
    },
    {
        title: 'Cirurgia',
        items: ['Cirurgia Ginecológica', 'Histeroscopia diagnóstica', 'Histeroscopia cirúrgica'],
        icon: Microscope,
    },
    {
        title: 'Maturidade',
        items: ['Menopausa', 'Reposição Hormonal', 'Terapia Hormonal'],
        icon: Flower2,
    },
] as const;

export const LOCATIONS: LocationCardProps[] = [
    {
        name: 'Clínica Santa Helena',
        city: 'Aracaju/SE',
        phone: '(79) 99602-1112',
        delay: 0,
    },
    {
        name: 'Clínica HOMO',
        city: 'Aracaju/SE',
        phone: '(79) 99602-1112',
        delay: 0.1,
    },
    {
        name: 'Clínica HARMONIA',
        city: 'Umbaúba/SE',
        phone: '(79) 99602-1112',
        delay: 0.2,
    },
];

export const WHATSAPP_URL = 'https://wa.me/5579996021112';
