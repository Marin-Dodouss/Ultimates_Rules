import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
  Img,
} from 'remotion';
import { Field } from './components/Field';
import { Title } from './components/Title';
import { Section } from './components/Section';

export const UltimateFrisbeeRules = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill className="bg-gradient-to-br from-blue-600 to-blue-800">
      <div
        style={{ opacity }}
        className="flex flex-col items-center justify-center h-full"
      >
        {/* Introduction - 0-5s */}
        <Sequence from={0} durationInFrames={150}>
          <Title
            title="Règles de l'Ultimate Frisbee"
            subtitle="Limites de l'aire de jeu"
          />
        </Sequence>

        {/* Section 1 - Definition - 5-10s */}
        <Sequence from={150} durationInFrames={150}>
          <Section
            title="1. Définition de l'Aire de Jeu"
            content="L'aire de jeu est une zone rectangulaire composée de la zone centrale et des zones d'en-but."
          >
            <Field showZones={true} />
          </Section>
        </Sequence>

        {/* Section 2 - Lines - 10-15s */}
        <Sequence from={300} durationInFrames={150}>
          <Section
            title="2. Les Lignes de Périmètre"
            content="Les lignes de périmètre comprennent deux lignes de touche et deux lignes de fond."
          >
            <Field showBoundaries={true} />
          </Section>
        </Sequence>

        {/* Section 3 - Out - 15-20s */}
        <Sequence from={450} durationInFrames={150}>
          <Section
            title="3. Out"
            content="Tout ce qui se trouve en sur ou dehors des lignes de périmètre est considéré comme out."
          >
            <Field showOutZone={true} />
          </Section>
        </Sequence>

        {/* Section 4 - Player Status - 20-25s */}
        <Sequence from={600} durationInFrames={150}>
          <Section
            title="4. Statut des Joueurs"
            content="Un joueur conserve son statut jusqu'à ce qu'il touche le sol."
          >
            <Field showPlayers={true} />
          </Section>
        </Sequence>

        {/* Section 5 - Disc Rules - 25-30s */}
        <Sequence from={750} durationInFrames={150}>
          <Section
            title="5. Le Disque et les limites"
            content="Si le disque touche l'extérieur, il est immédiatement considéré out."
          >
            <Field showDisc={true} />
          </Section>
        </Sequence>

        {/* Section 6 - Turnover - 30-35s */}
        <Sequence from={900} durationInFrames={150}>
          <Section
            title="6. Situations de Turnover"
            content="Un joueur attrapant le disque et atterrissant out cause un turnover."
          >
            <Field showTurnover={true} />
          </Section>
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};
