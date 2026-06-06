type SectionHeadProps = {
  title?: string;
  description?: string;
  image?: string;
};

export default function SectionHead({
  title,
  description,
  image,
 
}: SectionHeadProps) {
  return (
    <div>
      <h2 className="text-base font-semibold  mb-4">{title}</h2>
      {description && <p className="">{description}</p>}
      {image && <p className="">{image}</p>}
    </div>
  );
}
