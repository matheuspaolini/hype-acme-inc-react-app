import { CSSProperties } from 'react';

type Props = {
  xAxis?: number;
  yAxis?: number;

  style?: CSSProperties;
}

export function Spacer({ xAxis, yAxis, style = {} }: Props) {
  const width = xAxis || 1;
  const height = yAxis || 1;

  return (
    <span
      style={{
        display: 'block',
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...style,
      }}
    />
  );
};
