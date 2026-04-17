import { registrationOptions } from "@/lib/conference";

type RegistrationButtonsProps = {
  classNameByAudience: {
    thailand: string;
    international: string;
  };
  containerClassName?: string;
  ariaLabelByAudience?: {
    thailand?: string;
    international?: string;
  };
};

export default function RegistrationButtons({
  classNameByAudience,
  containerClassName,
  ariaLabelByAudience,
}: RegistrationButtonsProps) {
  return (
    <div className={containerClassName}>
      {registrationOptions.map((option) => (
        <a
          key={option.href}
          href={option.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabelByAudience?.[option.audience]}
          className={classNameByAudience[option.audience]}
        >
          {option.label}
        </a>
      ))}
    </div>
  );
}
