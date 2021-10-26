import Image from 'next/image';

type ButtonColorsT = "red" | 'blue';

type ButtonSizesT = 'small' | 'regular' | 'large';

type ButtonVariantsT = 'default' | 'outline';

interface IButton {
  color: ButtonColorsT;
  size: ButtonSizesT;
  variant: ButtonVariantsT;
  icon?: string;
  text?: string;
}

const sizes = {
  small: 'px-2 py-1.5 text-xs h-7',
  regular: 'px-3 py-2 text-base h-10',
  large: 'px-5 py-3 text-xl h-13',
}

const iconSizes = {
  small: 12,
  regular: 16,
  large: 20,
}

const redButtonClasses = {
  outline: 'text-red_default border border-red_default hover:text-red_hover hover:border-red_hover active:text-red_pressed hover:border-red_pressed',
  default: 'text-white bg-red_default hover:bg-red_hover active:bg-red_pressed',
}

const blueButtonClasses = {
  outline: 'text-blue_default border border-blue_default hover:text-blue_hover hover:border-blue_hover active:text-blue_pressed hover:border-blue_pressed',
  default: 'text-white bg-blue_default hover:bg-blue_hover active:bg-blue_pressed flex',
}

const buttonColors = {
  blue: blueButtonClasses,
  red: redButtonClasses,
}

const commonButtonClasses = 'text-white-100 rounded-lg focus:outline-none transition duration-300 ease-in-out flex items-center';

export default function Button({ color = 'red', size = 'large', variant = 'default', icon, text }: IButton) {
  return (
    <button className={commonButtonClasses + ' ' + sizes[size] + ' ' + buttonColors[color][variant]}>
      {icon && <Image className="mr-2" src={icon} height={iconSizes[size]} width={iconSizes[size]} />}

      <div className={icon && "ml-2"}>{text}</div>
    </button>
  );
}

