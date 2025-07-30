type SectionHeadProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  is_active: boolean;
  is_highlighted: boolean;
  created_at: string;
  updated_at: string;
};

export default function SectionHead({ title, description, image, is_highlighted, is_active, created_at, updated_at }: SectionHeadProps) {
  return (
    <div>
      <h2 className="text-xl font-bold  mb-4">{title}</h2>
      {description && <p className="">{description}</p>}
      {image && <p className="">{image}</p>}

    </div>
  );
}
