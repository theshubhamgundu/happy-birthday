export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export interface Photo {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export interface Letter {
  greeting: string;
  body: string[];
  closing: string;
  signature: string;
}

export interface LoveReason {
  id: string;
  number: number;
  text: string;
}

export interface Sticker {
  id: string;
  emoji: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size: string;
  opacity: string;
  delay: string;
  duration: string;
}
