import { type JSX } from 'solid-js';

type IconProps = {
  emoji: string;
  bgColor?: string;
  size?: string;
};

export default function Icon(props: IconProps): JSX.Element {
  return (
    <div
      class={`rounded-full flex items-center justify-center ${
        props.bgColor ?? 'bg-orange-100'
      } ${props.size ?? 'w-8 h-8'}`}
    >
      <span class="text-lg">{props.emoji}</span>
    </div>
  );
}
