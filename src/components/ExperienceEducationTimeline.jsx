import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { heroConfig } from '../config/heroConfig';

const TIMELINE_ITEMS = [
  {
    id: 'umich-core',
    leftTitle: 'University of Michigan',
    leftMeta: 'NLP + Machine Learning',
    leftDescription: [
      'Built NLP foundations across tokenization, sequence modeling, and language evaluation workflows.',
      'Applied machine learning concepts through feature engineering, model selection, and robust validation.',
    ],
    centerYear: 'Present',
    rightTitle: 'Data Science & AI Researcher',
    rightMeta: 'Dept. of Anthropology, University of Michigan',
    description: [
      'Built reliable data and AI workflows for survey analysis and model evaluation.',
      'Used Python preprocessing, statistical checks, and LLM-assisted analysis to speed up experiments.',
    ],
  },
  {
    id: 'umich-advanced',
    leftTitle: 'University of Michigan',
    leftMeta: 'Applied Machine Learning + Time Series',
    leftDescription: [
      'Designed applied ML pipelines with experiment tracking, ablations, and metric-driven optimization.',
      'Developed time-series models using trend/seasonality analysis, forecasting baselines, and backtesting.',
    ],
    centerYear: '2025',
    rightTitle: 'Machine Learning Intern',
    rightMeta: 'Sprect Pvt Ltd',
    description: [
      'Built end-to-end ML pipelines for language products and intent modeling.',
      'Ran transformer NLP experiments, curated datasets, and automated model iteration.',
    ],
  },
  {
    id: 'mumbai-foundations',
    leftTitle: 'University of Mumbai',
    leftMeta: 'Deep Learning + AI',
    leftDescription: [
      'Implemented deep learning models with neural architectures, tuning, and generalization-focused evaluation.',
      'Studied AI techniques in search, reasoning, and decision systems for real-world problem solving.',
    ],
    centerYear: '2024',
    rightTitle: 'Generative AI Intern',
    rightMeta: 'White Turtle Studios',
    description: [
      'Built generative AI prototypes for image and creative workflows.',
      'Supported benchmarking and quality improvements for production-ready output.',
    ],
  },
  {
    id: 'mumbai-systems',
    leftTitle: 'University of Mumbai',
    leftMeta: 'Algorithms + DBMS',
    leftDescription: [
      'Strengthened algorithmic thinking through complexity analysis, data structures, and optimization patterns.',
      'Learned DBMS core concepts including schema design, query optimization, indexing, and transactions.',
    ],
    centerYear: '2023',
    rightTitle: 'Backend Developer Intern',
    rightMeta: 'Crucibo',
    description: [
      'Built backend APIs and optimized PostgreSQL data flows.',
      'Supported AWS deployments, monitoring, and service reliability.',
    ],
  },
];

