import React from 'react';
import clsx from 'clsx';

export default function Section({
  id,
  title,
  children,
  className,
}: {
  id?: string;
  title?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={clsx('max-w-5xl mx-auto px-6 py-16', className)}>
      {title && <h2 className="font-[Wushu] text-3xl md:text-5xl mb-6 text-brandAqua">{title}</h2>}
      <div className="prose prose-invert max-w-none">{children}</div>
    </section>
  );
}
