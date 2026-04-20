import RegistrationButtons from "@/components/RegistrationButtons";

interface RegistrationDropdownProps {
  buttonClassName: string;
  panelClassName: string;
  thailandClassName: string;
  internationalClassName: string;
  groupClass?: string;
  wrapperClassName?: string;
  ariaLabel?: {
    thailand?: string;
    international?: string;
  };
}

export default function RegistrationDropdown({
  buttonClassName,
  panelClassName,
  thailandClassName,
  internationalClassName,
  groupClass = "group",
  wrapperClassName = "relative",
  ariaLabel,
}: RegistrationDropdownProps) {
  // Determine the correct group-open class based on groupClass
  const chevronRotateClass = groupClass === "group" 
    ? "group-open:rotate-180" 
    : `${groupClass.replace("group", "group-open")}:rotate-180`;

  return (
    <details className={`${groupClass} ${wrapperClassName}`}>
      <summary className={buttonClassName}>
        <span>Register</span>
        <svg
          className={`h-4 w-4 transition-transform ${chevronRotateClass}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 9 6 6 6-6" />
        </svg>
      </summary>

      <div className={panelClassName}>
        <RegistrationButtons
          classNameByAudience={{
            thailand: thailandClassName,
            international: internationalClassName,
          }}
          containerClassName="flex flex-col gap-2"
          ariaLabelByAudience={ariaLabel}
        />
      </div>
    </details>
  );
}
