import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="breadcrumbs mb-6">
      {items.map((item, index) => (
        <span key={index}>
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span className="text-slate-900 dark:text-white">{item.label}</span>
          )}
          {index < items.length - 1 && <span> / </span>}
        </span>
      ))}
    </nav>
  );
}
