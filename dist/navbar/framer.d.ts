export declare const itemVariants: () => {
    initial: {
        opacity: number;
    };
    animate: (i: number) => {
        opacity: number;
        transition: {
            delay: number;
        };
    };
    exit: {
        opacity: number;
    };
    whileHover: {
        scale: number;
        transition: {
            delay: number;
        };
    };
    whileTap: {
        scale: number;
    };
};
