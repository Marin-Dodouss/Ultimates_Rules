import { Composition } from 'remotion';
import { UltimateFrisbeeRules } from './Video';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="UltimateFrisbeeRules"
        component={UltimateFrisbeeRules}
        durationInFrames={1050} // 35 seconds at 30fps
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};