function TimelineRow({ item, index, total, progress, showEducationTitle = true }) {
  const itemSpan = 1 / Math.max(total, 1);
  const start = index * itemSpan;
  const end = Math.min((index + 1) * itemSpan, 1);
  const textOpacity = useTransform(progress, [start, end], [0.42, 1]);
  const textBrightness = useTransform(progress, [start, end], [0.72, 1]);
  const textFilter = useTransform(textBrightness, (v) => `brightness(${v})`);
  const leftMetaLines = item.leftMeta
    ? item.leftMeta.split('+').map((subject) => subject.trim()).filter(Boolean)
    : [];

  return (
    <article className="grid grid-cols-1 gap-5 rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-[1px] md:grid-cols-[1fr_120px_56px_1fr] md:gap-5 md:border-none md:bg-transparent md:p-0">
      {/* Left: Experience */}
      <motion.div style={{ opacity: textOpacity, filter: textFilter }} className="md:pr-8 md:text-left">
        <h3 className="text-2xl font-semibold text-zinc-100 md:text-4xl">{item.rightTitle}</h3>
        <p className="mt-1 text-sm uppercase tracking-[0.14em] text-zinc-400">{item.rightMeta}</p>
        <div className="mt-3 space-y-2">
          {item.description.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-relaxed text-zinc-300 md:text-base">
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>

      {/*Middle Time */}
      <motion.div style={{ opacity: textOpacity, filter: textFilter }} className="md:pt-1 md:text-left">
        <p className="text-3xl font-semibold leading-none text-zinc-200/90 md:text-4xl">{item.centerYear}</p>
      </motion.div>

      <div className="relative hidden min-w-[56px] md:block" />

      {/* Right: Education */}
      <motion.div style={{ opacity: textOpacity, filter: textFilter }} className="md:pl-8 md:text-left">
        {showEducationTitle ? (
          <h4 className="text-2xl font-semibold text-zinc-100 md:text-4xl">{item.leftTitle}</h4>
        ) : null}
        {leftMetaLines.length ? (
          <p className="mt-1 text-sm uppercase tracking-[0.14em] text-violet-300/90">
            {leftMetaLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        ) : null}
        {item.leftDescription?.length ? (
          <div className="mt-3 space-y-2">
            {item.leftDescription.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-zinc-300 md:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        ) : null}
      </motion.div>
    </article>
  );
}

export default function ExperienceEducationTimeline() {
  const sectionRef = useRef(null);
  const timelineBeamLeft = 'calc(50% + 36px)';
  const totalItems = TIMELINE_ITEMS.length;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.22,
  });
  const dotTop = useTransform(smoothProgress, (value) => `calc(${value * 100}% - 9px)`);
  const dotOpacity = useTransform(smoothProgress, [0, 0.03, 1], [0, 1, 1]);
  const textLeadProgress = useTransform(smoothProgress, (value) => {
    const oneItemLead = 1 / Math.max(totalItems, 1);
    return Math.min(1, value + oneItemLead);
  });

  return (
    <section ref={sectionRef} className="relative w-full px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div className="w-full text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-violet-300/80">Career Timeline</p>
            <h2 className="gradient-text mt-3 text-4xl font-semibold md:text-6xl">
              <span className="block">Experience</span>
              <span className="block text-violet-300">&amp;</span>
              <span className="block">Education</span>
            </h2>
            <p className="mt-2 text-sm text-zinc-400 md:text-base">
              Always learning, always applying.
            </p>
          </div>

          <a
            href={heroConfig.resumeUrl}
            download={heroConfig.resumeFileName}
            className="inline-flex items-center rounded-full border border-violet-300/40 bg-violet-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-100 transition hover:bg-violet-500/20"
          >
            Resume
          </a>
        </div>

        <div className="relative">
        <motion.div
    className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 bg-violet-300 md:block"
style={{ left: timelineBeamLeft, scaleY: smoothProgress, transformOrigin: 'top' }} 
          />
        
          <motion.div
            className="pointer-events-none absolute hidden h-[18px] w-[18px] -translate-x-1/2 rounded-full border border-violet-100/90 bg-violet-200 shadow-[0_0_22px_rgba(196,128,252,1),0_0_52px_rgba(168,85,247,0.95)] transition-[top] duration-100 md:block"
            style={{ 
              left: timelineBeamLeft, 
              top: dotTop, 
              opacity: dotOpacity 
            }}
          />
          <motion.div
            className="pointer-events-none absolute top-0 hidden h-full w-[3px] bg-violet-300/90 blur-[1px] md:block"
            style={{ 
              left: timelineBeamLeft, 
              scaleY: smoothProgress, 
              transformOrigin: 'top' 
            }}
          />

          <div className="space-y-12 md:space-y-16">
            {TIMELINE_ITEMS.map((item, index) => {
              const prev = TIMELINE_ITEMS[index - 1];
              const showEducationTitle = !prev || prev.leftTitle !== item.leftTitle;

              return (
                <TimelineRow
                  key={item.id}
                  item={item}
                  index={index}
                  total={totalItems}
                  progress={textLeadProgress}
                  showEducationTitle={showEducationTitle}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
