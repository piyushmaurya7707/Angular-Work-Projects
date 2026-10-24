import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

  features: Feature[] = [
    {
      icon: '🤖',
      title: 'Intelligent Automation',
      description: 'Automate complex workflows with advanced machine learning models that learn and adapt over time.'
    },
    {
      icon: '🧠',
      title: 'Natural Language Processing',
      description: 'Understand and generate human language with state-of-the-art NLP models for chatbots and content creation.'
    },
    {
      icon: '📊',
      title: 'Predictive Analytics',
      description: 'Make data-driven decisions with powerful predictive models that forecast trends and outcomes.'
    },
    {
      icon: '👁️',
      title: 'Computer Vision',
      description: 'Extract insights from images and videos using cutting-edge computer vision technology.'
    },
    {
      icon: '🔒',
      title: 'AI Security',
      description: 'Protect your systems with intelligent threat detection and real-time anomaly monitoring.'
    },
    {
      icon: '⚡',
      title: 'Real-time Inference',
      description: 'Deploy models that deliver ultra-fast predictions with minimal latency at scale.'
    }
  ];

  stats: Stat[] = [
    { value: '10M+', label: 'API Calls Daily' },
    { value: '99.9%', label: 'Uptime' },
    { value: '50+', label: 'AI Models' },
    { value: '120+', label: 'Countries' }
  ];
}