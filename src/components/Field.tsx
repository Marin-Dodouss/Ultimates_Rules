import { interpolate, useCurrentFrame } from 'remotion';
import { Circle, Disc } from 'lucide-react';

interface FieldProps {
  showZones?: boolean;
  showBoundaries?: boolean;
  showOutZone?: boolean;
  showPlayers?: boolean;
  showDisc?: boolean;
  showTurnover?: boolean;
}

export const Field: React.FC<FieldProps> = ({
  showZones,
  showBoundaries,
  showOutZone,
  showPlayers,
  showDisc,
  showTurnover,
}) => {
  const frame = useCurrentFrame();
  
  const lineOpacity = interpolate(frame, [0, 30], [0, 1]);
  const playerAnimation = interpolate(frame, [0, 60], [0, 1]);

  return (
    <div className="relative w-[800px] h-[400px] border-4 border-white rounded-lg overflow-hidden">
      {/* Field background */}
      <div className="absolute inset-0 bg-green-600" />

      {/* End zones */}
      {showZones && (
        <>
          <div className="absolute left-0 top-0 w-[100px] h-full bg-yellow-500 opacity-50" />
          <div className="absolute right-0 top-0 w-[100px] h-full bg-yellow-500 opacity-50" />
        </>
      )}

      {/* Boundary lines */}
      {showBoundaries && (
        <div
          className="absolute inset-0 border-4 border-white"
          style={{ opacity: lineOpacity }}
        />
      )}

      {/* Out zone visualization */}
      {showOutZone && (
        <div className="absolute -inset-8 -z-10 bg-red-500 opacity-30" />
      )}

      {/* Players */}
      {showPlayers && (
        <div className="absolute inset-0" style={{ opacity: playerAnimation }}>
          <Circle className="absolute text-blue-500 w-8 h-8" style={{ left: '40%', top: '50%' }} />
          <Circle className="absolute text-red-500 w-8 h-8" style={{ left: '60%', top: '50%' }} />
        </div>
      )}

      {/* Disc */}
      {showDisc && (
        <Disc
          className="absolute w-8 h-8 text-white"
          style={{
            left: '50%',
            top: '50%',
            transform: `translate(-50%, -50%) rotate(${frame * 2}deg)`,
          }}
        />
      )}

      {/* Turnover visualization */}
      {showTurnover && (
        <div className="absolute inset-0">
          <Circle
            className="absolute text-blue-500 w-8 h-8"
            style={{
              left: '95%',
              top: '50%',
              transform: `translate(-50%, -50%) scale(${playerAnimation})`,
            }}
          />
          <Disc
            className="absolute w-8 h-8 text-white"
            style={{
              left: '95%',
              top: '50%',
              transform: `translate(-50%, -50%) rotate(${frame * 2}deg)`,
            }}
          />
        </div>
      )}
    </div>
  );
};