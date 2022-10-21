declare module '*.module.css' {
    interface ClassNames {
        [className: string]: string
    }

    const classNames: ClassNames;
    export = classNames
}

declare module '*.svg' {
    import { FC, SVGProps } from 'react';
    const SVG: FC<SVGProps<SVGSVGElement>>;

    export default SVG;
}