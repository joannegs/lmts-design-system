export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'success' | 'alert';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function getVariant(
  variant: ButtonProps['variant'],
  disabled: ButtonProps['disabled']) {
  switch(variant) {
    case 'primary': 
      return disabled ? 'bg-disabled text-disabled' : 'bg-primary text-white';
    case 'secondary': 
      return disabled ? 'bg-disabled text-disabled' : 'bg-primary-50 text-primary';
    case 'tertiary':
      return disabled ? 'text-disabled' : 'text-primary';
    case 'error':
      return disabled ? 'bg-disabled text-disabled' : 'bg-error text-white';
    case 'alert':
      return disabled ? 'bg-disabled text-disabled' : 'bg-alert text-black';
    case 'success':
      return disabled ? 'bg-disabled text-disabled' : 'bg-success text-white';
    default: 
      return disabled ? '' : '';
  }
};

const Button = ({ variant = 'primary', children, className, disabled, ...rest }: ButtonProps) => {
  return <button
    className={`rounded-md px-6 py-2 ${getVariant(variant, disabled)} ${className}`}
    disabled={disabled}
    {...rest}
  >
    { children }
  </button>
};

export default Button;