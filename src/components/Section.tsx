import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface SectionProps {
  title: string;
  content: string;
  children?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, content, children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({
    frame,
    fps,
    config: {
      damping: 200,
    },
  });

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-white">
      <div
        className="max-w-4xl"
        style={{
          opacity: enter,
          transform: `translateY(${(1 - enter) * 50}px)`,
        }}
      >
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8">{content}</p>
        {children}
      </div>
    </div>
  );
};