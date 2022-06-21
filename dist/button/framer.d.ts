interface itemsVariantsProps {
    height: number;
    hoverBgColor: string;
    hoverColor: string;
    color: string;
    bgColor: string;
}
export declare const itemVariants: (props: itemsVariantsProps) => {
    animate: {
        backgroundColor: string;
        color: string;
    };
    animateLoading: {
        width: number;
        borderRadius: string;
    };
    whileHover: {
        color: string;
        backgroundColor: string;
    };
    whileTap: {
        backgroundColor: string;
        color: string;
        scale: number;
    };
};
export {};
