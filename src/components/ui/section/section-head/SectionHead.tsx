type SectionHeadProps = {
  title: string;
  description?: string;
};

export default function SectionHead({ title, description }: SectionHeadProps) {
  return (
    <div>
      <h2 className="text-xl font-bold  mb-4">{title}</h2>
      {description && <p className="">{description}</p>}
    </div>
  );
}
