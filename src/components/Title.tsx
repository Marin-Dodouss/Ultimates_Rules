import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface TitleProps {
  title: string;
  subtitle: string;
}

export const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleAnimation = spring({
    frame,
    fps,
    config: {
      damping: 200,
    },
  });

  const subtitleAnimation = spring({
    frame: Math.max(0, frame - 30),
    fps,
    config: {
      damping: 200,
    },
  });

  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <h1
        className="text-6xl font-bold mb-4"
        style={{
          transform: `scale(${titleAnimation})`,
          opacity: titleAnimation,
        }}
      >
        {title}
      </h1>
      <h2
        className="text-3xl"
        style={{
          transform: `translateY(${(1 - subtitleAnimation) * 30}px)`,
          opacity: subtitleAnimation,
        }}
      >
        {subtitle}
      </h2>
    </div>
  );
};