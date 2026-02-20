import { skillsConfig } from '../../config/skillsConfig';

const SKILL_LOGOS = {
  Python: 'https://cdn.simpleicons.org/python',
  'C/C++': 'https://cdn.simpleicons.org/cplusplus',
  Java: 'https://cdn.simpleicons.org/openjdk',
  SQL: 'https://cdn.simpleicons.org/mysql',
  Pandas: 'https://cdn.simpleicons.org/pandas',
  NumPy: 'https://cdn.simpleicons.org/numpy',
  Matplotlib: 'https://cdn.simpleicons.org/plotly',
  SciPy: 'https://cdn.simpleicons.org/scipy',
  PySpark: 'https://cdn.simpleicons.org/apachespark',
  PyTorch: 'https://cdn.simpleicons.org/pytorch',
  TensorFlow: 'https://cdn.simpleicons.org/tensorflow',
  'Scikit-learn': 'https://cdn.simpleicons.org/scikitlearn',
  HuggingFace: 'https://cdn.simpleicons.org/huggingface',
  LangChain: 'https://cdn.simpleicons.org/langchain',
  vLLM: 'https://cdn.simpleicons.org/lightning',
  OpenCV: 'https://cdn.simpleicons.org/opencv',
  AWS: 'https://cdn.simpleicons.org/amazonaws',
  Docker: 'https://cdn.simpleicons.org/docker',
  Git: 'https://cdn.simpleicons.org/git',
  FastAPI: 'https://cdn.simpleicons.org/fastapi',
  BS4: 'https://cdn.simpleicons.org/python',
  'OpenAI API': 'https://cdn.simpleicons.org/openai',
  'AI Agents': 'https://cdn.simpleicons.org/googlegemini',
  CrewAI: 'https://cdn.simpleicons.org/robotframework',
};

function SkillFallback({ label }) {
  const initials = label
    .split(/[\s/+.-]/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
  return (
    <svg viewBox="0 0 64 64" className="h-7 w-7">
      <rect x="2" y="2" width="60" height="60" rx="16" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.35)" />
      <text x="32" y="37" textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="Inter, sans-serif">
        {initials}
      </text>
    </svg>
  );
}

export default function Skills({ onExplore }) {
  return (
    <section className="w-full px-6 pb-16 pt-16 md:px-12 md:pt-20">
      <div className="mb-8 flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="gradient-text text-4xl font-semibold md:text-5xl">
          Skill <span className="text-violet-300 drop-shadow-[0_0_18px_rgba(196,128,252,0.55)]">Pyramid</span>
        </h2>
        <button
          type="button"
          onClick={() => onExplore('projects', { fast: true })}
          className="rounded-full border border-violet-300/50 px-4 py-2 text-xs uppercase tracking-[0.16em] text-violet-200 transition hover:bg-violet-500/20"
        >
          Explore Work
        </button>
      </div>
      <div className="p-1 md:p-2">
        <div className="space-y-8">
          {skillsConfig.pyramid.map((group, index) => (
            <article key={group.id} className="flex flex-col items-center">
              <h3 className="mb-4 text-sm uppercase tracking-[0.2em]" style={{ color: group.accent }}>
                {group.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3" style={{ maxWidth: `${70 + index * 8}%` }}>
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="group relative flex items-center gap-3 rounded-full border border-white/20 bg-gradient-to-b from-white/20 to-white/5 px-4 py-2 text-xs uppercase tracking-[0.12em] text-zinc-200 transition hover:border-violet-300/60"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black/50 p-1">
                      {SKILL_LOGOS[skill] ? (
                        <img src={SKILL_LOGOS[skill]} alt={skill} className="h-6 w-6 object-contain" loading="lazy" />
                      ) : (
                        <SkillFallback label={skill} />
                      )}
                    </span>
                    <span>{skill}</span>
                    <span className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_10px_28px_rgba(106,53,170,0.25)]" />
                  </div>
                ))}
              </div>
              {index < skillsConfig.pyramid.length - 1 && (
                <div className="mt-6 h-6 w-[1px] bg-gradient-to-b from-violet-300/60 to-transparent" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
