export default function Marquee() {
  const items = [
    'Unreal Engine 5.4',
    'AI Code Evaluation',
    'FPS Gameplay',
    'Python · Java · C',
    'Local LLM · Ollama',
    'C++ Blueprints',
    'NodeJS Backend',
    'Level-Based Difficulty',
  ];

  // Duplicate for seamless loop
  const allItems = [...items, ...items];

  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {allItems.map((text, i) => (
          <div className="marquee-item" key={i}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
